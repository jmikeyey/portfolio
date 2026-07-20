import type { Project } from "@/lib/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project">
      <div className="tag-row">
        <span className="pill">{project.tag}</span>
        <span className="status-building">● {project.status}</span>
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
            live demo
          </a>
        ) : (
          <span className="btn soon">live demo · soon</span>
        )}
        {project.code ? (
          <a className="btn" href={project.code} target="_blank" rel="noreferrer">
            code
          </a>
        ) : (
          <span className="btn soon">code · soon</span>
        )}
      </div>
    </div>
  );
}
