export default function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-28 -top-24 h-[26rem] w-[26rem] rounded-full bg-cyan-400/20 blur-[110px] float-a" />
      <div className="absolute -right-20 top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-[120px] float-b" />
      <div className="absolute bottom-[-9rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-emerald-400/15 blur-[110px] float-c" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_90%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.16),transparent_20%,rgba(217,70,239,0.13),transparent_46%,rgba(16,185,129,0.13),transparent_72%,rgba(34,211,238,0.16))] rotate-slow" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.15)_5%,rgba(15,23,42,0.72)_45%,rgba(2,6,23,0.92)_100%)]" />
      <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent scanline" />
    </div>
  );
}
