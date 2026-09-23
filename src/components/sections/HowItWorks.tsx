const steps = [
  {
    num: "01",
    title: "DISCOVER",
    text: "We talk about your business, your goals, and what you actually need from a website.",
  },
  {
    num: "02",
    title: "DESIGN",
    text: "We create the visual direction and user experience that matches your brand.",
  },
  {
    num: "03",
    title: "BUILD",
    text: "We develop the website or application with modern, scalable technology.",
  },
  {
    num: "04",
    title: "LAUNCH",
    text: "We test everything, make final refinements, and launch your new digital presence.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
            <span className="h-px w-8 bg-blue-500/60" />
            FROM IDEA TO LAUNCH
            <span className="h-px w-8 bg-blue-500/60" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            A simple,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
              transparent
            </span>{" "}
            process.
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-400">
            No surprises. No hidden steps. Just a clear path from the first
            conversation to your website going live.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative">
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <div className="relative">
                    <div className="flex h-[104px] w-[104px] items-center justify-center rounded-2xl border border-white/10 bg-navy-900 group hover:border-blue-500/40 transition-colors">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative font-mono text-2xl font-bold text-blue-500">
                        {s.num}
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 left-full w-full items-center">
                        <svg
                          width="100%"
                          height="16"
                          viewBox="0 0 100 16"
                          fill="none"
                          preserveAspectRatio="none"
                          className="opacity-50"
                        >
                          <path
                            d="M0 8 L88 8 M80 2 L88 8 L80 14"
                            stroke="#009DFF"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                    {i < steps.length - 1 && (
                      <div className="flex lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3">
                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" className="opacity-50">
                          <path
                            d="M8 0 L8 22 M2 16 L8 22 L14 16"
                            stroke="#009DFF"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 text-center lg:text-left">
                    <h3 className="text-xl font-bold tracking-wide text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-400 text-sm sm:text-[15px]">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
