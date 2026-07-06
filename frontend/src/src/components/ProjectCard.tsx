import type { Project } from "../types/project";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="project-image" />

      <div className="project-content">
        <h2>{project.title}</h2>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;