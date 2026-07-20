// ============================================================
// PORTFOLIO DATA — Joel Harish
// All portfolio content lives here. Easy to update!
// ============================================================

const PORTFOLIO = {

  personal: {
    name: "Joel Harish",
    role: "Software Engineer",
    tagline: "Building elegant solutions to complex problems",
    bio: "I'm a passionate Software Engineer who loves crafting clean, efficient code and building products that make a real difference. With expertise spanning frontend and backend technologies, I thrive at the intersection of creativity and logic.",
    bio2: "I believe great software is built by curious minds who never stop learning.",
    email: "joelharish325@gmail.com",
    github: "joelharish",
    linkedin: "joelharish",
    location: "Sri Lanka",
    resumeUrl: "#",
    avatar: null,
    typewriterRoles: [
      "Software Engineer",
      "Full-Stack Developer",
      "Problem Solver",
      "Code Craftsman"
    ],
    chips: [
      { label: "Tea Addict ☕", color: "#c8872a" },
      { label: "Night Owl 🦉", color: "#7c3aed" },
      { label: "Guitarist 🔓", color: "#059669" },
      { label: "Problem Solver 🧩", color: "#2563eb" },
      { label: "Team Player 🤝", color: "#db2777" }
    ],
    facts: [
      { icon: "💼", label: "Months Of Experience", value: 7, suffix: "+" },
      { icon: "🚀", label: "Projects Built",   value: 20, suffix: "+" },
      { icon: "☕", label: "Cups of Tea",   value: 2847, suffix: "+" }
    ]
  },

  // ── TECH STACK ────────────────────────────────────────────
  techStack: {
    Frontend: [
      { name: "HTML5",      icon: "devicon-html5-plain colored",      level: 95 },
      { name: "CSS3",       icon: "devicon-css3-plain colored",       level: 90 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 75 },
      { name: "React",      icon: "devicon-react-original colored",   level: 70 },
      { name: "Angular",    icon: "devicon-angularjs-plain colored",  level: 65 },
      { name: "TypeScript", icon: "devicon-typescript-plain colored", level: 58 }
    ],
    Backend: [
      { name: "C#",      icon: "devicon-csharp-plain colored",      level: 85 },
      { name: ".NET",    icon: "devicon-dotnetcore-plain colored",   level: 82 },
      { name: "Java",    icon: "devicon-java-plain colored",         level: 60 },
      { name: "Python",  icon: "devicon-python-plain colored",       level: 65 },
      { name: "PHP",     icon: "devicon-php-plain colored",          level: 70 },
      { name: "Node.js", icon: "devicon-nodejs-plain colored",       level: 45 }
    ],
    Database: [
      { name: "SQL Server",  icon: "devicon-microsoftsqlserver-plain colored", level: 85 },
      { name: "MySQL",       icon: "devicon-mysql-plain colored",               level: 80 },
      // { name: "PostgreSQL",  icon: "devicon-postgresql-plain colored",          level: 72 },
      // { name: "MongoDB",     icon: "devicon-mongodb-plain colored",             level: 64 }
    ],
    Tools: [
      { name: "Git",    icon: "devicon-git-plain colored",     level: 90 },
      { name: "GitHub", icon: "devicon-github-original",       level: 88 },
      { name: "VS Code",icon: "devicon-vscode-plain colored",  level: 94 },
      { name: "C",      icon: "devicon-c-plain colored",       level: 72 },
      { name: "Linux",  icon: "devicon-linux-plain",           level: 68 },
      { name: "AI & Agent",  icon: "devicon-godot-plain",           level: 75 }
      // { name: "Docker", icon: "devicon-docker-plain colored",  level: 54 }
    ]
  },

  // ── PROJECTS ──────────────────────────────────────────────
  projects: [
    {
      id: 1,
      title: "ShopSphere",
      subtitle: "Full-Stack E-Commerce Platform",
      description: "A production-ready e-commerce platform with real-time inventory, Stripe payments, and a comprehensive admin dashboard.",
      longDescription: "ShopSphere is a full-featured e-commerce solution designed to handle thousands of concurrent users. It features a dynamic product catalog, real-time stock updates via WebSockets, Stripe payment integration with webhook handling, order tracking, customer reviews, and a data-rich admin panel with analytics charts.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "fullstack",
      featured: true,
      github: "https://github.com/joelharish/shopsphere",
      demo: "#",
      stars: 42,
      forks: 12,
      color: "#2563eb",
      emoji: "🛒",
      architecture: "Microservices architecture — React frontend, Node.js/Express API gateway, MongoDB for products/orders, Redis for session caching, Stripe for payments.",
      challenges: [
        "Real-time inventory sync across multiple concurrent sessions",
        "Optimizing image loading pipeline for 10,000+ product catalogue",
        "Implementing idempotent payment flows to prevent double charges"
      ],
      lessons: [
        "Redis caching reduced average API response time by 70%",
        "Optimistic UI updates make checkout feel instantaneous",
        "Webhook validation is non-negotiable in payment systems"
      ],
      codeSnippet: {
        lang: "javascript",
        code: `// Product search with fuzzy matching & filters
const searchProducts = async (query, filters) => {
  const pipeline = [
    {
      $search: {
        index: 'products',
        text: { query, path: ['name', 'description'] }
      }
    },
    { $match: buildFilterQuery(filters) },
    { $addFields: { score: { $meta: 'searchScore' } } },
    { $sort: { score: -1, stock: -1 } },
    { $limit: 50 }
  ];
  return Product.aggregate(pipeline);
};`
      }
    },
    {
      id: 2,
      title: "TaskFlow",
      subtitle: "Agile Project Management Tool",
      description: "Jira-inspired project management with drag-and-drop Kanban boards, sprint planning, and real-time collaboration via SignalR.",
      longDescription: "TaskFlow brings powerful agile tooling to small teams. Built with Angular and .NET 8, it features Kanban & Scrum boards, sprint planning with burndown charts, time tracking, role-based access control, and instant real-time updates using SignalR WebSockets.",
      tags: ["Angular", "C#", ".NET", "SQL Server", "SignalR"],
      category: "fullstack",
      featured: false,
      github: "https://github.com/joelharish/taskflow",
      demo: "#",
      stars: 28,
      forks: 8,
      color: "#7c3aed",
      emoji: "📋",
      architecture: "Angular SPA + .NET 8 Web API + SQL Server + SignalR hub for real-time collaboration + JWT authentication with refresh tokens.",
      challenges: [
        "Implementing drag-and-drop with instant sync across all connected clients",
        "Complex SQL window functions for burndown chart calculations",
        "Fine-grained role & permission system at the board and task level"
      ],
      lessons: [
        "SignalR dramatically simplifies real-time feature development",
        ".NET 8 minimal APIs have significantly lower overhead",
        "Investing in good database indexing pays off exponentially"
      ],
      codeSnippet: {
        lang: "csharp",
        code: `[HubAuthorize]
public class BoardHub : Hub
{
    private readonly ITaskService _taskService;

    public BoardHub(ITaskService taskService)
        => _taskService = taskService;

    public async Task MoveTask(int taskId, string newStatus)
    {
        var task = await _taskService
            .MoveAsync(taskId, newStatus, Context.UserIdentifier);

        await Clients.Group(task.BoardId.ToString())
            .SendAsync("TaskMoved", task);
    }

    public override async Task OnConnectedAsync()
    {
        var boardId = Context.GetHttpContext()?.Request.Query["board"];
        if (boardId.HasValue) await Groups.AddToGroupAsync(
            Context.ConnectionId, boardId.Value!);
        await base.OnConnectedAsync();
    }
}`
      }
    },
    {
      id: 3,
      title: "SkyPulse",
      subtitle: "Real-Time Weather Dashboard",
      description: "Beautiful weather app with auto-location detection, 7-day forecast, air quality index, UV index, and interactive Leaflet maps.",
      longDescription: "SkyPulse delivers pixel-perfect weather data from the OpenWeatherMap API. It features animated weather icons that change throughout the day, precipitation probability charts, wind speed compass, a 48-hour hourly timeline, and an interactive map to explore weather anywhere on Earth.",
      tags: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Leaflet.js"],
      category: "frontend",
      featured: true,
      github: "https://github.com/joelharish/skypulse",
      demo: "#",
      stars: 67,
      forks: 19,
      color: "#0891b2",
      emoji: "🌤️",
      architecture: "Pure frontend SPA. Geolocation API → OpenWeatherMap REST API → Leaflet.js map. Service worker for offline caching of last-known weather.",
      challenges: [
        "Handling geolocation permission denial gracefully with city search fallback",
        "Animating weather state transitions without jarring flashes",
        "Consistent responsive layout from 320px mobile to 4K displays"
      ],
      lessons: [
        "Service workers enable genuinely useful offline experiences",
        "CSS animations can completely replace heavy JS animation libraries",
        "Thoughtful error states are just as important as the happy path"
      ],
      codeSnippet: {
        lang: "javascript",
        code: `// Auto-detect location → fetch weather in parallel
const initWeather = async () => {
  try {
    const pos = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 8000,
        maximumAge: 300_000
      })
    );
    const { latitude: lat, longitude: lon } = pos.coords;

    const [weather, forecast, airQuality] = await Promise.all([
      fetchWeather(lat, lon),
      fetchForecast(lat, lon),
      fetchAirQuality(lat, lon)
    ]);

    renderDashboard(weather, forecast, airQuality);
  } catch {
    // Fallback to IP-based location
    const ipGeo = await fetchIPLocation();
    await initWeatherByCity(ipGeo.city);
  }
};`
      }
    },
    {
      id: 4,
      title: "DataLens",
      subtitle: "Social Media Analytics Platform",
      description: "Python-powered analytics dashboard with NLP sentiment analysis, trend detection, and beautiful Chart.js visualizations.",
      longDescription: "DataLens aggregates metrics from multiple social platforms, runs NLTK-powered sentiment analysis on content, detects trending topics using TF-IDF, and presents everything in an interactive React dashboard. Celery workers handle background data ingestion.",
      tags: ["Python", "Django", "Chart.js", "NLTK", "PostgreSQL"],
      category: "backend",
      featured: false,
      github: "https://github.com/joelharish/datalens",
      demo: "#",
      stars: 35,
      forks: 11,
      color: "#059669",
      emoji: "📊",
      architecture: "Django REST Framework API + Celery + Redis queue + PostgreSQL + NLTK NLP pipeline + React dashboard with Chart.js visualizations.",
      challenges: [
        "Efficiently processing and storing large volumes of social media data",
        "Improving sentiment analysis accuracy for domain-specific language",
        "Keeping dashboard charts live without hammering the database"
      ],
      lessons: [
        "Celery transforms Django into a powerful async processing system",
        "Data pipeline architecture matters as much as the algorithm itself",
        "Caching pre-aggregated analytics saves enormous server resources"
      ],
      codeSnippet: {
        lang: "python",
        code: `class SentimentPipeline:
    """Batch sentiment analysis with caching."""

    def __init__(self):
        self.vader = SentimentIntensityAnalyzer()
        self._cache: dict[str, dict] = {}

    def analyze_batch(self, texts: list[str]) -> list[dict]:
        results = []
        for text in texts:
            key = hashlib.md5(text.encode()).hexdigest()
            if key not in self._cache:
                scores = self.vader.polarity_scores(text)
                self._cache[key] = {
                    **scores,
                    "label": self._label(scores["compound"]),
                    "confidence": abs(scores["compound"])
                }
            results.append(self._cache[key])
        return results

    @staticmethod
    def _label(compound: float) -> str:
        if compound >  0.05: return "positive"
        if compound < -0.05: return "negative"
        return "neutral"`
      }
    },
    {
      id: 5,
      title: "LinkUp",
      subtitle: "Real-Time Chat Application",
      description: "Slack-inspired messaging app with channels, DMs, file sharing, emoji reactions, and live presence indicators.",
      longDescription: "LinkUp is a full-featured chat platform built with PHP WebSockets and MySQL. It supports public/private channels, direct messaging, rich file uploads with previews, threaded replies, emoji reactions, and real-time typing/online indicators.",
      tags: ["PHP", "WebSockets", "MySQL", "JavaScript", "Bootstrap"],
      category: "fullstack",
      featured: false,
      github: "https://github.com/joelharish/linkup",
      demo: "#",
      stars: 21,
      forks: 7,
      color: "#db2777",
      emoji: "💬",
      architecture: "PHP Ratchet WebSocket server + MySQL for message persistence + vanilla JS client with Bootstrap UI + Nginx reverse proxy.",
      challenges: [
        "Scaling WebSocket connections efficiently within PHP constraints",
        "Guaranteeing message delivery order under concurrent writes",
        "Implementing efficient file upload pipeline with virus scanning"
      ],
      lessons: [
        "WebSockets in PHP are more capable than most developers expect",
        "Message queuing prevents data loss under load",
        "UX micro-details (typing indicators, read receipts) define great chat apps"
      ],
      codeSnippet: {
        lang: "php",
        code: `<?php
class ChatServer implements MessageComponentInterface
{
    private SplObjectStorage $clients;
    private array $rooms = [];

    public function onMessage(ConnectionInterface $from, $msg): void
    {
        $data = json_decode($msg, true);
        $room = $this->rooms[$data['room_id']] ?? null;
        if (!$room) return;

        $saved = $this->persistMessage($from->userId, $data);

        foreach ($room as $client) {
            // Echo to everyone, including sender for confirmation
            $client->send(json_encode([
                'type'    => 'message',
                'payload' => $saved,
                'ack'     => $client === $from
            ]));
        }
    }
}`
      }
    },
    {
      id: 6,
      title: "AlgoViz",
      subtitle: "Algorithm Visualizer",
      description: "Interactive canvas-based visualizer for sorting and pathfinding algorithms with step-by-step animation controls.",
      longDescription: "AlgoViz makes algorithms tangible through beautiful canvas animations. Supports Bubble, Quick, Merge, Heap Sort, Shell Sort, and Dijkstra & A* pathfinding. Features speed control, step-through mode, comparison counter, and an explanation panel.",
      tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms"],
      category: "frontend",
      featured: true,
      github: "https://github.com/joelharish/algoviz",
      demo: "#",
      stars: 89,
      forks: 24,
      color: "#f59e0b",
      emoji: "🔬",
      architecture: "100% vanilla JavaScript with HTML5 Canvas. Algorithm logic entirely decoupled from rendering via generator functions. Zero dependencies.",
      challenges: [
        "Making all algorithms pausable, steppable, and speed-controllable mid-run",
        "Rendering grid-based pathfinding at 60 FPS on large grids",
        "Clear color-coded visual language across all algorithm types"
      ],
      lessons: [
        "Generator functions are the perfect abstraction for algorithm animation",
        "requestAnimationFrame enables buttery-smooth 60fps canvas rendering",
        "Pure vanilla JS can produce incredibly rich, dependency-free experiences"
      ],
      codeSnippet: {
        lang: "javascript",
        code: `// Merge sort as a generator — yields each animation step
function* mergeSortGen(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return;
  const mid = (lo + hi) >> 1;
  yield* mergeSortGen(arr, lo, mid);
  yield* mergeSortGen(arr, mid + 1, hi);
  yield* mergeGen(arr, lo, mid, hi);
}

function* mergeGen(arr, lo, mid, hi) {
  const L = arr.slice(lo, mid + 1);
  const R = arr.slice(mid + 1, hi + 1);
  let i = 0, j = 0, k = lo;

  while (i < L.length && j < R.length) {
    yield { type: 'compare', indices: [lo + i, mid + 1 + j] };
    arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];
    yield { type: 'place', index: k - 1, arr: [...arr] };
  }
  while (i < L.length) arr[k++] = L[i++];
  while (j < R.length) arr[k++] = R[j++];
}`
      }
    }
  ],

  // ── CERTIFICATES ──────────────────────────────────────────
  certificates: [
    {
      id: 1,
      title: "HTML & CSS in Depth",
      issuer: "Meta",
      date: "2024",
      category: "Frontend",
      skills: ["HTML5", "CSS3", "Web Design"],
      verifyUrl: "javascript:void(0)",
      color: "#0866FF",
      badge: "⚛️",
      credentialId: "META-HTMLCSS"
    },
    {
      id: 2,
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "2024",
      category: "Frontend",
      skills: ["JavaScript", "ES6+", "DOM Manipulation"],
      verifyUrl: "javascript:void(0)",
      color: "#0866FF",
      badge: "⚛️",
      credentialId: "META-JS"
    },
    {
      id: 3,
      title: "Version Control (Git & GitHub)",
      issuer: "Meta",
      date: "2024",
      category: "Tools",
      skills: ["Git", "GitHub", "Version Control"],
      verifyUrl: "javascript:void(0)",
      color: "#0866FF",
      badge: "⚛️",
      credentialId: "META-GIT"
    },
    {
      id: 4,
      title: "React Basics",
      issuer: "Meta",
      date: "2024",
      category: "Frontend",
      skills: ["React", "Components", "State"],
      verifyUrl: "javascript:void(0)",
      color: "#0866FF",
      badge: "⚛️",
      credentialId: "META-REACT"
    },
    {
      id: 5,
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      date: "2024",
      category: "Frontend",
      skills: ["Web Development", "Frontend"],
      verifyUrl: "javascript:void(0)",
      color: "#0866FF",
      badge: "⚛️",
      credentialId: "META-INTRO"
    },
    {
      id: 6,
      title: "Python Programming",
      issuer: "GUVI",
      date: "2024",
      category: "Backend",
      skills: ["Python", "Programming Basics"],
      verifyUrl: "javascript:void(0)",
      color: "#10B981",
      badge: "🐍",
      credentialId: "GUVI-PY"
    },
    {
      id: 7,
      title: "Web Designing",
      issuer: "University of Moratuwa",
      date: "2024",
      category: "Frontend",
      skills: ["HTML", "CSS", "UI/UX"],
      verifyUrl: "javascript:void(0)",
      color: "#8B5CF6",
      badge: "🎓",
      credentialId: "UOM-WEB"
    },
    {
      id: 8,
      title: "Python for Beginers",
      issuer: "University of Moratuwa",
      date: "2024",
      category: "Backend",
      skills: ["Python", "Fundamentals"],
      verifyUrl: "javascript:void(0)",
      color: "#8B5CF6",
      badge: "🎓",
      credentialId: "UOM-PY"
    },
    {
      id: 9,
      title: "Front-End Development - Angular",
      issuer: "University of Moratuwa",
      date: "2024",
      category: "Frontend",
      skills: ["Angular", "TypeScript"],
      verifyUrl: "javascript:void(0)",
      color: "#8B5CF6",
      badge: "🎓",
      credentialId: "UOM-ANGULAR"
    }
  ],

  // ── LEARNING JOURNEY / TIMELINE ───────────────────────────
  timeline: [
    {
      year: "2019",
      title: "O/Ls",
      description: "Completed my O/Ls with average results.",
      icon: "🌱",
      category: "Education",
      tags: ["Maths", "Science", "English"]
    },
    {
      year: "2022",
      title: "A/Ls",
      description: "Completed my A/Ls with good results.",
      icon: "�",
      category: "Education",
      tags: ["E-Tech", "SFT", "ICT"]
    },
    {
      year: "2024",
      title: "Started BIT Degree",
      description: "Enrolled in a BIT Degree program. Deep-dived into Data Structures, Algorithms, OOP with Java, and Operating Systems and Software Engineering.",
      icon: "🎓",
      category: "Education",
      tags: ["Java", "DSA", "OOP", "C", "OS", "Software Engineering", "Maths"]
    },
    {
      year: "2025",
      title: "First Internship",
      description: "Joined a tech startup as a Software Engineer intern. Learned professional workflows, code review culture, and Banking development practices.",
      icon: "💼",
      category: "Work",
      tags: [".NET", "C#", "SQL", "TFS", "Pawning"]
    }
  ],

  // ── ACHIEVEMENTS ──────────────────────────────────────────
  achievements: [
    { id: "explorer",      icon: "🗺️",  title: "Explorer",       desc: "Visited 5 different sections",         secret: false },
    { id: "code_reader",   icon: "📖",  title: "Code Reader",    desc: "Opened the VS Code Explorer",          secret: false },
    { id: "cert_hunter",   icon: "🏅",  title: "Certificate Hunter",    desc: "Browsed the Certificates Vault",       secret: false },
    { id: "github_stalker",icon: "🐙",  title: "GitHub Stalker", desc: "Checked out the GitHub Stats",         secret: false },
    { id: "time_traveler", icon: "⏱️",  title: "Time Traveler",  desc: "Explored the Learning Journey",        secret: false },
    { id: "recruiter",     icon: "💼",  title: "Recruiter Mode", desc: "Activated Recruiter Mode",             secret: false },
    { id: "hacktivist",    icon: "⌨️",  title: "Hacktivist",     desc: "Opened the Command Palette",           secret: true  },
    { id: "night_owl",     icon: "🦉",  title: "Night Owl",      desc: "Visited the portfolio after 10 PM",   secret: true  },
    { id: "terminal_pro",  icon: "💻",  title: "Terminal Pro",   desc: "Used the secret terminal",             secret: true  },
    { id: "sudo_hire",     icon: "👑",  title: "sudo hire joel", desc: "Ran the ultimate terminal command",    secret: true  }
  ],

  // ── VS CODE EXPLORER DATA ─────────────────────────────────
  vsCodeFiles: {
    tree: [
      {
        name: "joel-harish-portfolio",
        icon: "📁",
        type: "folder",
        open: true,
        children: [
          {
            name: "src",
            icon: "📁",
            type: "folder",
            open: true,
            children: [
              { name: "App.jsx",      icon: "⚛️",  type: "file", snippetId: "app_jsx",    lang: "jsx"        },
              { name: "styles.css",   icon: "🎨",  type: "file", snippetId: "styles_css", lang: "css"        },
              { name: "index.html",   icon: "📄",  type: "file", snippetId: "index_html", lang: "html"       }
            ]
          },
          {
            name: "api",
            icon: "📁",
            type: "folder",
            open: false,
            children: [
              { name: "server.ts",    icon: "🟦",  type: "file", snippetId: "server_ts",  lang: "typescript" },
              { name: "routes.ts",    icon: "🟦",  type: "file", snippetId: "routes_ts",  lang: "typescript" }
            ]
          },
          { name: "package.json",     icon: "📋",  type: "file", snippetId: "pkg_json",   lang: "json"       },
          { name: "README.md",        icon: "📝",  type: "file", snippetId: "readme_md",  lang: "markdown"   }
        ]
      }
    ],
    snippets: {
      app_jsx: {
        title: "App.jsx",
        lang: "javascript",
        code: `import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;`
      },
      styles_css: {
        title: "styles.css",
        lang: "css",
        code: `:root {
  /* Color Tokens */
  --color-primary:    #3b82f6;
  --color-secondary:  #1d4ed8;
  --color-accent:     #60a5fa;
  --bg-primary:       #0a0e1a;
  --bg-secondary:     #0f1629;
  --text-primary:     #f1f5f9;
  --text-muted:       #94a3b8;

  /* Glass Effect */
  --glass-bg:         rgba(255, 255, 255, 0.04);
  --glass-border:     rgba(255, 255, 255, 0.08);
  --glass-blur:       20px;

  /* Shadows */
  --shadow-glow:      0 0 40px rgba(59, 130, 246, 0.15);
  --shadow-card:      0 8px 32px rgba(0, 0, 0, 0.3);

  /* Spacing */
  --radius-sm:  8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-xl:  24px;

  /* Animation */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card {
  background:           var(--glass-bg);
  border:               1px solid var(--glass-border);
  backdrop-filter:      blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border-radius:        var(--radius-lg);
  transition:           var(--transition);
}

.glass-card:hover {
  border-color:  rgba(59, 130, 246, 0.35);
  box-shadow:    var(--shadow-glow);
  transform:     translateY(-4px);
}`
      },
      index_html: {
        title: "index.html",
        lang: "html",
        code: `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description"
    content="Joel Harish — Software Engineer & Open Source Contributor.
    Building elegant solutions to complex problems." />

  <!-- Open Graph -->
  <meta property="og:title"       content="Joel Harish | Software Engineer" />
  <meta property="og:description" content="Building elegant solutions." />
  <meta property="og:image"       content="/og-image.png" />
  <meta property="og:type"        content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card"  content="summary_large_image" />
  <meta name="twitter:title" content="Joel Harish | Software Engineer" />

  <!-- PWA -->
  <link rel="manifest"   href="/manifest.json" />
  <meta name="theme-color" content="#3b82f6" />

  <title>Joel Harish | Software Engineer</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <canvas id="particle-canvas"></canvas>
  <nav id="navbar"><!-- Dynamic navbar --></nav>
  <main id="main">
    <section id="hero"><!-- Hero section --></section>
    <section id="projects"><!-- Projects --></section>
  </main>
  <script src="js/data.js"></script>
  <script src="js/main.js" type="module"></script>
</body>
</html>`
      },
      server_ts: {
        title: "server.ts",
        lang: "typescript",
        code: `import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { connectDatabase } from './config/database';
import { apiRouter } from './routes';
import { logger } from './utils/logger';

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

// Security middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json({ limit: '10mb' }));

// Routes
app.use('/api/v1', apiRouter);

// Health check
app.get('/health', (_, res) =>
  res.json({ status: 'ok', uptime: process.uptime() }));

// Start server
const start = async (): Promise<void> => {
  await connectDatabase();
  app.listen(PORT, () => logger.info(\`🚀 Server on port \${PORT}\`));
};

start().catch(logger.error);`
      },
      routes_ts: {
        title: "routes.ts",
        lang: "typescript",
        code: `import { Router } from 'express';
import { ProjectController } from './controllers/ProjectController';
import { AuthController } from './controllers/AuthController';
import { authenticate, authorize } from './middleware/auth';
import { validate } from './middleware/validate';
import { projectSchema, loginSchema } from './schemas';

export const apiRouter = Router();
const projects = new ProjectController();
const auth     = new AuthController();

// ── Auth ──────────────────────────────────────
apiRouter.post('/auth/login',   validate(loginSchema), auth.login);
apiRouter.post('/auth/refresh', auth.refresh);
apiRouter.post('/auth/logout',  authenticate, auth.logout);

// ── Projects ──────────────────────────────────
apiRouter.get('/projects',      projects.getAll);
apiRouter.get('/projects/:id',  projects.getById);
apiRouter.post('/projects',
  authenticate, authorize('admin'),
  validate(projectSchema), projects.create);
apiRouter.put('/projects/:id',
  authenticate, authorize('admin'),
  validate(projectSchema), projects.update);
apiRouter.delete('/projects/:id',
  authenticate, authorize('admin'), projects.delete);`
      },
      pkg_json: {
        title: "package.json",
        lang: "json",
        code: `{
  "name": "joel-harish-portfolio",
  "version": "2.1.0",
  "description": "Ultimate developer portfolio — Joel Harish",
  "author": {
    "name": "Joel Harish",
    "email": "joelharish@example.com",
    "url": "https://github.com/joelharish"
  },
  "license": "MIT",
  "scripts": {
    "dev":     "vite --port 3000",
    "build":   "tsc --noEmit && vite build",
    "preview": "vite preview",
    "lint":    "eslint . --ext .ts,.tsx",
    "test":    "vitest run",
    "test:ui": "vitest --ui"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.3.19",
    "chart.js": "^4.4.3",
    "three": "^0.167.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "typescript": "^5.5.3",
    "vite": "^5.3.4",
    "vitest": "^2.0.3",
    "tailwindcss": "^3.4.7"
  }
}`
      },
      readme_md: {
        title: "README.md",
        lang: "markdown",
        code: `# 🚀 Joel Harish — Developer Portfolio v2.0

> **Software Engineer | Open Source Contributor**
> Building elegant solutions to complex problems.

## ✨ Features

| Feature               | Description                              |
|-----------------------|------------------------------------------|
| 🎨 Glassmorphism UI   | Dark/light theme with blur effects       |
| ⌨️  Command Palette   | Ctrl+K spotlight for quick navigation    |
| 🖥️  VS Code Explorer  | Browse code snippets like an IDE         |
| 🐙 GitHub Integration | Live stats from the GitHub API           |
| 🏆 Achievement System | Unlockable badges for curious visitors   |
| 💻 Easter-egg Terminal| Secret terminal with fun commands        |
| 📜 Cert Vault         | Searchable & filterable certificates     |
| 📱 PWA Ready          | Install as a native-like app             |

## 🛠 Tech Stack

\`\`\`
Frontend : HTML5 · CSS3 · JavaScript · React · Angular
Backend  : C# / .NET · Java · Python · PHP
Database : SQL Server · MySQL · PostgreSQL · MongoDB
Tools    : Git · GitHub · VS Code · Docker · Linux
\`\`\`

## 🚀 Quick Start

\`\`\`bash
git clone https://github.com/joelharish/portfolio
cd portfolio
# Open index.html in browser — no build step needed!
\`\`\`

## 📬 Contact

[![GitHub](https://img.shields.io/badge/GitHub-joelharish-181717?logo=github)](https://github.com/joelharish)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Joel_Harish-0A66C2?logo=linkedin)](https://linkedin.com/in/joelharish)

---
Made with ❤️ and ☕ by Joel Harish`
      }
    }
  },

  // ── LIVE CODE SHOWCASE ────────────────────────────────────
  codeShowcase: [
    {
      id: "custom_hook",
      title: "Custom React Hook — useFetch",
      lang: "javascript",
      desc: "Production-ready data fetching hook with caching, abort controller, and retry support.",
      code: `import { useState, useEffect, useRef } from 'react';

const cache = new Map();

/**
 * useFetch — data fetching with caching & cleanup
 * @param {string|null} url - endpoint to fetch
 * @param {RequestInit} [options] - fetch options
 */
function useFetch(url, options = {}) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);
  const abortRef              = useRef(null);

  useEffect(() => {
    if (!url) { setLoading(false); return; }

    if (cache.has(url)) {
      setData(cache.get(url));
      setLoading(false);
      return;
    }

    abortRef.current = new AbortController();
    setLoading(true); setError(null);

    fetch(url, { ...options, signal: abortRef.current.signal })
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
        return res.json();
      })
      .then(json => { cache.set(url, json); setData(json); })
      .catch(err => { if (err.name !== 'AbortError') setError(err.message); })
      .finally(() => setLoading(false));

    return () => abortRef.current?.abort();
  }, [url]);

  const invalidate = () => cache.delete(url);
  return { data, loading, error, invalidate };
}

export default useFetch;`
    },
    {
      id: "merge_sort",
      title: "Merge Sort Generator",
      lang: "javascript",
      desc: "Generator-based merge sort that yields each step — perfect for animation.",
      code: `/**
 * Merge Sort implemented as a generator function.
 * Each yield represents one animation frame.
 */
function* mergeSortGen(arr, lo = 0, hi = arr.length - 1) {
  if (lo >= hi) return;
  const mid = (lo + hi) >> 1;
  yield* mergeSortGen(arr, lo, mid);
  yield* mergeSortGen(arr, mid + 1, hi);
  yield* mergeGen(arr, lo, mid, hi);
}

function* mergeGen(arr, lo, mid, hi) {
  const L = arr.slice(lo, mid + 1);
  const R = arr.slice(mid + 1, hi + 1);
  let i = 0, j = 0, k = lo;

  while (i < L.length && j < R.length) {
    yield { type: 'compare', a: lo + i, b: mid + 1 + j };
    if (L[i] <= R[j]) { arr[k++] = L[i++]; }
    else               { arr[k++] = R[j++]; }
    yield { type: 'place', index: k - 1, snapshot: [...arr] };
  }
  while (i < L.length) arr[k++] = L[i++];
  while (j < R.length) arr[k++] = R[j++];
}

// Animate at configurable speed
async function animateMergeSort(array, renderFn, delay = 40) {
  const arr = [...array];
  for (const step of mergeSortGen(arr)) {
    renderFn(step, arr);
    await new Promise(r => setTimeout(r, delay));
  }
  return arr;
}`
    },
    {
      id: "csharp_repo",
      title: "Generic Repository — C#",
      lang: "csharp",
      desc: "Clean architecture generic repository with async operations and specification pattern.",
      code: `public interface IRepository<T> where T : BaseEntity
{
    Task<T?>              GetByIdAsync(int id,                        CancellationToken ct = default);
    Task<IReadOnlyList<T>> ListAsync   (ISpecification<T>? spec = null, CancellationToken ct = default);
    Task<int>              CountAsync  (ISpecification<T>? spec = null, CancellationToken ct = default);
    Task<T>                AddAsync    (T entity,                      CancellationToken ct = default);
    Task                   UpdateAsync (T entity,                      CancellationToken ct = default);
    Task                   DeleteAsync (T entity,                      CancellationToken ct = default);
}

public class EfRepository<T>(AppDbContext context) : IRepository<T>
    where T : BaseEntity
{
    public async Task<T?> GetByIdAsync(int id, CancellationToken ct = default)
        => await context.Set<T>().FindAsync([id], ct);

    public async Task<IReadOnlyList<T>> ListAsync(
        ISpecification<T>? spec = null, CancellationToken ct = default)
    {
        var query = context.Set<T>().AsQueryable();
        if (spec is not null)
            query = SpecificationEvaluator<T>.Apply(query, spec);
        return await query.AsNoTracking().ToListAsync(ct);
    }

    public async Task<T> AddAsync(T entity, CancellationToken ct = default)
    {
        context.Set<T>().Add(entity);
        await context.SaveChangesAsync(ct);
        return entity;
    }

    public async Task UpdateAsync(T entity, CancellationToken ct = default)
    {
        context.Entry(entity).State = EntityState.Modified;
        await context.SaveChangesAsync(ct);
    }
}`
    },
    {
      id: "python_scraper",
      title: "Async Web Scraper — Python",
      lang: "python",
      desc: "High-performance async scraper with rate limiting, retry logic, and structured output.",
      code: `import asyncio, hashlib
import aiohttp
from bs4 import BeautifulSoup
from tenacity import retry, stop_after_attempt, wait_exponential
from dataclasses import dataclass, field

@dataclass
class Page:
    url:     str
    title:   str
    text:    str
    links:   list[str] = field(default_factory=list)
    images:  list[str] = field(default_factory=list)

class AsyncScraper:
    """Rate-limited async scraper with retry and deduplication."""

    def __init__(self, concurrency: int = 10, delay: float = 0.5):
        self._sem   = asyncio.Semaphore(concurrency)
        self._delay = delay
        self._seen: set[str] = set()
        self._session: aiohttp.ClientSession | None = None

    async def __aenter__(self):
        self._session = aiohttp.ClientSession(
            headers={"User-Agent": "ResearchBot/1.0"})
        return self

    async def __aexit__(self, *_):
        await self._session.close()

    @retry(stop=stop_after_attempt(3),
           wait=wait_exponential(multiplier=1, min=1, max=10))
    async def fetch(self, url: str) -> Page | None:
        if url in self._seen:
            return None
        self._seen.add(url)

        async with self._sem:
            await asyncio.sleep(self._delay)
            async with self._session.get(
                url, timeout=aiohttp.ClientTimeout(total=10)) as r:
                r.raise_for_status()
                return self._parse(url, await r.text())

    def _parse(self, url: str, html: str) -> Page:
        soup = BeautifulSoup(html, "lxml")
        return Page(
            url    = url,
            title  = (soup.title.text.strip() if soup.title else ""),
            text   = " ".join(p.text for p in soup.find_all("p")),
            links  = [a["href"] for a in soup.find_all("a",   href=True)],
            images = [i["src"]  for i in soup.find_all("img", src=True)]
        )

    async def scrape_all(self, urls: list[str]) -> list[Page]:
        tasks = [self.fetch(u) for u in urls]
        pages = await asyncio.gather(*tasks, return_exceptions=True)
        return [p for p in pages if isinstance(p, Page)]`
    }
  ]

}; // end PORTFOLIO
