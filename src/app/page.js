import Link from "next/link";
import TypingRoles from "@/components/TypingRoles";
import RevealOnScroll from "@/components/RevealOnScroll";
import KineticTitle from "@/components/KineticTitle";
import BrandMark from "@/components/BrandMark";
import PixelJoinImage from "@/components/PixelJoinImage";
import { funFacts, profile, skills } from "@/data/siteData";

export default function Home() {
  return (
    <div className="layout-shell mx-auto w-full max-w-6xl px-5 pt-10 pb-6 md:px-8">
      <section className="page-enter relative min-h-[74vh] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/70 px-6 py-12 shadow-[0_20px_70px_rgba(8,47,73,0.3)] md:px-12">
        <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-cyan-300/40" />
        <div className="absolute right-20 top-20 h-10 w-10 rounded-full bg-fuchsia-400/60 blur-sm" />
        <div className="absolute -right-16 bottom-12 h-40 w-40 rounded-full border border-fuchsia-300/20" />
        <div className="absolute -left-12 top-1/3 h-px w-48 bg-gradient-to-r from-cyan-300/70 to-transparent" />

        <div className="hero-grid items-center gap-10 md:grid md:grid-cols-[minmax(0,1.48fr)_minmax(0,0.72fr)]">
          <div className="hero-copy min-w-0">
            <p className="title-strip">Student Developer Portfolio</p>
            <p className="mt-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100 intro-pulse">
              Fast. Clear. Practical. Built to show real impact in under 60 seconds.
            </p>
            <h1 className="mt-5 font-display text-[clamp(1.5rem,3.9vw,3.9rem)] font-black leading-[0.95] text-white whitespace-nowrap">
              <KineticTitle text={profile.name} />
            </h1>

            <div className="mt-5">
              <TypingRoles roles={profile.roles} />
            </div>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">{profile.shortBio}</p>
            <div className="hero-caption mt-4 max-w-3xl rounded-xl border border-white/12 bg-black/25 px-4 py-3 text-sm leading-relaxed text-cyan-100/90 md:text-base">
              Building AI solutions that solve real-world problems in agriculture and beyond.
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:brightness-110"
              >
                Start The Tour
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Collaborate With Me
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="hero-media-frame">
              <div className="hero-media-inner">
                <PixelJoinImage
                  src="/profile-naveen.jpg"
                  alt="Naveen Raj B V profile"
                  objectClassName="object-[58%_42%]"
                  storageKey="hero-profile-pixel-join"
                />
              </div>
              <div className="absolute left-3 top-3">
                <BrandMark />
              </div>
              <div className="hero-media-meta">
                <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-200/90">Intro Clip</p>
                <p className="mt-1 text-xs text-white/75">AI/ML Student · Full-Stack Builder</p>
                <span className="hero-media-progress" />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="group absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/65 transition hover:text-cyan-200"
        >
          <span>Scroll Down</span>
          <span className="scroll-wave" aria-hidden="true">
            <span className="scroll-chevron" />
            <span className="scroll-chevron" />
            <span className="scroll-chevron" />
          </span>
        </a>
      </section>

      <RevealOnScroll className="mt-16" variant="zoom" delay={80}>
        <section id="about" className="space-y-6">
          <div className="flex justify-end">
            <a
              href="#"
              className="inline-block rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Download Resume
            </a>
          </div>

          <div className="space-y-6">
            <article className="fx-panel rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="font-display text-3xl font-black text-white">About Me</h2>
              <p className="mt-4 text-white/75 leading-relaxed">{profile.longBio}</p>
            </article>

            <article className="fx-panel rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-300">Skills Orbit</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-white/85"
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>

            <article className="fx-panel rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">Fun Facts</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                {funFacts.map((fact) => (
                  <li key={fact} className="rounded-xl bg-white/5 px-4 py-3">
                    {fact}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
