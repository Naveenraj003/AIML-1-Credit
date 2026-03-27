import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import { profile, socials } from "@/data/siteData";

export const metadata = {
  title: "Contact | Naveen Raj B V",
};

export default function ContactPage() {
  return (
    <div className="page-enter mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="right">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Let&apos;s Build Something Loud and Useful</h1>
      </header>

      <section className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <RevealOnScroll variant="left" delay={80}>
            <div className="fx-panel rounded-3xl border border-white/10 bg-slate-900/75 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-fuchsia-300">Email</p>
            <p className="mt-2 text-lg font-semibold text-white">{profile.email}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fuchsia-300">Location</p>
            <p className="mt-2 text-lg font-semibold text-white">{profile.location}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="left" delay={160}>
            <div className="fx-panel rounded-3xl border border-white/10 bg-slate-900/75 p-6">
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-fuchsia-300">Socials</p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  {social.label}
                </a>
              ))}
            </div>
            </div>
          </RevealOnScroll>
        </div>

        <div className="md:col-span-3">
          <RevealOnScroll variant="right" delay={140}>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
