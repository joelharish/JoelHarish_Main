/* ============================================================
   VS CODE EXPLORER
   Simulates a VS Code environment for exploring code snippets.
   ============================================================ */

const VSCodeExplorer = (function() {
  'use strict';

  const data = PORTFOLIO.vsCodeFiles;
  let treeEl, tabsEl, codePreEl, langBadge;
  
  let activeTabId = null;
  let openTabs = [];

  function init() {
    treeEl = document.getElementById('vscode-tree');
    tabsEl = document.getElementById('vscode-tabs');
    codePreEl = document.getElementById('vscode-code-pre');
    langBadge = document.getElementById('vscode-status-lang');

    if (!treeEl) return;

    // Load default tab
    openFile('app_jsx');

    // Render tree
    renderTree(data.tree, treeEl, 0);
  }

  function renderTree(nodes, container, depth) {
    nodes.forEach(node => {
      const el = document.createElement('div');
      
      if (node.type === 'folder') {
        el.className = `vscode-tree-item folder ${node.open ? 'open' : ''}`;
        el.style.paddingLeft = `${depth * 12 + 16}px`;
        el.innerHTML = `
          <span class="arrow">▶</span>
          <span>${node.icon}</span>
          <span>${node.name}</span>
        `;
        
        const childrenContainer = document.createElement('div');
        childrenContainer.style.display = node.open ? 'block' : 'none';
        
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          node.open = !node.open;
          el.classList.toggle('open', node.open);
          childrenContainer.style.display = node.open ? 'block' : 'none';
        });

        container.appendChild(el);
        container.appendChild(childrenContainer);
        
        if (node.children) {
          renderTree(node.children, childrenContainer, depth + 1);
        }
      } else {
        el.className = 'vscode-tree-item file';
        el.style.paddingLeft = `${depth * 12 + 32}px`;
        el.innerHTML = `
          <span>${node.icon}</span>
          <span>${node.name}</span>
        `;
        el.dataset.id = node.snippetId;
        
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          openFile(node.snippetId);
          if (window.Achievements) window.Achievements.unlock('code_reader');
        });

        container.appendChild(el);
      }
    });
  }

  function openFile(id) {
    if (!data.snippets[id]) return;
    
    // Add to tabs if not open
    if (!openTabs.includes(id)) {
      openTabs.push(id);
    }
    
    activeTabId = id;
    renderTabs();
    renderCode(id);
    updateTreeHighlight();
  }

  function renderTabs() {
    tabsEl.innerHTML = '';
    openTabs.forEach(id => {
      const snip = data.snippets[id];
      const tab = document.createElement('div');
      tab.className = `vscode-tab ${id === activeTabId ? 'active' : ''}`;
      
      // Find icon from tree
      let icon = '📄';
      const findIcon = (nodes) => {
        for (let n of nodes) {
          if (n.snippetId === id) icon = n.icon;
          if (n.children) findIcon(n.children);
        }
      };
      findIcon(data.tree);

      tab.innerHTML = `
        <span>${icon}</span>
        <span>${snip.title}</span>
        <span class="close-tab" style="font-size:0.6rem;margin-left:8px;opacity:0.5;">✕</span>
      `;

      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-tab')) {
          e.stopPropagation();
          closeTab(id);
        } else {
          activeTabId = id;
          renderTabs();
          renderCode(id);
          updateTreeHighlight();
        }
      });

      tabsEl.appendChild(tab);
    });
  }

  function closeTab(id) {
    openTabs = openTabs.filter(t => t !== id);
    if (openTabs.length === 0) {
      activeTabId = null;
      codePreEl.innerHTML = '';
      langBadge.textContent = 'None';
    } else if (activeTabId === id) {
      activeTabId = openTabs[openTabs.length - 1];
      renderCode(activeTabId);
    }
    renderTabs();
    updateTreeHighlight();
  }

  function renderCode(id) {
    const snip = data.snippets[id];
    if (!snip) return;

    // Simple regex-based syntax highlighting for demo purposes
    let code = escapeHtml(snip.code);
    code = highlightSyntax(code, snip.lang);
    
    codePreEl.innerHTML = code;
    if (langBadge) langBadge.textContent = snip.lang;
  }

  function updateTreeHighlight() {
    document.querySelectorAll('.vscode-tree-item.file').forEach(el => {
      el.classList.toggle('active', el.dataset.id === activeTabId);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlightSyntax(code, lang) {
    // Very basic regex highlighters that work on escaped HTML
    
    // Comments
    code = code.replace(/(\/\/.*?$)/gm, '<span class="token-cmnt">$1</span>');
    code = code.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="token-cmnt">$1</span>');
    
    // Strings
    code = code.replace(/(".*?"|'.*?'|`[\s\S]*?`)/g, '<span class="token-str">$1</span>');
    
    if (lang === 'javascript' || lang === 'typescript' || lang === 'jsx') {
      code = code.replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|await|async|class|extends|new|true|false|null|undefined)\b/g, '<span class="token-kw">$1</span>');
      code = code.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token-cls">$1</span>'); // Classes/Components
      code = code.replace(/([a-zA-Z0-9_]+)(?=\()/g, '<span class="token-fn">$1</span>'); // Functions
    } 
    else if (lang === 'css') {
      code = code.replace(/([a-z-]+)(?=:)/g, '<span class="token-prop">$1</span>');
      code = code.replace(/(\.[a-zA-Z0-9_-]+)/g, '<span class="token-cls">$1</span>');
      code = code.replace(/(var\(--.*?\))/g, '<span class="token-fn">$1</span>');
    }
    else if (lang === 'html') {
      code = code.replace(/&lt;([a-zA-Z0-9-]+)/g, '&lt;<span class="token-tag">$1</span>');
      code = code.replace(/&lt;\/([a-zA-Z0-9-]+)&gt;/g, '&lt;/<span class="token-tag">$1</span>&gt;');
      code = code.replace(/([a-zA-Z-]+)(?==)/g, '<span class="token-attr">$1</span>');
    }
    else if (lang === 'json') {
      code = code.replace(/(&quot;.*?&quot;)(?=:)/g, '<span class="token-prop">$1</span>');
      code = code.replace(/\b([0-9.]+)\b/g, '<span class="token-num">$1</span>');
      code = code.replace(/\b(true|false|null)\b/g, '<span class="token-kw">$1</span>');
    }
    
    return code;
  }

  return { init };

})();

window.VSCodeExplorer = VSCodeExplorer;
