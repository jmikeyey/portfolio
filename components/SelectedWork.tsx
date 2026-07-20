import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  return (
    <section className="block fade" id="work">
      <div className="label">Selected work</div>
      {projects.length === 0 ? (
        <p className="note">
          First project ships here soon — with a live demo you can click and the code behind it.
        </p>
      ) : (
        <>
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
          <p className="note" style={{ marginTop: "18px" }}>
            More projects land here as they ship — each with a live demo you can click and the code behind it.
          </p>
        </>
      )}
    </section>
  );
}
