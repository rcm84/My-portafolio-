export default function Hero({ dict }) {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center gap-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {dict.hero.eyebrow}
      </p>

      <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] text-[#f3f3f4] sm:text-5xl md:text-6xl">
        {dict.hero.title}
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        {dict.hero.subtitle}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-[#f3f3f4] px-6 py-3 text-sm font-semibold text-night transition-transform hover:-translate-y-0.5"
        >
          {dict.hero.ctaPrimary}
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-[#e7e7ea] transition-colors hover:border-accent/60 hover:text-accent"
        >
          {dict.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
