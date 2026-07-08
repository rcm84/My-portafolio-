export default function HowIBuild({ dict }) {
  return (
    <section id="how" className="border-t border-border/60 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-[#f3f3f4]">
            {dict.how.title}
          </h2>
          <p className="mt-4 max-w-md text-muted">{dict.how.description}</p>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            {dict.how.stackTitle}
          </h3>
          <dl className="flex flex-col gap-3">
            {dict.how.stack.map((item, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between border-b border-border/50 pb-3"
              >
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="text-sm font-medium text-[#e7e7ea]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
