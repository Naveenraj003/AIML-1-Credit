import AchievementsClient from "@/components/AchievementsClient";
import KineticTitle from "@/components/KineticTitle";

export const metadata = {
  title: "Achievements | Naveen Raj B V",
};

export default function AchievementsPage() {
  return (
    <div className="layout-shell page-enter mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="right">
        <p className="title-strip">Milestones</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          <KineticTitle text="From Certificates to Hackathon Finals" />
        </h1>
        <p className="mt-4 text-white/70">
          Category-based timeline featuring sample certifications, hackathons, and awards.
        </p>
      </header>
      <AchievementsClient />
    </div>
  );
}
