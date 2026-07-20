import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section className="block fade" id="experience">
      <div className="label">Experience</div>
      <div className="xp">
        {experience.map((job) => (
          <div className="row" key={`${job.org}-${job.when}`}>
            <div className="when">{job.when}</div>
            <div className="what">
              <h4>
                {job.role} · <span className="org">{job.org}</span>
              </h4>
              <p>{job.blurb}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
