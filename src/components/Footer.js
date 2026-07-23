import { socials } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="mt-24 px-4 pb-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 rounded-2xl border border-white/10 bg-slate-950/70 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-xs uppercase tracking-[0.16em] text-white/60">
          © {new Date().getFullYear()} Naveen Raj B V · B.E. AI & ML @ KSRCT
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 transition hover:border-cyan-300/60 hover:text-cyan-200"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
