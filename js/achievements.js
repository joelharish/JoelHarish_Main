/* ============================================================
   ACHIEVEMENT SYSTEM
   Tracks visitor actions and unlocks gamified badges.
   Saves progress to localStorage.
   ============================================================ */

const Achievements = (function() {
  'use strict';

  // State
  let unlocked = [];
  const LOCAL_STORAGE_KEY = 'joel_portfolio_achievements';
  const data = PORTFOLIO.achievements;

  // DOM Elements
  let gridEl, countEl, fillEl, toastEl;
  let toastTimeout;

  // Initialize
  function init() {
    loadProgress();
    renderGrid();
    updateProgressUI();
    attachListeners();
    checkTimeBasedAchievements();
  }

  function loadProgress() {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) unlocked = JSON.parse(saved);
    } catch (e) {
      console.warn("Could not load achievements", e);
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(unlocked));
    } catch (e) {}
  }

  // Render the grid in the Achievements section
  function renderGrid() {
    gridEl = document.getElementById('achievements-grid');
    if (!gridEl) return;

    gridEl.innerHTML = '';
    
    data.forEach((ach, index) => {
      const isUnlocked = unlocked.includes(ach.id);
      
      const card = document.createElement('div');
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'} ${ach.secret ? 'secret' : ''}`;
      card.style.animationDelay = `${index * 0.05}s`;
      
      let html = '';
      if (isUnlocked) {
        html = `
          <div class="ach-unlocked-badge">✓</div>
          <span class="ach-icon">${ach.icon}</span>
          <h4 class="ach-title">${ach.title}</h4>
          <p class="ach-desc">${ach.desc}</p>
        `;
      } else {
        html = `
          <span class="ach-icon">${ach.secret ? '❓' : ach.icon}</span>
          <h4 class="ach-title">${ach.secret ? 'Secret Achievement' : ach.title}</h4>
          <p class="ach-desc">${ach.secret ? 'Keep exploring to discover this...' : ach.desc}</p>
          <div class="ach-locked-label">LOCKED</div>
        `;
      }
      
      card.innerHTML = html;
      gridEl.appendChild(card);
    });
  }

  function updateProgressUI() {
    countEl = document.getElementById('ach-count');
    fillEl  = document.getElementById('ach-progress-fill');
    const totalEl = document.getElementById('ach-total');
    
    if (countEl) countEl.textContent = unlocked.length;
    if (totalEl) totalEl.textContent = data.length;
    
    if (fillEl) {
      const pct = (unlocked.length / data.length) * 100;
      fillEl.style.width = `${pct}%`;
    }
  }

  // Unlock an achievement by ID
  function unlock(id) {
    if (unlocked.includes(id)) return;
    
    const ach = data.find(a => a.id === id);
    if (!ach) return;
    
    unlocked.push(id);
    saveProgress();
    
    // Update UI if on page
    renderGrid();
    updateProgressUI();
    
    // Show Toast
    showToast(ach);
    
    // Trigger confetti if all unlocked (optional)
    if (unlocked.length === data.length) {
      setTimeout(() => {
        console.log("🏆 All achievements unlocked!");
        // We could trigger a global confetti here if we added a library
      }, 1000);
    }
  }

  function showToast(ach) {
    toastEl = document.getElementById('achievement-toast');
    if (!toastEl) return;
    
    document.getElementById('toast-icon').textContent = ach.icon;
    document.getElementById('toast-title').textContent = ach.title;
    document.getElementById('toast-desc').textContent = ach.desc;
    
    toastEl.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 4000);
  }

  // Event listeners for tracking
  function attachListeners() {
    // 1. Explorer: Track sections visited
    const visitedSections = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visitedSections.add(entry.target.id);
          if (visitedSections.size >= 5) {
            unlock('explorer');
          }
        }
      });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('section').forEach(s => observer.observe(s));
    
    // 2. Code Reader: Track VS Code clicks (handled in vscode.js)
    // 3. Cert Hunter: Handled in main.js tab switching
    // 4. Recruiter: Handled in main.js toggle
    // 5. GitHub Stalker: Track if they view repos
    const ghSection = document.getElementById('github-stats');
    if (ghSection) {
      const ghObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) unlock('github_stalker');
      });
      ghObserver.observe(ghSection);
    }

    // 6. Time Traveler: Timeline
    const tlSection = document.getElementById('timeline');
    if (tlSection) {
      const tlObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) unlock('time_traveler');
      });
      tlObserver.observe(tlSection);
    }
  }

  function checkTimeBasedAchievements() {
    const hour = new Date().getHours();
    if (hour >= 22 || hour <= 4) {
      unlock('night_owl');
    }
  }

  // Public API
  return {
    init,
    unlock
  };

})();

// Make it available globally
window.Achievements = Achievements;
