import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  const live = project.status.toLowerCase() === "live";
  return (
    <div className="project">
      <div className="tag-row">
        <span className="pill">{project.tag}</span>
        <span className={live ? "status-live" : "status-building"}>● {project.status}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <div className="stack-tags">
        {project.stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="actions">
        {project.demo ? (
          <a className="btn primary" href={project.demo} target="_blank" rel="noreferrer">
            live demo <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="btn soon">live demo · soon</span>
        )}
        {project.caseStudy && (
          <Link className="btn" href={project.caseStudy}>
            case study <span aria-hidden="true">→</span>
          </Link>
        )}
        {project.code && (
          <a className="btn" href={project.code} target="_blank" rel="noreferrer">
            code <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </div>
  );
}
