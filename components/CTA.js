export default function CTA({ dict }) {
  const email = "raymer08024@gmail.com";

  return (
    <section id="contact" className="border-t border-border/60 py-24">
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-border/70 bg-surface/60 p-10">
        <h2 className="font-display text-3xl font-semibold text-[#f3f3f4] sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="max-w-md text-muted">{dict.cta.subtitle}</p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="rounded-xl bg-[#f3f3f4] px-6 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
          >
            {dict.cta.button}
          </a>
          <a
            href="https://github.com/rcm84"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-[#e7e7ea] transition-colors hover:border-accent/60 hover:text-accent"
          >
            {dict.cta.githubLabel} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
