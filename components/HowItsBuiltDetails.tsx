import type { HowItsBuilt } from "@/lib/content";

export default function HowItsBuiltDetails({ howItsBuilt }: { howItsBuilt: HowItsBuilt }) {
  const { intro, decisionsLabel, decisions, stack, next } = howItsBuilt;
  return (
    <details className="built">
      <summary>
        <span className="built-title">How it&apos;s built</span>
        <span className="built-hint">For technical readers: stack, data model, decisions</span>
        <span className="built-icon" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="built-body">
        {intro && <p>{intro}</p>}
        {decisions && decisions.length > 0 && (
          <>
            <h3 className="eyebrow">{decisionsLabel}</h3>
            <div className="keylist">
              {decisions.map((decision) => (
                <div key={decision.h}>
                  <h4>{decision.h}</h4>
                  <p>{decision.p}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {stack && stack.length > 0 && (
          <>
            <h3 className="eyebrow">Stack</h3>
            <ul className="stack-list">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
        {next && (
          <>
            <h3 className="eyebrow">What&apos;s next</h3>
            <p>{next}</p>
          </>
        )}
      </div>
    </details>
  );
}
