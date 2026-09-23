import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/sections/Portfolio";
import CTA from "@/components/sections/CTA";

export default function WorkPage() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main className="pt-10">
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
                <span className="h-px w-8 bg-blue-500/60" />
                SELECTED WORK
                <span className="h-px w-8 bg-blue-500/60" />
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
                Work that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                  speaks
                </span>{" "}
                for itself.
              </h1>
              <p className="mt-6 text-muted-400 leading-relaxed max-w-xl mx-auto">
                A look at the type of projects we build. Concept projects now —
                real case studies coming soon as we launch new client work.
              </p>
            </div>
          </div>
        </section>
        <Portfolio />

        <section className="relative py-20 border-t border-white/5">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-400 mb-8">
              For every project we take on
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance leading-tight">
              The same standard,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                every single time
              </span>
              .
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 sm:grid-cols-3">
              {[
                { k: "01", t: "Premium design", d: "Modern, minimal, and built around your brand." },
                { k: "02", t: "Performance first", d: "Fast load times, clean code, SEO-ready structure." },
                { k: "03", t: "Business logic", d: "The website should work for the business, not just look good." },
              ].map((p) => (
                <div
                  key={p.k}
                  className="relative bg-navy-900/60 p-8 text-left"
                >
                  <span className="font-mono text-4xl font-bold text-white/5">
                    {p.k}
                  </span>
                  <div className="mt-8">
                    <div className="text-base font-bold text-white">{p.t}</div>
                    <p className="mt-2.5 text-sm text-muted-400 leading-relaxed">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/consultation"
              className="mt-14 inline-flex items-center gap-2.5 rounded-xl bg-blue-500 px-8 py-4.5 text-base font-semibold text-white shadow-xl shadow-blue-500/25 hover:bg-blue-400 transition-all"
            >
              Let's build yours
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
