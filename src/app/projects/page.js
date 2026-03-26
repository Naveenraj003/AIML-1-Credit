import ProjectsClient from "@/components/ProjectsClient";

export const metadata = {
  title: "Projects | Naveen Raj B V",
};

export default function ProjectsPage() {
  return (
    <div className="page-enter mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
      <header className="mb-10 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-fuchsia-300">Selected Builds</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">Projects Built For Real-World Impact</h1>
        <p className="mt-4 text-white/70">
          Five core projects across AI/ML, AgriTech, IoT, sensors, and database systems. Filter by tag and explore details.
        </p>
      </header>
      <ProjectsClient />
    </div>
  );
}
