/* ============================================================
   MAIN PORTFOLIO LOGIC
   Handles layout generation, scroll events, animations, modals, etc.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // if (window.CommandPalette) CommandPalette.init();
  if (window.Terminal)       Terminal.init();
  // if (window.VSCodeExplorer) VSCodeExplorer.init();
  if (window.GitHubStats)    GitHubStats.init();

  initTypewriter();
  initTechStack();
  initProjects();
  initCertificates();
  // initLiveCode();
  // initDevStats();
  initTimeline();
  
  setupScrollReveal();
  setupThemeToggle();
  setupContactForm();

  // Scroll Progress
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';

    // Navbar style
    const nav = document.getElementById('navbar');
    if (winScroll > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    
    // Highlight nav links
    highlightNavOnScroll();
  }, { passive: true });

  // Recruiter Mode Toggle
  const recruiterToggle = document.getElementById('recruiter-toggle');
  if (recruiterToggle) {
    recruiterToggle.addEventListener('click', () => {
      const isPressed = recruiterToggle.getAttribute('aria-pressed') === 'true';
      recruiterToggle.setAttribute('aria-pressed', !isPressed);
      document.getElementById('recruiter-track').classList.toggle('on');
      
      const resume = document.getElementById('recruiter-resume');
      if (!isPressed) {
        resume.classList.add('visible');
        if (window.Achievements) window.Achievements.unlock('recruiter');
      } else {
        resume.classList.remove('visible');
      }
    });
  }

  // Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('open');
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', !isOpen);
    });
  }

});

// ── EXPOSED FUNCTIONS ─────────────────────────────────────

// Scroll to section helper
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 70; // Navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = el.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

window.closeMobileMenu = function() {
  document.getElementById('hamburger')?.classList.remove('open');
  document.getElementById('mobile-menu')?.classList.remove('open');
};

// ── INITIALIZERS ──────────────────────────────────────────

function initTypewriter() {
  const twEl = document.getElementById('typewriter-text');
  if (!twEl) return;
  const roles = PORTFOLIO.personal.typewriterRoles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      twEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      twEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    // Add slight randomness for a smoother, more human-like typing effect
    let typeSpeed = isDeleting ? 30 : 50 + Math.random() * 50;

    if (!isDeleting && charIdx === currentRole.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 500; // Pause before new word
    }

    setTimeout(type, typeSpeed);
  }
  
  setTimeout(type, 1500);

  // Populate About section chips & stats
  const chipsEl = document.getElementById('about-chips');
  if (chipsEl) {
    PORTFOLIO.personal.chips.forEach(chip => {
      const el = document.createElement('span');
      el.className = 'about-chip';
      el.textContent = chip.label;
      el.style.borderColor = chip.color;
      el.style.color = chip.color;
      el.style.backgroundColor = `${chip.color}15`; // Add hex transparency
      chipsEl.appendChild(el);
    });
  }

  const statsEl = document.getElementById('about-stats');
  if (statsEl) {
    PORTFOLIO.personal.facts.forEach(fact => {
      const el = document.createElement('div');
      el.className = 'about-stat';
      el.innerHTML = `
        <div class="about-stat-icon">${fact.icon}</div>
        <div class="about-stat-value"><span class="counter" data-target="${fact.value}">0</span>${fact.suffix}</div>
        <div class="about-stat-label">${fact.label}</div>
      `;
      statsEl.appendChild(el);
    });
  }
}

function initTechStack() {
  const tabsEl = document.getElementById('tech-tabs');
  const gridEl = document.getElementById('tech-grid');
  if (!tabsEl || !gridEl) return;

  const categories = Object.keys(PORTFOLIO.techStack);
  
  categories.forEach((cat, idx) => {
    const btn = document.createElement('button');
    btn.className = `tech-tab ${idx === 0 ? 'active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tech-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTechCategory(cat);
    });
    tabsEl.appendChild(btn);
  });

  function renderTechCategory(cat) {
    gridEl.innerHTML = '';
    const skills = PORTFOLIO.techStack[cat];
    
    skills.forEach((skill, idx) => {
      const card = document.createElement('div');
      card.className = 'tech-card';
      card.style.animationDelay = `${idx * 0.05}s`;
      card.innerHTML = `
        <div class="tech-card-top">
          <div class="tech-icon"><i class="${skill.icon}"></i></div>
          <div class="tech-name">${skill.name}</div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
            <span class="tech-level-label">Proficiency</span>
            <span class="tech-level-label">${skill.level}%</span>
          </div>
          <div class="tech-bar-track">
            <div class="tech-bar-fill" style="width: 0%"></div>
          </div>
        </div>
      `;
      gridEl.appendChild(card);
      
      // Animate bar fill after append
      setTimeout(() => {
        const fill = card.querySelector('.tech-bar-fill');
        if(fill) fill.style.width = `${skill.level}%`;
      }, 50);
    });
  }

  // Init first category
  renderTechCategory(categories[0]);
}

function initProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  PORTFOLIO.projects.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = `project-card ${p.featured ? 'featured' : ''}`;
    card.dataset.category = p.category;
    card.style.animationDelay = `${idx * 0.05}s`;
    
    // Map tags
    const tagsHtml = p.tags.slice(0,3).map(t => `<span class="project-tag">${t}</span>`).join('');
    
    card.innerHTML = `
      <div class="project-thumb">
        <span class="project-emoji">${p.emoji}</span>
        ${p.featured ? `<div class="project-featured-badge">Featured</div>` : ''}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <div class="project-subtitle">${p.subtitle}</div>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-footer">
          <div class="project-links">
            ${p.github !== '#' ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link" aria-label="GitHub Repo" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
          </div>
        </div>
      </div>
    `;

    // Click opens modal
    card.addEventListener('click', () => window.openProjectModal(p.id));
    grid.appendChild(card);
  });
}

window.filterProjects = function(category, btnElement) {
  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');

  // Filter grid
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
      // Retrigger animation
      card.style.animation = 'none';
      card.offsetHeight; // trigger reflow
      card.style.animation = 'scaleIn 0.4s var(--ease-out) forwards';
    } else {
      card.classList.add('hidden');
    }
  });
};

// Project Modal Logic
window.openProjectModal = function(id) {
  const p = PORTFOLIO.projects.find(x => x.id === id);
  if (!p) return;

  document.getElementById('pm-emoji').textContent = p.emoji;
  document.getElementById('pm-title').textContent = p.title;
  document.getElementById('pm-subtitle').textContent = p.subtitle;
  document.getElementById('pm-tags').innerHTML = p.tags.map(t => `<span class="badge">${t}</span>`).join('');
  document.getElementById('pm-overview').textContent = p.longDescription;
  document.getElementById('pm-architecture').textContent = p.architecture;
  
  document.getElementById('pm-challenges').innerHTML = p.challenges.map(c => `<li>${c}</li>`).join('');
  document.getElementById('pm-lessons').innerHTML = p.lessons.map(l => `<li>${l}</li>`).join('');
  
  // Code Snippet
  document.getElementById('pm-code-lang').textContent = p.codeSnippet.lang;
  document.getElementById('pm-code-file').textContent = p.title.toLowerCase() + '.' + getExt(p.codeSnippet.lang);
  // Basic highlight
  let safeCode = p.codeSnippet.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  // Simple syntax wrap
  safeCode = safeCode.replace(/\b(const|let|var|function|class|return|await|async|public|private|readonly|override)\b/g, '<span class="token-kw">$1</span>');
  document.getElementById('pm-code').innerHTML = safeCode;

  // Links
  let linksHtml = '';
  if (p.github !== '#') linksHtml += `<a href="${p.github}" target="_blank" class="btn btn-primary btn-sm"><i class="fab fa-github"></i> Source Code</a>`;
  document.getElementById('pm-links').innerHTML = linksHtml;

  const overlay = document.getElementById('project-modal');
  overlay.classList.add('open');
  document.body.classList.add('modal-open');
};

document.getElementById('project-modal-close')?.addEventListener('click', () => {
  document.getElementById('project-modal').classList.remove('open');
  document.body.classList.remove('modal-open');
});
// Close modal on outside click
document.getElementById('project-modal')?.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

function getExt(lang) {
  const exts = { javascript: 'js', typescript: 'ts', python: 'py', csharp: 'cs', php: 'php' };
  return exts[lang] || 'txt';
}

function initCertificates() {
  const grid = document.getElementById('cert-grid');
  const searchInput = document.getElementById('cert-search');
  const filterSelect = document.getElementById('cert-filter');
  if (!grid) return;

  function render(filterCat = 'all', query = '') {
    grid.innerHTML = '';
    let certs = PORTFOLIO.certificates;
    
    if (filterCat !== 'all') {
      certs = certs.filter(c => c.category === filterCat);
    }
    if (query) {
      const q = query.toLowerCase();
      certs = certs.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.skills.some(s => s.toLowerCase().includes(q))
      );
    }

    if (certs.length === 0) {
      grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center;">No certificates match your search.</p>';
      return;
    }

    certs.forEach((c, idx) => {
      const card = document.createElement('div');
      card.className = 'cert-card';
      card.style.setProperty('--cert-color', c.color);
      card.style.animationDelay = `${idx * 0.05}s`;
      card.style.animation = 'scaleIn 0.4s var(--ease-out) forwards';

      card.innerHTML = `
        <div class="cert-header">
          <div class="cert-badge">${c.badge}</div>
          <div class="cert-category" style="color:${c.color}; background:${c.color}20">${c.category}</div>
        </div>
        <h3 class="cert-title">${c.title}</h3>
        <div>
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-date">${c.date}</div>
        </div>
        <div class="cert-skills">
          ${c.skills.map(s => `<span class="cert-skill">${s}</span>`).join('')}
        </div>
        <div class="cert-footer">
          <a href="${c.verifyUrl}" target="_blank" rel="noopener" class="cert-btn primary" style="--cert-color:${c.color}">
            <i class="fas fa-certificate"></i> Verify
          </a>
          
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Initial render
  render();

  // Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => render(filterSelect.value, e.target.value));
  }
  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => render(e.target.value, searchInput.value));
  }
}

function initLiveCode() {
  const sidebar = document.getElementById('code-snippet-list');
  const pre = document.getElementById('code-display');
  const titleEl = document.getElementById('code-main-title');
  const langEl = document.getElementById('code-lang-badge');
  const descEl = document.getElementById('code-desc');
  if (!sidebar) return;

  const data = PORTFOLIO.codeShowcase;

  data.forEach((snip, idx) => {
    const btn = document.createElement('button');
    btn.className = 'code-snippet-btn';
    btn.innerHTML = `${snip.title} <small>${snip.lang}</small>`;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.code-snippet-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      titleEl.textContent = snip.title;
      langEl.textContent = snip.lang;
      descEl.textContent = snip.desc;
      
      // Simple highlighting
      let code = snip.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      code = code.replace(/(\/\/.*?$)/gm, '<span class="token-cmnt">$1</span>');
      code = code.replace(/(".*?"|'.*?'|`[\s\S]*?`)/g, '<span class="token-str">$1</span>');
      code = code.replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|await|async|class|extends|new|true|false|null|undefined|def|class|import|from)\b/g, '<span class="token-kw">$1</span>');
      
      pre.innerHTML = code;
    });

    sidebar.appendChild(btn);

    // Auto-select first
    if (idx === 0) btn.click();
  });
}

function initDevStats() {
  if (typeof Chart === 'undefined') return;

  // Set Chart defaults for dark theme
  Chart.defaults.color = '#94a3b8';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.borderColor = 'rgba(255,255,255,0.08)';

  // Mock Language Radar
  const langCtx = document.getElementById('lang-chart');
  if (langCtx) {
    new Chart(langCtx, {
      type: 'radar',
      data: {
        labels: ['JavaScript', 'TypeScript', 'Python', 'C#', 'SQL', 'HTML/CSS'],
        datasets: [{
          label: 'Skill Level',
          data: [95, 85, 75, 80, 85, 95],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: '#3b82f6',
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#3b82f6'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { r: { angleLines: { color: 'rgba(255,255,255,0.08)' }, grid: { color: 'rgba(255,255,255,0.08)' }, pointLabels: { font: { size: 11 } }, ticks: { display: false } } },
        plugins: { legend: { display: false } }
      }
    });
  }

  // Mock Activity Bar
  const actCtx = document.getElementById('activity-chart');
  if (actCtx) {
    new Chart(actCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Commits',
          data: [12, 19, 15, 25, 22, 5, 8],
          backgroundColor: '#3b82f6',
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: { y: { beginAtZero: true } },
        plugins: { legend: { display: false } }
      }
    });
  }
}

function initTimeline() {
  const track = document.getElementById('timeline-track');
  if (!track) return;

  PORTFOLIO.timeline.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = `timeline-item ${item.current ? 'current' : ''}`;
    
    const tagsHtml = item.tags.map(t => `<span class="badge">${t}</span>`).join('');
    
    el.innerHTML = `
      <div class="timeline-dot">${item.icon}</div>
      <div class="timeline-card">
        <div class="timeline-year">
          ${item.year}
          ${item.current ? '<span class="timeline-current-badge">CURRENT</span>' : ''}
        </div>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-tags">${tagsHtml}</div>
      </div>
    `;
    track.appendChild(el);
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('contact-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      
      status.className = 'form-status success visible';
      status.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! I will get back to you soon.';
      form.reset();
      
      // trigger confetti logically
      import('https://cdn.skypack.dev/canvas-confetti').then(confetti => {
        confetti.default({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }).catch(e => console.log("Confetti failed to load"));

      setTimeout(() => status.classList.remove('visible'), 5000);
    }, 1500);
  });
}

function setupThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? '☀️' : '🌙';
  });
}

// ── UTILITIES & SCROLL LOGIC ──────────────────────────────

function setupScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Counter animation
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          if (!counter.dataset.animated) {
            animateCounter(counter);
            counter.dataset.animated = 'true';
          }
        });
        
        observer.unobserve(entry.target); // Only reveal once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => observer.observe(el));
  
  // Specific observer for timeline items
  const tlObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.5, rootMargin: '0px 0px -100px 0px' });
  
  setTimeout(() => {
    document.querySelectorAll('.timeline-item').forEach(el => tlObserver.observe(el));
  }, 100);
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  
  const duration = 2000;
  const start = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (easeOutExpo)
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    el.textContent = Math.floor(easeProgress * target);
    
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target; // Ensure exact match at end
  }
  
  requestAnimationFrame(update);
}

function highlightNavOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  
  let currentId = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // Account for navbar height
    if (window.scrollY >= sectionTop - 100) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('onclick').includes(currentId)) {
      link.classList.add('active');
    }
  });
}
