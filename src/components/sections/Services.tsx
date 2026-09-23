"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    title: "WEBSITES",
    description:
      "Modern websites that make your business look professional and turn visitors into customers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "WEB APPLICATIONS",
    description:
      "Custom applications designed around your business and the people who use them every day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "E-COMMERCE",
    description:
      "Online stores designed for a smooth shopping experience, from landing page to checkout.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "CUSTOM SOLUTIONS",
    description:
      "If your business needs something specific, we design and build it from the ground up.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              WHAT WE BUILD
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Digital solutions designed around{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                your business
              </span>
              , not generic templates.
            </h2>
          </div>
          <p className="max-w-sm text-muted-400">
            Every project starts with understanding what the business actually
            needs — then we build exactly that.
          </p>
        </div>

        <div className="grid gap-px rounded-xl border border-white/5 overflow-hidden bg-white/5 lg:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="group relative bg-navy-900 p-8 lg:p-12 transition-colors hover:bg-navy-800/80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-transparent transition-all" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full -translate-y-10 translate-x-10" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="font-mono text-5xl font-bold text-white/5 group-hover:text-blue-500/20 transition-colors lg:text-6xl">
            {service.num}
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-blue-500 group-hover:border-blue-500/40 group-hover:bg-blue-500/5 transition-all lg:h-14 lg:w-14">
            {service.icon}
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <h3 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 max-w-md leading-relaxed text-muted-400">
            {service.description}
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-500 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
