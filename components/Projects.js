import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ lang, dict }) {
  return (
    <section id="projects" className="border-t border-border/60 py-20">
      <div className="mb-10">
        <h2 className="font-display text-3xl font-semibold text-[#f3f3f4]">
          {dict.projects.title}
        </h2>
        <p className="mt-2 text-muted">{dict.projects.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            lang={lang}
            dict={dict}
          />
        ))}
      </div>
    </section>
  );
}
