import { stack } from "@/lib/content";

export default function Stack() {
  return (
    <section className="block fade" id="stack">
      <div className="label">Stack</div>
      <div className="stack">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </section>
  );
}
