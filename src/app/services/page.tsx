import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main className="pt-10">
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
                <span className="h-px w-8 bg-blue-500/60" />
                SERVICES
                <span className="h-px w-8 bg-blue-500/60" />
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
                Everything we{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                  build
                </span>
                .
              </h1>
              <p className="mt-6 text-muted-400 leading-relaxed max-w-xl mx-auto">
                From simple business websites to complex custom applications —
                we build digital products that help businesses grow.
              </p>
            </div>
          </div>
        </section>
        <Services />

        <section className="relative py-20 border-t border-white/5">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-8 sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
                    Not sure what you need?
                  </h2>
                  <p className="mt-5 text-muted-400 leading-relaxed">
                    That's completely okay. We'll talk through your business,
                    your goals, and recommend exactly what makes sense for you.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/consultation"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-400 transition-all"
                    >
                      Book a free call
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-all"
                    >
                      Just ask us
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Free consultation",
                    "Clear proposals",
                    "No hidden costs",
                    "2-6 week timeline",
                    "Ongoing support",
                    "Built to scale",
                  ].map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-navy-800/40 p-4"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009DFF" strokeWidth="2.5" strokeLinecap="round" className="mt-0.5 shrink-0">
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      <span className="text-sm text-white">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
