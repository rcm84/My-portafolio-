import { notFound } from "next/navigation";
import Link from "next/link";
import projects from "../../../../data/projects";
import { getDictionary } from "../../../../lib/dictionary";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export async function generateStaticParams() {
  const langs = ["es", "en"];
  return langs.flatMap((lang) =>
    projects.map((p) => ({ lang, slug: p.slug }))
  );
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const lang = params.lang === "en" ? "en" : "es";
  return {
    title: project.title[lang],
    description: project.tagline[lang],
  };
}

export default function ProjectPage({ params }) {
  const lang = params.lang === "en" ? "en" : "es";
  const dict = getDictionary(lang);
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <>
      <Header lang={lang} dict={dict} />
      <main className="max-w-content mx-auto px-6 py-16">
        <Link
          href={`/${lang}#projects`}
          className="mb-10 inline-block text-xs font-mono text-faint transition-colors hover:text-accent"
        >
          ← {dict.projects.title}
        </Link>

        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-[#f3f3f4] sm:text-5xl">
          {project.title[lang]}
        </h1>
        <p className="mt-3 text-lg text-muted">{project.tagline[lang]}</p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#dcdde0]">
          {project.description[lang]}
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              {dict.projects.highlightsLabel}
            </h2>
            <ul className="flex flex-col gap-2">
              {project.highlights[lang].map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#dcdde0]"
                >
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              {dict.projects.stackLabel}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <span
                  key={i}
                  className="rounded-full border border-border/60 px-3 py-1.5 text-xs font-mono text-[#c8c9cd]"
                >
                  {s}
                </span>
              ))}
            </div>

            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-[#e7e7ea] transition-colors hover:border-accent/60 hover:text-accent"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict} />
    </>
  );
}
