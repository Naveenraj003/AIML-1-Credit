import RevealOnScroll from "@/components/RevealOnScroll";
import { travelStats, travels } from "@/data/siteData";

export const metadata = {
  title: "Travel | Naveen Raj B V",
};

export default function TravelPage() {
  return (
    <div className="page-enter mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="left">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">Travel Logs</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Journeys That Shape My Design Eye</h1>
      </header>

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        {travelStats.map((item, index) => (
          <RevealOnScroll key={item.label} variant="zoom" delay={index * 90}>
            <div
            key={item.label}
              className="fx-panel rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-center"
            >
              <p className="text-3xl font-black text-cyan-200">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.label}</p>
            </div>
          </RevealOnScroll>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {travels.map((travel, index) => (
          <RevealOnScroll key={travel.place} variant={index % 2 === 0 ? "left" : "right"} delay={index * 70}>
            <article className="fx-card group h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 hover:border-emerald-300/40">
              <div className="h-44 bg-[linear-gradient(135deg,#0f172a_5%,#14532d_55%,#06b6d4_100%)] p-5 flex items-end">
                <p className="rounded-full bg-black/35 px-3 py-1 text-xs text-emerald-100">Image Placeholder</p>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-2xl font-black text-white">{travel.place}</h3>
                <p className="text-sm text-white/75">{travel.story}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-cyan-200/80">{travel.imageLabel}</p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </section>
    </div>
  );
}
