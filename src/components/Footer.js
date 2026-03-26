import { socials } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Aarav N. Dev. Built to be remembered.</p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm font-semibold text-white/70 transition hover:text-cyan-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
