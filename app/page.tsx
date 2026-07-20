import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import { profile } from "@/lib/content";

export default function Home() {
  return (
    <div className="page">
      <div className="topbar">
        <span className="brand">john&nbsp;micky&nbsp;butnande</span>
        <nav>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#writing">writing</a>
          <a href="#contact">contact</a>
        </nav>
      </div>

      <Hero />
      <SelectedWork />
      <Experience />
      <Stack />
      <Writing />
      <Contact />

      <footer>
        <span>{profile.name}</span>
        <span>Cebu · 2026</span>
      </footer>
    </div>
  );
}
