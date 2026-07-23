import ContactForm from "@/components/ContactForm";
import KineticTitle from "@/components/KineticTitle";
import RevealOnScroll from "@/components/RevealOnScroll";
import { profile, socials } from "@/data/siteData";

export const metadata = {
  title: "Contact | Naveen Raj B V",
  description: "Get in touch with Naveen Raj B V for software engineering placements, internships, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="layout-shell page-enter mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="right">
        <p className="title-strip">Contact & Placement Inquiries</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          <KineticTitle text="Let's Build & Collaborate" />
        </h1>
        <p className="mt-4 text-base text-white/75 leading-relaxed">
          Open to software engineering placement opportunities, technical internships, and collaborative software projects.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-5">
        <div className="space-y-4 md:col-span-2">
          <RevealOnScroll variant="left" delay={80}>
            <div className="fx-panel sig-contact rounded-3xl border border-white/10 bg-slate-900/75 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-fuchsia-300 font-bold">Location</p>
              <p className="mt-1 text-base font-semibold text-white">{profile.location}</p>
              <p className="mt-1 text-xs text-white/60">{profile.college}</p>

              <p className="mt-5 text-xs uppercase tracking-[0.18em] text-fuchsia-300 font-bold">Email</p>
              <p className="mt-1 text-base font-semibold text-white">{profile.email}</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="left" delay={160}>
            <div className="fx-panel sig-contact rounded-3xl border border-white/10 bg-slate-900/75 p-6">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-fuchsia-300 font-bold">Verified Platforms</p>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/80 transition hover:border-cyan-300 hover:text-cyan-200"
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
