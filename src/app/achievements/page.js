import AchievementsClient from "@/components/AchievementsClient";

export const metadata = {
  title: "Achievements | Naveen Raj B V",
};

export default function AchievementsPage() {
  return (
    <div className="page-enter mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Milestones</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">From Certificates to Hackathon Finals</h1>
        <p className="mt-4 text-white/70">
          Category-based timeline featuring sample certifications, hackathons, and awards.
        </p>
      </header>
      <AchievementsClient />
    </div>
  );
}
