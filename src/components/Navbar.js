"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/siteData";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group text-xl font-black tracking-[0.18em] text-white">
          <span className="text-cyan-300 group-hover:text-fuchsia-300 transition-colors">NAVEEN</span>
          <span className="text-white">/AI</span>
        </Link>

        <button
          type="button"
          className="md:hidden rounded-md border border-white/20 px-3 py-2 text-sm text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          MENU
        </button>

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-cyan-200" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-2 right-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 px-6 py-4">
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
