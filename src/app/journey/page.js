import RevealOnScroll from "@/components/RevealOnScroll";
import KineticTitle from "@/components/KineticTitle";
import { engineeringJourney } from "@/data/siteData";

export const metadata = {
  title: "Engineering Journey | Naveen Raj B V",
  description: "Milestone timeline detailing technical progression from programming fundamentals to full-stack AI platforms.",
};

export default function JourneyPage() {
  return (
    <div className="layout-shell page-enter mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <header className="mb-12 max-w-3xl reveal reveal-visible" data-variant="left">
        <p className="title-strip">Progression Timeline</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          <KineticTitle text="My Engineering Journey" />
        </h1>
        <p className="mt-4 text-base text-white/75 leading-relaxed">
          From writing initial lines of code to building AI-driven AgriTech platforms and preparing for software engineering roles.
        </p>
      </header>

      {/* Timeline Section */}
      <section className="relative border-l-2 border-cyan-400/20 pl-6 md:pl-10 space-y-10">
        {engineeringJourney.map((node, index) => (
          <RevealOnScroll
            key={node.step}
            variant={index % 2 === 0 ? "left" : "right"}
            delay={index * 60}
          >
            <article className="fx-card group relative rounded-3xl border border-white/10 bg-slate-900/80 p-6 md:p-8 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition duration-300">
              {/* Timeline dot */}
              <span className="absolute -left-[31px] md:-left-[47px] top-8 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-400/15 px-3 py-1 text-xs font-mono font-bold text-cyan-200">
                    STEP {node.step}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">{node.title}</h3>
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-fuchsia-300">
                  {node.period}
                </span>
              </div>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-white/80">
                {node.description}
              </p>
            </article>
          </RevealOnScroll>
        ))}
      </section>
    </div>
  );
}
