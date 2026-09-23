import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import WhyWebnex from "@/components/sections/WhyWebnex";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main className="pt-10">
        <section className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              ABOUT WEBNEX
              <span className="h-px w-8 bg-blue-500/60" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance leading-[0.98]">
              A web studio built around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                how businesses actually work
              </span>
              .
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-muted-400 leading-relaxed text-lg">
              We started WebNex because we kept seeing businesses pay good money
              for websites that were either beautiful but useless — or functional
              but ugly. We wanted to build the version that does both.
            </p>
          </div>
        </section>

        <About />
        <WhyWebnex />

        <section className="relative py-20 lg:py-28 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-3">
              {[
                {
                  num: "01",
                  t: "Business first",
                  d: "Before we write a line of code or pick a single color, we understand what the business needs the website to do. Everything else follows.",
                },
                {
                  num: "02",
                  t: "No template shortcuts",
                  d: "Every website is designed from scratch around the specific business, their industry, and the customers they're talking to.",
                },
                {
                  num: "03",
                  t: "Long-term thinking",
                  d: "We build websites that can grow with the business. Marketing integrations, new pages, custom features — all possible later.",
                },
              ].map((p) => (
                <div
                  key={p.num}
                  className="rounded-2xl border border-white/10 bg-navy-900/60 p-8 transition-colors hover:border-blue-500/20"
                >
                  <span className="font-mono text-5xl font-bold text-white/5">
                    {p.num}
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-400">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Like the way that sounds?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-7 py-4 text-sm font-semibold text-white hover:bg-blue-400 transition-all"
                >
                  Book a consultation
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-7 py-4 text-sm font-semibold text-white hover:bg-white/5 transition-all"
                >
                  See our work
                </Link>
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
