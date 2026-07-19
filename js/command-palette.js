/* ============================================================
   COMMAND PALETTE
   Global Cmd/Ctrl+K search interface for quick navigation.
   ============================================================ */

const CommandPalette = (function() {
  'use strict';

  let palette, input, resultsBox;
  let isOpen = false;
  let activeIndex = -1;
  let currentItems = [];

  const ACTIONS = [
    { id: 'theme', icon: '🌙', label: 'Toggle Dark/Light Theme', type: 'Action', kbd: 'T' },
    { id: 'print', icon: '🖨️', label: 'Print Resume (Recruiter Mode)', type: 'Action', kbd: 'P' },
    { id: 'terminal', icon: '💻', label: 'Open Terminal', type: 'Action', kbd: '`' },
    { id: 'email', icon: '✉️', label: 'Copy Email Address', type: 'Action', kbd: 'C' }
  ];

  function init() {
    palette = document.getElementById('command-palette');
    input = document.getElementById('palette-input');
    resultsBox = document.getElementById('palette-results');
    const trigger = document.getElementById('cmd-palette-trigger');

    if (!palette || !input) return;

    // Listeners
    if (trigger) trigger.addEventListener('click', open);
    
    document.addEventListener('keydown', e => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? close() : open();
      }
      
      if (isOpen) handleKeydown(e);
    });

    palette.addEventListener('click', e => {
      if (e.target === palette) close();
    });

    input.addEventListener('input', () => {
      renderResults(input.value);
    });
  }

  function open() {
    isOpen = true;
    palette.classList.add('open');
    input.value = '';
    renderResults('');
    
    setTimeout(() => {
      input.focus();
      if (window.Achievements) window.Achievements.unlock('hacktivist');
    }, 100);
  }

  function close() {
    isOpen = false;
    palette.classList.remove('open');
    input.blur();
  }

  function renderResults(query) {
    const q = query.toLowerCase().trim();
    resultsBox.innerHTML = '';
    activeIndex = -1;
    currentItems = [];

    // 1. Sections
    const sections = [
      { id: 'about', label: 'About Me', desc: 'Go to About section' },
      { id: 'tech-stack', label: 'Skills & Tech Stack', desc: 'Go to Skills section' },
      { id: 'projects', label: 'Projects', desc: 'Go to Projects section' },
      { id: 'certificates', label: 'Certificates', desc: 'Go to Certificates section' },
      { id: 'github-stats', label: 'GitHub Stats', desc: 'Go to GitHub stats' },
      { id: 'contact', label: 'Contact', desc: 'Go to Contact form' }
    ].filter(s => s.label.toLowerCase().includes(q));

    // 2. Projects
    const projects = PORTFOLIO.projects
      .filter(p => p.title.toLowerCase().includes(q))
      .map(p => ({
        id: `project-${p.id}`,
        title: p.title,
        desc: `View project: ${p.subtitle}`,
        emoji: p.emoji,
        type: 'Project'
      }));

    // 3. Actions
    const actions = ACTIONS.filter(a => a.label.toLowerCase().includes(q));

    // Render HTML
    if (sections.length === 0 && projects.length === 0 && actions.length === 0) {
      resultsBox.innerHTML = '<div class="palette-empty">No results found.</div>';
      return;
    }

    let globalIdx = 0;

    if (actions.length > 0) {
      resultsBox.appendChild(createSectionHeader('Actions'));
      actions.forEach(a => {
        resultsBox.appendChild(createItemNode(a.label, a.icon, 'Action', globalIdx, () => executeAction(a.id), a.kbd));
        currentItems.push({ idx: globalIdx++, action: () => executeAction(a.id) });
      });
    }

    if (sections.length > 0) {
      resultsBox.appendChild(createSectionHeader('Navigation'));
      sections.forEach(s => {
        resultsBox.appendChild(createItemNode(s.label, '🔗', s.desc, globalIdx, () => navTo(s.id)));
        currentItems.push({ idx: globalIdx++, action: () => navTo(s.id) });
      });
    }

    if (projects.length > 0) {
      resultsBox.appendChild(createSectionHeader('Projects'));
      projects.forEach(p => {
        resultsBox.appendChild(createItemNode(p.title, p.emoji, p.desc, globalIdx, () => openProject(p.title)));
        currentItems.push({ idx: globalIdx++, action: () => openProject(p.title) });
      });
    }

    // Select first by default
    if (currentItems.length > 0) {
      setActive(0);
    }
  }

  function createSectionHeader(title) {
    const div = document.createElement('div');
    div.className = 'palette-section-label';
    div.textContent = title;
    return div;
  }

  function createItemNode(title, icon, desc, idx, onClickCb, kbd = '') {
    const div = document.createElement('div');
    div.className = 'palette-item';
    div.id = `palette-item-${idx}`;
    div.innerHTML = `
      <div class="palette-item-icon">${icon}</div>
      <div class="palette-item-label">${title}</div>
      <div class="palette-item-desc">${desc}</div>
      ${kbd ? `<div class="palette-item-kbd">${kbd}</div>` : ''}
    `;
    div.addEventListener('mouseenter', () => setActive(idx));
    div.addEventListener('click', () => {
      onClickCb();
      close();
    });
    return div;
  }

  function setActive(idx) {
    if (activeIndex >= 0) {
      const old = document.getElementById(`palette-item-${activeIndex}`);
      if (old) old.classList.remove('focused');
    }
    activeIndex = idx;
    const curr = document.getElementById(`palette-item-${activeIndex}`);
    if (curr) {
      curr.classList.add('focused');
      curr.scrollIntoView({ block: 'nearest' });
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (activeIndex < currentItems.length - 1) setActive(activeIndex + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (activeIndex > 0) setActive(activeIndex - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && currentItems[activeIndex]) {
        currentItems[activeIndex].action();
        close();
      }
    }
  }

  // Action implementations
  function navTo(id) {
    window.scrollToSection && window.scrollToSection(id);
  }

  function openProject(title) {
    navTo('projects');
    setTimeout(() => {
      const p = PORTFOLIO.projects.find(x => x.title === title);
      if (p && window.openProjectModal) window.openProjectModal(p.id);
    }, 500);
  }

  function executeAction(actionId) {
    if (actionId === 'theme') {
      document.getElementById('theme-toggle')?.click();
    } else if (actionId === 'terminal') {
      if (window.Terminal) window.Terminal.open();
    } else if (actionId === 'print') {
      const t = document.getElementById('recruiter-toggle');
      if (t && t.getAttribute('aria-pressed') === 'false') t.click();
      setTimeout(() => window.print(), 500);
    } else if (actionId === 'email') {
      navigator.clipboard.writeText(PORTFOLIO.personal.email);
      alert('Email copied to clipboard!');
    }
  }

  return { init, open, close };

})();

window.CommandPalette = CommandPalette;
