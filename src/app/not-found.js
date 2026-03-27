import Link from "next/link";
import KineticTitle from "@/components/KineticTitle";
import BrandMark from "@/components/BrandMark";

export default function NotFound() {
  return (
    <div className="layout-shell page-enter mx-auto flex min-h-[65vh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <BrandMark />
      <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">404</p>
      <h1 className="mt-4 text-5xl font-black text-white md:text-7xl">
        <KineticTitle text="Lost In The Void" />
      </h1>
      <p className="mt-4 max-w-xl text-white/70">
        This page drifted into deep space. Let&apos;s return to home and continue the journey.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-7 py-3 text-sm font-black text-slate-950"
      >
        Back To Home
      </Link>
    </div>
  );
}
