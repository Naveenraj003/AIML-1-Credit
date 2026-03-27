import ProjectsClient from "@/components/ProjectsClient";
import KineticTitle from "@/components/KineticTitle";

export const metadata = {
  title: "Projects | Naveen Raj B V",
};

export default function ProjectsPage() {
  return (
    <div className="layout-shell page-enter mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <header className="mb-10 max-w-3xl reveal reveal-visible" data-variant="left">
        <p className="title-strip">Selected Builds</p>
        <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
          <KineticTitle text="Projects Built For Real-World Impact" />
        </h1>
        <p className="mt-4 text-white/70">
          Five core projects across AI/ML, AgriTech, IoT, sensors, and database systems. Filter by tag and explore details.
        </p>
      </header>
      <ProjectsClient />
    </div>
  );
}
