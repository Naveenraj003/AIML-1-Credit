"use client";

import { useState } from "react";
import { achievements } from "@/data/siteData";
import RevealOnScroll from "@/components/RevealOnScroll";

const tabs = [
  { key: "certifications", label: "Certifications" },
  { key: "hackathons", label: "Hackathons" },
  { key: "awards", label: "Awards" },
];

export default function AchievementsClient() {
  const [active, setActive] = useState("certifications");
  const items = achievements[active];

  return (
    <section className="space-y-8">
      <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 fx-panel">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              active === tab.key
                ? "bg-gradient-to-r from-cyan-400/25 to-fuchsia-400/25 text-white"
                : "text-white/65 hover:text-white"
            }`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative border-l border-white/15 pl-8 space-y-8">
        {items.map((item, index) => (
          <RevealOnScroll key={item.title} variant={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
            <article className="fx-card relative rounded-2xl border border-white/10 bg-slate-900/70 p-5 hover:border-cyan-300/40">
              <span className="absolute -left-[38px] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-300">{item.date}</p>
              <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-cyan-100">{item.org}</p>
              <p className="mt-3 text-sm text-white/75">{item.note}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
