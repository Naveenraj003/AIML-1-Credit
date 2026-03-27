"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/siteData";
import BrandMark from "@/components/BrandMark";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/15 bg-slate-950/70 px-5 py-3 backdrop-blur-2xl">
        <Link href="/" className="group flex items-center gap-3 text-base font-black tracking-[0.22em] text-white md:text-lg">
          <BrandMark compact />
          <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors">NAVEEN</span>
          <span className="mx-1 text-white/35">::</span>
          <span className="text-fuchsia-300">LAB</span>
        </Link>

        <button
          type="button"
          className="md:hidden rounded-md border border-white/20 px-3 py-2 text-xs font-semibold tracking-[0.15em] text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          MENU
        </button>

        <ul className="hidden md:flex items-center gap-1 rounded-xl border border-white/10 bg-black/20 p-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                    isActive ? "bg-cyan-300/15 text-cyan-100" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-2 right-2 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    pathname === link.href
                      ? "bg-cyan-400/15 text-cyan-200"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
