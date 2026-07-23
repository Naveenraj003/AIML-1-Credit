"use client";

import { useState } from "react";
import { achievements } from "@/data/siteData";
import RevealOnScroll from "@/components/RevealOnScroll";

const tabs = [
  { key: "certifications", label: "Certifications & Internships" },
  { key: "hackathons", label: "Hackathons" },
];

export default function AchievementsClient() {
  const [active, setActive] = useState("certifications");
  const items = achievements[active] || [];

  return (
    <section className="space-y-8">
      {/* Category selector */}
      <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-1.5 fx-panel">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
              active === tab.key
                ? "bg-gradient-to-r from-cyan-400/30 to-fuchsia-400/30 text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                : "text-white/65 hover:text-white"
            }`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Item Timeline */}
      <div className="relative border-l-2 border-cyan-400/20 pl-6 md:pl-8 space-y-6">
        {items.map((item, index) => (
          <RevealOnScroll key={item.title} variant={index % 2 === 0 ? "left" : "right"} delay={index * 80}>
            <article className="fx-card relative rounded-2xl border border-white/10 bg-slate-900/80 p-6 hover:border-cyan-300/40 transition duration-300">
              <span className="absolute -left-[31px] md:-left-[39px] top-7 h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                  {item.date}
                </span>
                <span className="text-xs font-semibold text-cyan-200/90 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">
                  {item.org}
                </span>
              </div>

              <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.note}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
