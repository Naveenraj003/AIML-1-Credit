export default function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl float-a" />
      <div className="absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl float-b" />
      <div className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl float-c" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.07),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(217,70,239,0.10),transparent_33%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(2,6,23,0.6)_100%)]" />
    </div>
  );
}
