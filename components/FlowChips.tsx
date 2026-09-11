export default function FlowChips({ steps, className }: { steps: readonly string[]; className: string }) {
  return (
    <ol className={`flow ${className}`}>
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}
