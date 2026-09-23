"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 hero-gradient">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3.5 py-1.5 text-xs font-medium text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Accepting new projects — Q4 2026
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              <span className="block">WE BUILD THE WEB</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-400">
                YOUR BUSINESS
              </span>
              <span className="block text-white/95">DESERVES.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-400">
              Modern websites, web applications and digital experiences built to
              help businesses grow online.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/consultation"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-blue-400/35"
              >
                Start Your Project
                <svg
                  width="16"
                  height="16"
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
                href="/work"
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-white/10 bg-white/0 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/5"
              >
                View Our Work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-60 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>

            <div className="mt-14 flex items-center gap-8">
              <div className="flex -space-x-2">
                {["#009DFF", "#33B1FF", "#ffffff", "#A6AEC0"].map((c, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-navy-950"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  20+ projects delivered
                </p>
                <p className="text-xs text-muted-500 mt-0.5">
                  For businesses across Europe
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] animate-float">
      <div className="absolute -inset-12 bg-blue-500/10 blur-3xl rounded-full" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-navy-900 shadow-2xl gradient-border">
        <div className="flex items-center justify-between border-b border-white/5 bg-navy-900/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-2 rounded-md border border-white/5 bg-navy-800/60 px-3 py-1.5">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8A93A8" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-[11px] font-mono text-muted-500">
              webnex.studio
            </span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#009DFF">
              <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
            </svg>
          </div>
          <div className="w-14" />
        </div>

        <div className="relative p-5 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <svg width="28" height="24" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 4 L26 76 L40 36 L50 60 L22 0 L0 4 Z" fill="#0A1A3D" />
                  <path d="M36 72 L64 4 L88 4 L88 76 L64 76 L50 42 L44 56 L36 72 Z" fill="#009DFF" />
                </svg>
                <span className="text-sm font-extrabold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
                  Web<span className="text-blue-500">Nex</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {["Home", "Work", "Contact"].map((i) => (
                <span key={i} className="text-[10px] text-muted-500">
                  {i}
                </span>
              ))}
              <div className="h-5 w-14 rounded bg-blue-500/90" />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="h-2 w-2/5 rounded bg-white/15" />
              <div className="mt-2 h-2 w-3/5 rounded bg-white/10" />
            </div>

            <div className="relative rounded-lg border border-white/5 bg-navy-800/60 p-4 overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-60"
                viewBox="0 0 400 200"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M40 170 L110 80 L180 130 L250 50 L320 100 L380 30"
                  stroke="#009DFF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  strokeDasharray="400"
                  className="animate-line-draw"
                />
                <circle cx="40" cy="170" r="3" fill="#009DFF" />
                <circle cx="110" cy="80" r="3" fill="#009DFF" />
                <circle cx="180" cy="130" r="3" fill="#009DFF" />
                <circle cx="250" cy="50" r="3" fill="#33B1FF" />
                <circle cx="320" cy="100" r="3" fill="#009DFF" />
                <circle cx="380" cy="30" r="3" fill="#fff" />
                <path d="M110 80 L250 50" stroke="rgba(0,157,255,0.2)" strokeWidth="0.8" strokeDasharray="2 3" />
                <path d="M180 130 L320 100" stroke="rgba(0,157,255,0.2)" strokeWidth="0.8" strokeDasharray="2 3" />
                <path d="M110 80 L180 130" stroke="rgba(51,177,255,0.15)" strokeWidth="0.8" />
                <path d="M250 50 L320 100" stroke="rgba(51,177,255,0.15)" strokeWidth="0.8" />
              </svg>
              <div className="relative z-10 flex items-end justify-between">
                <div>
                  <div className="text-[10px] text-muted-500 uppercase tracking-wider">
                    Performance
                  </div>
                  <div className="mt-1 text-xl font-bold text-white">98</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-blue-400 font-semibold">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m5 15 7-7 7 7" />
                  </svg>
                  +12% this month
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "Speed", value: "100", color: "#009DFF" },
                { label: "SEO", value: "97", color: "#33B1FF" },
                { label: "UX", value: "99", color: "#ffffff" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-md border border-white/5 bg-navy-800/40 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider text-muted-500">
                      {m.label}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: m.color }} />
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-base font-bold" style={{ color: m.color }}>
                      {m.value}
                    </span>
                    <span className="text-[9px] text-muted-500">/100</span>
                  </div>
                  <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${m.value}%`, background: m.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-md border border-white/5 bg-navy-800/40 px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500/20 to-blue-500/0 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009DFF" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">
                    Project inquiry
                  </div>
                  <div className="text-[9px] text-muted-500">
                    New message · 2 min ago
                  </div>
                </div>
              </div>
              <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingCard
        className="absolute -left-8 -bottom-6 w-44"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#009DFF" strokeWidth="2">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        }
        label="Fast delivery"
        value="2-4 weeks"
      />
      <FloatingCard
        className="absolute -right-4 -top-4 w-40"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#33B1FF" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        }
        label="Secure"
        value="SSL ready"
      />
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  label,
  value,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className={`${className} rounded-lg border border-white/10 bg-navy-900/90 backdrop-blur-sm px-3 py-2.5 shadow-xl animate-float`}
      style={{ animationDelay: "1s" }}
    >
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-blue-500/10 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-[9px] uppercase tracking-wider text-muted-500">
            {label}
          </div>
          <div className="text-xs font-semibold text-white">{value}</div>
        </div>
      </div>
    </div>
  );
}
