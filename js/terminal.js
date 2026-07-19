/* ============================================================
   TERMINAL EASTER EGG
   A secret interactive terminal with commands.
   ============================================================ */

const Terminal = (function() {
  'use strict';

  let modal, body, input, closeBtn;
  let history = [];
  let historyIdx = -1;
  let isOpen = false;

  const COMMANDS = {
    help: {
      desc: 'List available commands',
      exec: () => {
        return `Available commands:
  <span class="terminal-info">help</span>       - Show this message
  <span class="terminal-info">whoami</span>     - About Joel
  <span class="terminal-info">projects</span>   - List featured projects
  <span class="terminal-info">skills</span>     - List technical skills
  <span class="terminal-info">contact</span>    - Show contact information
  <span class="terminal-info">clear</span>      - Clear terminal output
  <span class="terminal-info">neofetch</span>   - Show system info
  <span class="terminal-warning">sudo</span>       - Execute command as superuser
  
  <span class="terminal-success">Tip: Try running 'sudo hire joel'</span>`;
      }
    },
    whoami: {
      desc: 'About Joel',
      exec: () => `Joel Harish — Software Engineer & Open Source Contributor.
Passionate about building elegant solutions to complex problems.`
    },
    projects: {
      desc: 'List projects',
      exec: () => {
        return PORTFOLIO.projects.slice(0,3).map(p => 
          `- <span class="terminal-info">${p.title}</span>: ${p.subtitle}`
        ).join('\n');
      }
    },
    skills: {
      desc: 'List skills',
      exec: () => {
        const fe = PORTFOLIO.techStack.Frontend.map(s => s.name).join(', ');
        const be = PORTFOLIO.techStack.Backend.map(s => s.name).join(', ');
        return `Frontend: ${fe}\nBackend:  ${be}`;
      }
    },
    contact: {
      desc: 'Contact info',
      exec: () => `Email:    joelharish@example.com
GitHub:   github.com/joelharish
LinkedIn: linkedin.com/in/joelharish`
    },
    clear: {
      desc: 'Clear output',
      exec: () => { body.innerHTML = ''; return ''; }
    },
    neofetch: {
      desc: 'System info',
      exec: () => `
<span class="terminal-info">       _           _        </span>   <span class="terminal-success">joel</span>@<span class="terminal-info">portfolio</span>
<span class="terminal-info">      | |         | |       </span>   ----------------
<span class="terminal-info">      | | ___   __| |       </span>   <span class="terminal-warning">OS:</span> Web Browser
<span class="terminal-info">  _   | |/ _ \\ / _\` |       </span>   <span class="terminal-warning">Host:</span> joelharish.dev
<span class="terminal-info"> | |__| | (_) | (_| |       </span>   <span class="terminal-warning">Resolution:</span> ${window.innerWidth}x${window.innerHeight}
<span class="terminal-info">  \\____/ \\___/ \\__,_|       </span>   <span class="terminal-warning">Theme:</span> Dark Slate + Electric Blue
<span class="terminal-info">                            </span>   <span class="terminal-warning">Language:</span> JS (Vanilla)
<span class="terminal-info">                            </span>   <span class="terminal-warning">Developer:</span> Joel Harish
`
    }
  };

  function init() {
    modal = document.getElementById('terminal-modal');
    body = document.getElementById('terminal-body');
    input = document.getElementById('terminal-input');
    closeBtn = document.getElementById('terminal-close-btn');

    if (!modal || !input) return;

    // Listen for ` key to open terminal
    document.addEventListener('keydown', (e) => {
      if (e.key === '`' && !isOpen) {
        e.preventDefault();
        open();
      }
    });

    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    input.addEventListener('keydown', handleInput);
  }

  function open() {
    isOpen = true;
    modal.classList.add('open');
    setTimeout(() => {
      input.focus();
      if (window.Achievements) window.Achievements.unlock('terminal_pro');
    }, 100);
  }

  function close() {
    isOpen = false;
    modal.classList.remove('open');
    input.value = '';
  }

  function handleInput(e) {
    if (e.key === 'Enter') {
      const val = input.value.trim();
      if (val) {
        history.push(val);
        historyIdx = history.length;
        processCommand(val);
      } else {
        printLine(`joel@portfolio:~$ `);
      }
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        input.value = '';
      }
    }
  }

  function processCommand(cmdString) {
    printLine(`<span class="terminal-prompt">joel@portfolio:~$</span> ${cmdString}`);
    
    const args = cmdString.split(' ').filter(Boolean);
    const cmd = args[0].toLowerCase();

    // Secret commands
    if (cmd === 'sudo') {
      if (args[1] === 'hire' && args[2] === 'joel') {
        printLine(`<span class="terminal-success">Process completed successfully.</span>`);
        printLine(`Offer letter accepted. Starting on Monday.`);
        if (window.Achievements) window.Achievements.unlock('sudo_hire');
        return;
      }
      printLine(`<span class="terminal-error">joel is not in the sudoers file. This incident will be reported.</span>`);
      return;
    }

    if (COMMANDS[cmd]) {
      const output = COMMANDS[cmd].exec();
      if (output) printLine(output);
    } else {
      printLine(`<span class="terminal-error">bash: ${cmd}: command not found</span>`);
    }
  }

  function printLine(html) {
    const div = document.createElement('div');
    div.className = 'terminal-line terminal-output';
    div.innerHTML = html;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  return { init, open, close };

})();

window.Terminal = Terminal;
