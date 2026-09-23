const stages = [
  { label: "IDEA" },
  { label: "DESIGN" },
  { label: "DEVELOPMENT" },
  { label: "LAUNCH" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl border border-white/10 bg-navy-900/60 p-8 sm:p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(0, 180, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 180, 255, 0.05) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2.5">
                    <svg width="28" height="24" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 4 L26 76 L40 36 L50 60 L22 0 L0 4 Z" fill="#0A1A3D" />
                      <path d="M36 72 L64 4 L88 4 L88 76 L64 76 L50 42 L44 56 L36 72 Z" fill="#009DFF" />
                    </svg>
                    <span className="font-mono text-xs text-blue-500">
                      PROCESS_FLOW
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-500">v1.0</span>
                </div>

                <div className="relative">
                  <div className="absolute top-6 left-6 right-6 hidden sm:block">
                    <svg width="100%" height="2" viewBox="0 0 400 2" preserveAspectRatio="none">
                      <path d="M0 1 L400 1" stroke="#009DFF" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stages.map((s, i) => (
                      <div key={s.label} className="relative">
                        <div className="relative mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-navy-800">
                          <span className="font-mono text-sm font-bold text-blue-500">
                            0{i + 1}
                          </span>
                          <div className="absolute -inset-0.5 rounded-xl bg-blue-500/10 blur-md -z-10" />
                        </div>
                        <div className="mt-5 sm:mt-7 text-center sm:text-left">
                          <div className="text-[10px] font-mono text-muted-500 uppercase tracking-widest">
                            Stage 0{i + 1}
                          </div>
                          <div className="mt-1.5 text-sm font-bold tracking-wider text-white">
                            {s.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 rounded-xl border border-white/5 bg-navy-950/50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-1 pt-0.5">
                      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div className="flex-1 font-mono text-[11px] leading-relaxed text-muted-400">
                      <span className="text-blue-500">$</span> webnex build{" "}
                      <span className="text-white">--business-first</span>{" "}
                      <span className="text-blue-500">--scalable</span>
                      <br />
                      <span className="text-green-500">✓</span> Project scoped ·{" "}
                      <span className="text-green-500">✓</span> Designs approved ·{" "}
                      <span className="text-green-500">✓</span> Developed ·{" "}
                      <span className="text-green-500">✓</span> Launched
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              ABOUT WEBNEX
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.3rem] leading-[1.05] text-balance">
              WE BUILD DIGITAL PRODUCTS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
                WITH PURPOSE
              </span>
              .
            </h2>
            <p className="mt-8 text-muted-400 leading-relaxed text-lg">
              WebNex helps businesses turn ideas into modern digital experiences
              — from professional websites and online stores to custom web
              applications.
            </p>
            <p className="mt-5 text-muted-400 leading-relaxed">
              We believe a website should be treated like a business asset, not
              a marketing checkbox. Every project we take on is built with the
              same standard: would we be proud to have our own business behind
              it?
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "Projects", value: "20+" },
                { label: "Countries", value: "8" },
                { label: "Years", value: "5+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/5 bg-navy-900/60 p-5"
                >
                  <div className="text-3xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs text-muted-500 uppercase tracking-widest">
                    {s.label}
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
