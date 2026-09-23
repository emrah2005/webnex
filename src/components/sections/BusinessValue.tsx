const pillars = [
  {
    num: "01",
    title: "LOOK PROFESSIONAL",
    text: "Make a strong first impression. Your website should reflect the quality of the work you do.",
    accent: true,
  },
  {
    num: "02",
    title: "GET FOUND",
    text: "Build the foundation for search engines from day one — fast, clean, and correctly structured.",
  },
  {
    num: "03",
    title: "GET RESULTS",
    text: "Guide visitors toward contacting you or buying from you. Every page should have a purpose.",
  },
];

export default function BusinessValue() {
  return (
    <section id="value" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 via-navy-800/60 to-navy-900 p-8 sm:p-12 lg:p-20">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 left-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 180, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 180, 255, 0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />

          <div className="relative">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
                <span className="h-px w-8 bg-blue-500/60" />
                BUSINESS VALUE
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
                YOUR WEBSITE SHOULD WORK{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                  FOR YOUR BUSINESS
                </span>
                .
              </h2>
              <p className="mt-6 text-muted-400 max-w-xl leading-relaxed">
                Not look impressive in a portfolio. Not check a list of trendy
                technologies. Deliver real value to the business behind it.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.num}
                  className={`relative p-8 lg:p-10 transition-colors hover:bg-white/[0.03] ${
                    p.accent
                      ? "bg-gradient-to-br from-blue-500/10 via-transparent to-transparent"
                      : "bg-navy-900/40"
                  }`}
                >
                  <span className="font-mono text-5xl font-bold text-white/5 lg:text-6xl block">
                    {p.num}
                  </span>
                  <div className="mt-6">
                    <h3 className="text-lg font-bold tracking-wider text-white">
                      {p.title}
                    </h3>
                    <div className="mt-3 h-px w-10 bg-blue-500/50" />
                    <p className="mt-5 text-sm leading-relaxed text-muted-400">
                      {p.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
