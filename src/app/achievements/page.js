import AchievementsClient from "@/components/AchievementsClient";
import KineticTitle from "@/components/KineticTitle";

export const metadata = {
  title: "Credentials | Naveen Raj B V",
  description: "Verified certifications, virtual internships, and hackathon accomplishments.",
};

export default function AchievementsPage() {
  return (
    <div className="layout-shell page-enter mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="right">
        <p className="title-strip">Verified Credentials</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          <KineticTitle text="Certifications & Hackathons" />
        </h1>
        <p className="mt-4 text-base text-white/75 leading-relaxed">
          Authentic training programs, virtual internships, and hackathon presentations that back up my software engineering skills.
        </p>
      </header>
      <AchievementsClient />
    </div>
  );
}
