export default function Proof({ dict }) {
  return (
    <section className="border-t border-border/60 py-14">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-faint">
        {dict.proof.title}
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {dict.proof.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-surface/40 px-4 py-3 text-sm text-[#dcdde0]"
          >
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
