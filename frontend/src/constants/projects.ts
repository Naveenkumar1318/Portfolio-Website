import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "WildFloral Beauty & Fashion Studio",
    description: "Production-ready full-stack web application with booking systems, Supabase Auth with RBAC, PostgreSQL and SEO optimization.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Vercel"],
    liveUrl: "https://www.wildfloral.online/",
  },
  {
    id: 2,
    title: "Student Project Collaboration Portal",
    description: "Full-stack collaboration platform supporting students, mentors, and administrators with role-specific workflows and REST APIs.",
    technologies: ["FastAPI", "React", "PostgreSQL", "SQLAlchemy", "JWT", "Render"],
    githubUrl: "https://github.com/Naveenkumar1318/college_project_portal",
    liveUrl: "https://college-project-portal.vercel.app/",
  },
  {
    id: 3,
    title: "Face Recognition Attendance System",
    description: "AI-powered attendance management system using facial recognition with OpenCV and geolocation validation.",
    technologies: ["Python", "Flask", "OpenCV", "MySQL"],
    githubUrl: "https://github.com/Naveenkumar1318/face_attendance_system",
  },
  {
    id: 4,
    title: "Developer Portfolio Platform",
    description: "Personal developer portfolio built with React 19, TypeScript, and modern glassmorphic styling.",
    technologies: ["React", "TypeScript", "Vite", "CSS3"],
    githubUrl: "https://github.com/Naveenkumar1318",
    liveUrl: "https://portfolio-website-two-psi-59.vercel.app/",
  },
];