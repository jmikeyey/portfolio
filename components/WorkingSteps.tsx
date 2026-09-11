import { home, workingSteps } from "@/lib/content";

const STEP_THEMES = ["theme-teal", "theme-amber", "theme-violet"] as const;

export default function WorkingSteps() {
  return (
    <section id="how-i-work" className="block">
      <p className="eyebrow">{home.stepsEyebrow}</p>
      <h2 className="h2">{home.stepsHeading}</h2>
      <ol className="steps">
        {workingSteps.map((step, i) => (
          <li key={step.title} className={`step ${STEP_THEMES[i]}`}>
            <span className="step-num" aria-hidden="true">
              {i + 1}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
