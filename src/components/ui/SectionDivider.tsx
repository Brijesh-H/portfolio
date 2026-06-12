export function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative h-px overflow-hidden bg-slate-800/50">
        <div className="absolute inset-0 animate-[shimmer_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-indigo-400/40 via-teal-400/40 to-transparent" />
      </div>
    </div>
  );
}
