const values = [
  "MODERN DESIGN",
  "PERFORMANCE",
  "RESPONSIVE",
  "SEO READY",
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-navy-900/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8">
          {values.map((v, i) => (
            <div key={v} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-blue-500">0{i + 1}</span>
                <span className="h-px w-6 bg-blue-500/40 hidden sm:block" />
                <span className="text-sm font-semibold tracking-widest text-white">
                  {v}
                </span>
              </div>
              {i < values.length - 1 && (
                <span className="text-blue-500/40 text-sm hidden sm:block">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
