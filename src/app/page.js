import Link from "next/link";
import TypingRoles from "@/components/TypingRoles";
import RevealOnScroll from "@/components/RevealOnScroll";
import { funFacts, profile, skills } from "@/data/siteData";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-14 pb-6 md:px-10">
      <section className="page-enter relative min-h-[74vh] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 px-6 py-12 md:px-12">
        <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-cyan-300/40" />
        <div className="absolute right-20 top-20 h-10 w-10 rounded-full bg-fuchsia-400/60 blur-sm" />

        <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">Student Developer Portfolio</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.95] text-white md:text-7xl">
          {profile.name}
        </h1>

        <div className="mt-5">
          <TypingRoles roles={profile.roles} />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{profile.shortBio}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:brightness-110"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Let&apos;s Connect
          </Link>
        </div>

        <a
          href="#about"
          className="group absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/65 transition hover:text-cyan-200"
        >
          <span>Scroll Down</span>
          <span className="scroll-mouse">
            <span className="scroll-dot" />
          </span>
          <span className="scroll-trail" />
        </a>
      </section>

      <RevealOnScroll className="mt-16">
        <section id="about" className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="h-56 rounded-2xl bg-[linear-gradient(145deg,#0f172a,#1d4ed8_45%,#06b6d4)] flex items-center justify-center">
              <p className="rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/85">
                Profile Photo Placeholder
              </p>
            </div>
            <a
              href="#"
              className="mt-5 inline-block rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Download Resume
            </a>
          </div>

          <div className="space-y-6 md:col-span-3">
            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="font-display text-3xl font-black text-white">About Me</h2>
              <p className="mt-4 text-white/75 leading-relaxed">{profile.longBio}</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
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

            <article className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
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
