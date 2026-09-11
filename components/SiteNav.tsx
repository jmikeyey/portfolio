import Link from "next/link";
import { solutions } from "@/lib/content";

export default function SiteNav() {
  return (
    <nav className="nav" aria-label="Main">
      <Link href="/" className="logo">
        john micky<span className="logo-dot">.</span>
      </Link>
      <div className="nav-links">
        <Link href="/#solutions">Solutions</Link>
        <Link href="/#how-i-work">How I work</Link>
        <Link href="/#about">About</Link>
        <a href="#contact" className="btn btn-sm">
          Start a project
        </a>
      </div>
      <details className="nav-menu">
        <summary>
          <span aria-hidden="true">☰</span>
          <span className="visually-hidden">Menu</span>
        </summary>
        <div className="nav-panel">
          {solutions.map((solution) => (
            <Link key={solution.slug} href={`/${solution.slug}`}>
              {solution.name}
            </Link>
          ))}
          <Link href="/#how-i-work">How I work</Link>
          <Link href="/#about">About</Link>
          <a href="#contact" className="btn">
            Start a project
          </a>
        </div>
      </details>
    </nav>
  );
}
