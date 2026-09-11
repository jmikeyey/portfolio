import Image from "next/image";
import { home, profile } from "@/lib/content";

export default function AboutCard() {
  return (
    <section id="about" className="block">
      <p className="eyebrow">{home.aboutEyebrow}</p>
      <div className="about">
        <div className="avatar-ring">
          <Image className="avatar" src={profile.photo} alt={profile.name} width={600} height={600} sizes="150px" />
        </div>
        <div>
          <h2 className="about-name">{profile.name}</h2>
          <p className="about-sub">{profile.subtitle}</p>
          <p className="about-bio">{profile.bio}</p>
          <p className="about-links">
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
