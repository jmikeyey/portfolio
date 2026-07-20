import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <header className="hero fade" id="top">
      <div className="eyebrow">{profile.location}</div>
      <h1>{profile.name}</h1>
      <div className="role">{profile.role}</div>
      <p className="lead">{profile.lead}</p>
      <div className="status">
        <span className="dot" aria-hidden="true" />
        {profile.status}
      </div>
      <div className="links">
        <a href={`mailto:${profile.email}`}>
          email <span className="arw" aria-hidden="true">↗</span>
        </a>
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer">
            github <span className="arw" aria-hidden="true">↗</span>
          </a>
        )}
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin <span className="arw" aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </header>
  );
}
