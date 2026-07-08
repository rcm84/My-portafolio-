import Link from "next/link";

export default function ProjectCard({ project, lang, dict }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-surface/60 p-6 transition-colors hover:border-accent/50">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs text-faint">{project.year}</span>
          <span className="font-mono text-xs text-faint">
            {project.stack.slice(0, 2).join(" · ")}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold text-[#f3f3f4]">
          {project.title[lang]}
        </h3>
        <p className="mt-1 text-sm text-accent">{project.tagline[lang]}</p>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.description[lang]}
        </p>

        <ul className="mt-4 flex flex-col gap-1.5">
          {project.highlights[lang].slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#c8c9cd]">
              <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-faint" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-border/60 px-2.5 py-1 text-[11px] font-mono text-faint"
            >
              {s}
            </span>
          ))}
        </div>
        <Link
          href={`/${lang}/projects/${project.slug}`}
          className="whitespace-nowrap text-xs font-semibold text-[#e7e7ea] underline-offset-4 transition-colors group-hover:text-accent group-hover:underline"
        >
          {dict.projects.viewProject} →
        </Link>
      </div>
    </article>
  );
}
