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
    linkedin: "joel-harish",
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
      title: "HantaRiskModel",
      subtitle: "Machine Learning Prediction App",
      description: "A machine learning based application designed to predict and analyze Hantavirus risk factors using python ML libraries.",
      longDescription: "HantaRiskModel leverages Python and machine learning algorithms to model and predict the risk of Hantavirus outbreaks and infection vectors. By analyzing environmental, demographic, and biological dataset features, the model classifies risk levels to help health authorities take preventive actions.",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "Data Science"],
      category: "backend",
      featured: true,
      github: "https://github.com/joelharish/HantaRiskModel",
      demo: "#",
      stars: 0,
      forks: 0,
      color: "#e11d48",
      emoji: "🦠",
      architecture: "Python data science stack utilizing Pandas/Numpy for preprocessing, Scikit-Learn for training classification/regression models, and Jupyter Notebooks for analysis.",
      challenges: [
        "Handling class imbalance in epidemiological datasets",
        "Selecting the most predictive environmental and clinical risk factors",
        "Evaluating model metrics like sensitivity and specificity for medical applications"
      ],
      lessons: [
        "Random Forest classifier achieved the highest accuracy of 89% on test data",
        "Data cleaning and scaling accounted for 70% of development time",
        "Feature importance analysis revealed temperature and rodent density were the strongest predictors"
      ],
      codeSnippet: {
        lang: "python",
        code: `# Train Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train model
rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)

# Evaluate model
predictions = rf_model.predict(X_test)
print(classification_report(y_test, predictions))`
      }
    },
    {
      id: 2,
      title: "Employee Management System",
      subtitle: "HR & Attendance System",
      description: "A PHP & MySQL based Employee Management System featuring attendance tracking, role-based access, and automated salary calculation.",
      longDescription: "ITSignature Employee Management System is a robust web platform designed for small-to-medium enterprises. It facilitates seamless HR processes, allowing administrators to manage employee records, track daily attendance, enforce role-based access control, and automatically generate monthly salary details.",
      tags: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
      category: "fullstack",
      featured: true,
      github: "https://github.com/joelharish/ITSignature_Employee_Managment_System",
      demo: "#",
      stars: 0,
      forks: 0,
      color: "#059669",
      emoji: "👥",
      architecture: "Traditional LAMP/WAMP architecture. PHP server-side scripting, MySQL relational database for structured employee data, and vanilla CSS/JS for frontend interface.",
      challenges: [
        "Calculating dynamic salaries factoring in unpaid leaves and overtime hours",
        "Preventing unauthorized page access through robust session management",
        "Optimizing SQL queries to fetch attendance logs efficiently"
      ],
      lessons: [
        "Prepared SQL statements are critical to preventing SQL injection attacks",
        "Normalized database design dramatically simplified salary calculations",
        "Providing CSV export features greatly improved HR department productivity"
      ],
      codeSnippet: {
        lang: "php",
        code: `<?php
// Verify user role and login session
session_start();
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: login.php");
    exit();
}

// Fetch employee details securely using prepared statement
$stmt = $conn->prepare("SELECT * FROM employees WHERE id = ?");
$stmt->bind_param("i", $employee_id);
$stmt->execute();
$result = $stmt->get_result();
$employee = $result->fetch_assoc();`
      }
    },
    {
      id: 3,
      title: "Book Management System",
      subtitle: "Full-Stack Web Application",
      description: "A clean ASP.NET Core & SQL Server web application that allows users to perform CRUD operations on a book collection with search and filter features.",
      longDescription: "Book Management System is a full-stack library catalog web application. Built with ASP.NET Core MVC and SQL Server, it provides a clean, responsive user interface to manage book inventories. It features real-time search, filters by genre and author, pagination, validation checks, and database seeding.",
      tags: ["C#", "ASP.NET Core", "SQL Server", "Entity Framework", "Bootstrap"],
      category: "fullstack",
      featured: true,
      github: "https://github.com/joelharish/Book_Management_System",
      demo: "#",
      stars: 0,
      forks: 0,
      color: "#7c3aed",
      emoji: "📚",
      architecture: "ASP.NET Core MVC architecture with Entity Framework Core as the Object-Relational Mapper (ORM), SQL Server database, and Razor Views for the presentation layer.",
      challenges: [
        "Implementing server-side sorting, pagination, and multi-parameter filtering concurrently",
        "Ensuring database data integrity when deleting books linked to orders or reviews",
        "Creating clean frontend form validations with Razor model binding"
      ],
      lessons: [
        "Entity Framework migrations make database schema changes extremely manageable",
        "Repository pattern decouples the database logic from the controller layer",
        "Client-side jQuery validation improves the user experience by reducing server trips"
      ],
      codeSnippet: {
        lang: "csharp",
        code: `// Get books with filtering, searching, and pagination
public async Task<IActionResult> Index(string searchString, string genre, int? pageNumber)
{
    var books = from b in _context.Books select b;

    if (!string.IsNullOrEmpty(searchString))
    {
        books = books.Where(s => s.Title.Contains(searchString) || s.Author.Contains(searchString));
    }

    if (!string.IsNullOrEmpty(genre))
    {
        books = books.Where(x => x.Genre == genre);
    }

    int pageSize = 10;
    return View(await PaginatedList<Book>.CreateAsync(books.AsNoTracking(), pageNumber ?? 1, pageSize));
}`
      }
    },
    {
      id: 4,
      title: "AI Animal Analyzer",
      subtitle: "AI-Powered Image Recognition",
      description: "An application that utilizes advanced AI to recognize, analyze, and describe various animal species from uploaded images.",
      longDescription: "AI Animal Analyzer is a web utility that leverages Artificial Intelligence and Computer Vision models to analyze images of animals. Users upload an image, and the system instantly identifies the animal, detects its breed or species, and provides educational information about its habitat, diet, and behavior.",
      tags: ["JavaScript", "React", "AI API", "Tailwind CSS", "Vercel"],
      category: "frontend",
      featured: false,
      github: "https://github.com/joelharish/ai-animal-analyzer",
      demo: "https://ai-animal-analyzer.vercel.app",
      stars: 0,
      forks: 0,
      color: "#0ea5e9",
      emoji: "🦁",
      architecture: "React client communicating with an AI Model Inference API hosted serverlessly, deployed on Vercel with responsive Tailwind CSS interface.",
      challenges: [
        "Handling large image uploads efficiently over mobile networks",
        "Parsing complex API JSON responses to extract high-confidence species tags",
        "Designing a simple, drag-and-drop UI that functions well on all device sizes"
      ],
      lessons: [
        "Client-side image compression before upload saves significant bandwidth",
        "Caching AI results locally reduces API usage costs for duplicate requests",
        "Deploying to Vercel provides seamless Serverless Function integration"
      ],
      codeSnippet: {
        lang: "javascript",
        code: `// Send base64 image data to the AI API
const analyzeAnimalImage = async (base64Image) => {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: base64Image })
  });
  
  if (!response.ok) throw new Error('AI analysis failed');
  const data = await response.json();
  return {
    species: data.predictions[0].label,
    confidence: data.predictions[0].score,
    facts: data.additional_details
  };
};`
      }
    },
    {
      id: 5,
      title: "Bank System",
      subtitle: "Console Banking Application",
      description: "A terminal-based banking application built in Dart implementing key object-oriented programming concepts for managing bank accounts.",
      longDescription: "Bank System is a Dart console application that models bank operations. It allows creation of savings and current accounts, deposit/withdrawal transactions with validation checks, balance inquiries, interest calculations, and transaction history tracking, strictly adhering to clean OOP principles.",
      tags: ["Dart", "OOPs", "Console", "Software Design"],
      category: "backend",
      featured: false,
      github: "https://github.com/joelharish/BankSystem",
      demo: "#",
      stars: 0,
      forks: 0,
      color: "#f59e0b",
      emoji: "🏦",
      architecture: "Console application utilizing object-oriented Dart design patterns including inheritance, encapsulation, polymorphism, and abstraction.",
      challenges: [
        "Enforcing transactional safety (ensuring withdrawals don't exceed account limits)",
        "Designing a robust interactive menu system that handles invalid user input gracefully",
        "Managing persistent state in memory throughout the runtime of the session"
      ],
      lessons: [
        "Encapsulation is vital to prevent direct, unauthorized modification of account balances",
        "Dart's strong type system catches potential bugs at compile time",
        "Interactive CLI testing helps visualize program execution flow clearly"
      ],
      codeSnippet: {
        lang: "javascript",
        code: `class BankAccount {
  final String accountNumber;
  final String ownerName;
  double _balance = 0.0;

  BankAccount(this.accountNumber, this.ownerName, double initialBalance) {
    if (initialBalance >= 0) _balance = initialBalance;
  }

  double get balance => _balance;

  void deposit(double amount) {
    if (amount > 0) {
      _balance += amount;
      print('Successfully deposited $amount. New balance: $_balance');
    }
  }

  bool withdraw(double amount) {
    if (amount > 0 && _balance >= amount) {
      _balance -= amount;
      print('Withdrew $amount. New balance: $_balance');
      return true;
    }
    print('Insufficient funds or invalid amount.');
    return false;
  }
}`
      }
    },
    {
      id: 6,
      title: "ContactAppBlazor",
      subtitle: "Blazor WebAssembly App",
      description: "A lightweight contact management system built with C# and Blazor WebAssembly featuring quick search and sorting.",
      longDescription: "ContactAppBlazor is a frontend single page application built using Microsoft Blazor WebAssembly. It provides users with a quick interface to manage a digital phonebook, complete with search filtering, contact grouping, sorting by name/company, and local storage state persistence.",
      tags: ["C#", "Blazor WASM", "ASP.NET Core", "CSS3", "HTML5"],
      category: "frontend",
      featured: false,
      github: "https://github.com/joelharish/COntactAppBlazor",
      demo: "#",
      stars: 0,
      forks: 0,
      color: "#ec4899",
      emoji: "📞",
      architecture: "Blazor WebAssembly client-side application running directly in the browser via WebAssembly, styled with custom responsive CSS grids and flexbox.",
      challenges: [
        "Binding Blazor event listeners to keep search inputs synced instantaneously",
        "Designing modern, responsive cards using pure CSS without UI frameworks like Tailwind",
        "Managing client-side component state lifecycles efficiently"
      ],
      lessons: [
        "Blazor WASM allows full-stack developers to use C# for both frontend and backend",
        "WebAssembly components have incredibly fast rendering speeds once loaded",
        "Custom CSS variables make app-wide theme switching simple and fast"
      ],
      codeSnippet: {
        lang: "csharp",
        code: `@page "/contacts"
@inject IContactService ContactService

<h3>My Contacts</h3>

<input class="search-bar" @bind-value="SearchQuery" @bind-value:event="oninput" placeholder="Search contacts..." />

<div class="contacts-grid">
    @foreach (var contact in FilteredContacts)
    {
        <div class="contact-card">
            <h4>@contact.Name</h4>
            <p>@contact.PhoneNumber</p>
            <p class="email">@contact.Email</p>
        </div>
    }
</div>

@code {
    private string SearchQuery { get; set; } = "";
    private List<Contact> Contacts = new();

    protected override async Task OnInitializedAsync()
    {
        Contacts = await ContactService.GetAllAsync();
    }

    private IEnumerable<Contact> FilteredContacts => Contacts
        .Where(c => c.Name.Contains(SearchQuery, StringComparison.OrdinalIgnoreCase));
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
      verifyUrl: "https://coursera.org/share/ad0f68e4663f4ca1be5d1764ab6967a8",
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
      verifyUrl: "https://coursera.org/share/b8bff5089021912fd648d1a496be43c8",
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
      verifyUrl: "https://coursera.org/share/fd760b5b43f85bf974fadeddd907526b",
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
      verifyUrl: "https://coursera.org/share/dfe5651c8bea5240e502c9532145f950",
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
      verifyUrl: "https://coursera.org/share/413ddb26ce8565335594beee3afc3ba3",
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
      verifyUrl: "https://www.guvi.in/share-certificate/05R78913EXrm8v5b6k",
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
      verifyUrl: "https://open.uom.lk/lms/mod/customcert/my_certificates.php?userid=97145&certificateid=2&downloadcert=1",
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
      verifyUrl: "https://open.uom.lk/lms/mod/customcert/my_certificates.php?userid=97145&certificateid=1&downloadcert=1",
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
      verifyUrl: "https://open.uom.lk/lms/mod/customcert/my_certificates.php?userid=97145&certificateid=4&downloadcert=1",
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
