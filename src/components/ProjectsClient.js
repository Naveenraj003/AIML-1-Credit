"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/siteData";
import RevealOnScroll from "@/components/RevealOnScroll";

const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

export default function ProjectsClient() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section className="space-y-8">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2.5">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs font-bold tracking-wide transition ${
              activeTag === tag
                ? "border-cyan-300 bg-cyan-300/15 text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                : "border-white/20 text-white/70 hover:border-fuchsia-300 hover:text-fuchsia-200"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-6">
        {filteredProjects.map((project, index) => {
          const isFlagship = project.flagship;
          const large = isFlagship || index % 3 === 0;
          const variant = index % 2 === 0 ? "left" : "right";

          return (
            <RevealOnScroll
              key={project.name}
              variant={variant}
              delay={index * 70}
              className={`${large ? "md:col-span-6 lg:col-span-4" : "md:col-span-3 lg:col-span-2"}`}
            >
              <article
                className={`fx-card sig-project group relative h-full overflow-hidden rounded-3xl border p-6 md:p-8 transition duration-300 ${
                  isFlagship
                    ? "border-cyan-400/50 bg-slate-900/90 shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:border-cyan-300"
                    : "border-white/10 bg-slate-900/80 hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                }`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(34,211,238,0.12),transparent_40%,rgba(217,70,239,0.12))] opacity-0 transition duration-500 group-hover:opacity-100" />
                
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      {isFlagship && (
                        <span className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950">
                          ★ Flagship Build
                        </span>
                      )}
                      {project.type && (
                        <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                          {project.type}
                        </span>
                      )}
                      {project.status && (
                        <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">{project.name}</h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">{project.description}</p>

                    {project.highlights?.length > 0 && (
                      <ul className="mt-4 space-y-2 text-xs md:text-sm text-cyan-100/90">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.specialNote && (
                      <p className="mt-4 rounded-xl border border-fuchsia-300/35 bg-fuchsia-300/10 px-4 py-2.5 text-xs font-medium text-fuchsia-100">
                        📌 {project.specialNote}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4 pt-2 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-cyan-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-5 text-xs uppercase tracking-wider font-bold">
                      {project.github && project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-fuchsia-300 hover:text-fuchsia-200 transition"
                        >
                          GitHub Repository →
                        </a>
                      ) : (
                        <span className="text-white/40">Repository Private / In Dev</span>
                      )}
                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200 transition"
                        >
                          Live Platform ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
