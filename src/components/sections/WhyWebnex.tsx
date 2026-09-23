const benefits = [
  {
    title: "Built around your business",
    text: "Not just a template with your logo added. We start by understanding what you actually do.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Modern design",
    text: "Your website should make a strong first impression. We build websites that feel premium.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    title: "Fast on every device",
    text: "Lightning-fast load times on desktop, tablet and mobile — no excuses.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Designed to convert",
    text: "The goal isn't just to look good. Visitors should know exactly what to do next.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "SEO-ready",
    text: "The technical foundation should be built correctly from the very beginning.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    title: "Built to grow",
    text: "Your website should evolve with your business, not hold it back.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6" />
        <path d="M12 22V9" />
        <path d="M5 22h14" />
        <path d="M19 3H5a2 2 0 0 0-2 2v4h18V5a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
];

export default function WhyWebnex() {
  return (
    <section id="why" className="relative py-28 lg:py-36 border-t border-white/5 bg-navy-900/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              WHY WEBNEX
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.3rem] leading-[1.05] text-balance">
              NOT JUST A WEBSITE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                A DIGITAL PRESENCE.
              </span>
            </h2>
            <p className="mt-8 text-muted-400 leading-relaxed max-w-md">
              We treat every project like a partnership — because a website is
              only as good as the results it generates for the business behind
              it.
            </p>

            <div className="mt-12 rounded-xl border border-white/10 bg-navy-900/60 p-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["#009DFF", "#33B1FF", "#ffffff", "#A6AEC0"].map((c, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-navy-900"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-400 mt-1">
                    Trusted by growing businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="group relative rounded-xl border border-white/5 bg-navy-900/50 p-6 transition-all hover:border-blue-500/20 hover:bg-navy-800/60"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 mb-5 group-hover:bg-blue-500/15 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-400">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
