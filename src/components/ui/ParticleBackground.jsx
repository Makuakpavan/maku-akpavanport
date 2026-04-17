export function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl dark:bg-violet-700/35" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/20" />
      <div className="absolute left-10 top-1/2 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/20" />
      <span className="particle left-[10%] top-[22%]" />
      <span className="particle left-[24%] top-[70%]" />
      <span className="particle left-[73%] top-[18%]" />
      <span className="particle left-[80%] top-[58%]" />
      <span className="particle left-[50%] top-[80%]" />
    </div>
  )
}
