// Centralized placeholder content.
// Replace every value here with your own information — no other file needs to change.

export const profile = {
  name: "Puput Ira",
  role: "Front End Web Developer",
  tagline:
    "I design and build fast, accessible web products — from clean interfaces to solid backend logic.",
  location: "Yogyakarta, Indonesia",
  email: "hello.alexpratama@example.com",
  whatsapp: "+62 812-3456-7890",
  whatsappLink: "https://wa.me/6281234567890",
  resumeUrl: "#",
  social: {
    github: "https://github.com/alexpratama",
    linkedin: "https://linkedin.com/in/alexpratama",
    instagram: "https://instagram.com/alexpratama.dev",
  },
};

export const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "CurrentProjects", value: "4" },
  { label: "Technologies", value: "20+" },
  { label: "Clients & Teams", value: "3" },
];

export const about = {
  description:
    "I am a Front End Developer with an interest in web development and UI design. I also have previous experience working as a Warehouse Admin and Back Office Admin, with experience in data management, documentation, and administrative tasks.",
  education: "2017-2020  MTs Negeri 7 Klaten",
  education2: "2020-2024  SMK Negeri 2 Klaten | Sistem informasi jaringan dan aplikasi",
  education3: "       4 years of study.",
  focus: "Front-End Developer | Administrative Staff",
};

import project1 from "../assets/LOGO1.jpeg";

export const projects = [
  {
    id: 1,
    name: "Company Profile Website",
    description:
      "modern company profile website designed to showcase the company’s services, projects, and professional identity with a quick acces call to action.",
    image: project1,
    tech: ["React", "JavaScript", "PostgreSQL", "Tailwind CSS", "laravel"],
    demoUrl: "https://profile.joracastar.my.id/companyprofile/public/",
    codeUrl: "#",
  },
  {
    id: 2,
    name: "Marketplace Kita",
    description:
      "A local-first e-commerce platform connecting small merchants with nearby buyers, including payment and order tracking.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
    tech: ["Laravel", "MySQL", "Alpine.js", "Bootstrap"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    name: "TaskFlow",
    description:
      "A minimal kanban-style task manager with drag-and-drop boards, activity history, and team workspaces.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Express", "MongoDB"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    name: "Wanderlist",
    description:
      "A travel itinerary planner that turns a rough trip idea into a day-by-day plan with maps and budget tracking.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 5,
    name: "CodeCraft LMS",
    description:
      "A lightweight learning management system for coding bootcamps, with quizzes, cohorts, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "CodeIgniter", "MySQL"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    name: "Resepku",
    description:
      "A recipe-sharing community app with search by ingredient, saved collections, and step-by-step cook mode.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export const skills = [
  { name: "JavaScript", level: 92 },
  { name: "React", level: 75 },
  { name: "HTML5", level: 96 },
  { name: "CSS3 / Tailwind", level: 94 },
  { name: "Node.js", level: 80 },
  { name: "PHP / Laravel", level: 90 },
  { name: "CodeIgniter", level: 75 },
  { name: "PostgreSQL", level: 78 },
  { name: "Git & GitHub", level: 89 },
  { name: "REST API Design", level: 75 },
];

export const experience = [
    {
    year: "June 2026 — September 2026",
    role: "Back Office Admin",
    place: "PT Maksindo Mesin",
    description:
      "Managed administrative tasks, organized documents, maintained data accuracy, and supported daily office operations.",
    tech: ["Accurate", "Excel", "Word", "Spreadsheet", "PowerPoint"],
  },
  {
    year: "February 2026 — June 2026",
    role: "Warehouse Admin",
    place: "PT Perdana Media Investama",
    description:
      "Responsible for managing inventory, recording stock movements, and maintaining accurate warehouse data.",
    tech: ["Excel", "Word", "Spreadsheet"],
  },
  {
    year: "January 2025 — January 2026",
    role: "Warehouse Admin",
    place: "ALF Distributors Sparepart HP",
    description:
      "Responsible for managing inventory, recording stock movements, and maintaining accurate warehouse data.",
    tech: ["Odoo", "Excel"],
  },
  {
    year: "May 2023 — May 2024",
    role: "Fullstack Web Developer",
    place: "Cv Karya Hidup Sentosa",
    description:
      "Skilled in developing responsive, user-friendly web applications, working across both front-end and back-end development.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel", "node.js", "postgreSQL"],
  },
];

export const activities = [
  {
    icon: "Code2",
    title: "Web Development",
    description: "Shipping client and personal projects, from prototypes to production.",
  },
  {
    icon: "GraduationCap",
    title: "Learning New Tech",
    description: "Currently exploring server components, edge functions, and Rust basics.",
  },
  {
    icon: "PenLine",
    title: "Working as a Back Office Admin",
    description: "Handling administrative tasks, managing data and documents, and supporting daily office operations.",
  },
  {
    icon: "GitBranch",
    title: "Open Source",
    description: "Contributing fixes and small features to tools I use daily.",
  },
  {
    icon: "Boxes",
    title: "Personal Projects",
    description: "Building side projects to test ideas and new tools without constraints.",
  },
  {
    icon: "Users",
    title: "Community",
    description: "Joining local meetups and mentoring junior developers.",
  },
];
