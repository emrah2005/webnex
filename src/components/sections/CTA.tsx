import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0, 180, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 180, 255, 0.08) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage:
                  "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 0%, black 0%, transparent 70%)",
              }}
            />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/15 blur-3xl rounded-full" />
            <svg
              className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
              viewBox="0 0 1200 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="ctag1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#009DFF" stopOpacity="0" />
                  <stop offset="50%" stopColor="#009DFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#009DFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 380 Q300 280 600 320 T1200 300"
                stroke="url(#ctag1)"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M0 420 Q300 340 600 370 T1200 350"
                stroke="url(#ctag1)"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="relative px-6 py-20 sm:px-12 sm:py-28 lg:py-36 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400 backdrop-blur-sm mb-8">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M12 2v4" />
                <path d="M12 18v4" />
                <path d="m4.93 4.93 2.83 2.83" />
                <path d="m16.24 16.24 2.83 2.83" />
                <path d="M2 12h4" />
                <path d="M18 12h4" />
                <path d="m4.93 19.07 2.83-2.83" />
                <path d="m16.24 7.76 2.83-2.83" />
              </svg>
              Ready when you are
            </div>

            <h2 className="mx-auto max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[6.5rem] leading-[0.95] text-balance">
              <span className="block">HAVE AN IDEA?</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-blue-500">
                LET'S BUILD IT.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-400">
              Tell us what you're working on and let's discuss how we can bring
              it online.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/consultation"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-8 py-4.5 text-base font-semibold text-white shadow-2xl shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-blue-400/40 hover:scale-[1.02]"
              >
                BOOK A CONSULTATION
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-8 py-4.5 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
              >
                Or just say hello
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-xs text-muted-500">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
                Reply within 24h
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                30-min free call
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
                No obligations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
