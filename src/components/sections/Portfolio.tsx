const projects = [
  {
    tag: "News Portal",
    concept: false,
    title: "MavrovoNews",
    category: "Media · CMS",
    url: "https://mavrovonews.com/",
    colors: ["#ffffff", "#22C55E", "#000000"],
    preview: "mavrovo",
    wide: true,
  },
  {
    tag: "Education Platform",
    concept: false,
    title: "Slovego",
    category: "Consulting · Forms",
    url: "https://www.slovego.com/",
    colors: ["#ffffff", "#0EA5E9"],
    preview: "slovego",
  },
  {
    tag: "Luxury Services",
    concept: false,
    title: "Danish Limousine",
    category: "Hospitality · Booking",
    url: "https://danishlimousine.com/",
    colors: ["#0F172A", "#ffffff", "#1E293B"],
    preview: "danish",
  },
  {
    tag: "Web Application",
    concept: true,
    title: "Flowboard",
    category: "SaaS · Dashboard",
    url: undefined,
    colors: ["#33B1FF", "#151D35"],
    preview: "app",
    wide: true,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="relative py-28 lg:py-36 border-t border-white/5 bg-navy-900/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              SELECTED WORK
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Real websites for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                real businesses
              </span>
              .
            </h2>
          </div>
          <p className="max-w-sm text-muted-400">
            Three sites we've built and shipped — from news portals to luxury
            chauffeur services. One concept project showing the direction we
            take with custom apps.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const CardOuter = project.url ? "a" : "div";
  const outerProps = project.url
    ? {
        href: project.url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};
  return (
    <CardOuter
      {...outerProps}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 transition-all hover:border-blue-500/25 block ${
        project.wide ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-navy-800">
        <Preview
          type={project.preview}
          colors={project.colors}
          wide={project.wide}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        <div className="absolute top-5 left-5 flex gap-2">
          {project.concept ? (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-950/60 backdrop-blur px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                Concept Project
              </span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-green-400">
                Live Project
              </span>
            </div>
          )}
        </div>
        {project.url && (
          <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-navy-950/60 backdrop-blur px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-medium text-white/80">
              Visit site
            </span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#009DFF" strokeWidth="2.5" strokeLinecap="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        )}
      </div>
      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-500 uppercase">
              {project.tag}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-400">{project.category}</p>
          </div>
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition-all group-hover:border-blue-500/50 group-hover:bg-blue-500 group-hover:text-navy-950">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </div>
        </div>
      </div>
    </CardOuter>
  );
}

function Preview({
  type,
  colors,
  wide = false,
}: {
  type: string;
  colors: string[];
  wide?: boolean;
}) {
  const [accent, accent2, bg] = colors;
  return (
    <div className="absolute inset-0 p-4 sm:p-6 sm:p-8">
      {type === "mavrovo" && <MavrovoPreview accent={accent || "#fff"} accent2={accent2 || "#22C55E"} bg={bg || "#000"} />}
      {type === "slovego" && <SlovegoPreview accent={accent || "#fff"} accent2={accent2 || "#0EA5E9"} wide={wide} />}
      {type === "danish" && <DanishPreview accent={accent || "#0F172A"} accent2={accent2 || "#fff"} bg={bg || "#1E293B"} />}
      {type === "app" && <AppPreview accent={accent || "#33B1FF"} bg={accent2 || "#151D35"} wide={wide} />}
    </div>
  );
}

function MavrovoPreview({
  accent,
  accent2,
  bg,
}: {
  accent: string;
  accent2: string;
  bg: string;
}) {
  return (
    <div className="h-full rounded-xl border border-black/20 bg-white shadow-2xl overflow-hidden flex flex-col">
      <div className="flex h-7 items-center justify-between border-b border-black/10 bg-gray-100 px-3 shrink-0">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="h-4 w-40 rounded bg-white border border-gray-300 flex items-center justify-center">
          <span className="text-[7px] font-mono text-gray-500">mavrovonews.com</span>
        </div>
        <div className="w-8" />
      </div>
      <div
        className="shrink-0 px-4 py-1.5 flex items-center justify-between"
        style={{ background: bg }}
      >
        <div className="flex items-center gap-3">
          {["#1877F2", "#1DA1F2", "#E4405F"].map((c, i) => (
            <span
              key={i}
              className="h-3.5 w-3.5 rounded-full flex items-center justify-center"
              style={{ background: c }}
            >
              <span className="text-[6px] font-bold text-white">
                {["f", "t", "i"][i]}
              </span>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <svg width="22" height="16" viewBox="0 0 60 40" fill="none">
            <path d="M0 0 H60 V20 H0 z" fill="#22C55E" />
            <path d="M0 20 H60 V28 H0 z" fill="#ffffff" />
            <path d="M0 28 H60 V40 H0 z" fill="#22C55E" />
          </svg>
          <span className="text-[10px] font-bold text-white tracking-wide" style={{ color: accent }}>
            Mavrovo
          </span>
          <span className="text-[9px] text-white/60 font-mono">news</span>
        </div>
      </div>
      <div className="shrink-0 border-b border-black/10 px-4 py-2 flex items-center gap-5 bg-white">
        <span className="inline-block h-4 w-4 border-x-[6px] border-x-black border-y-[3px] border-y-transparent" />
        {["ПОЧЕТНА", "МАВРОВО", "МАКЕДОНИЈА", "СВЕТ", "СПОРТ", "МАГАЗИН", "ПОЛИТИКА", "КОНТАКТ"].map(
          (n, i) => (
            <span
              key={n}
              className="text-[7px] font-semibold"
              style={{ color: i === 1 ? accent2 : "#000", letterSpacing: "0.03em" }}
            >
              {n}
            </span>
          )
        )}
        <div className="ml-auto h-4 w-4 rounded-full border border-black/20 flex items-center justify-center">
          <span className="text-[8px]">🔍</span>
        </div>
      </div>
      <div className="flex-1 bg-white p-3 overflow-hidden">
        <div className="flex items-center justify-center mb-2">
          <div
            className="px-3 py-0.5"
            style={{ background: accent2, transform: "skewX(-10deg)" }}
          >
            <span className="text-[8px] font-bold text-white -skew-x-[10deg] inline-block">
              МАВРОВО И РОСТУШЕ
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg,#86EFAC 0%,#4ADE80 40%,#16A34A 100%)",
              }}
            />
            <div className="absolute inset-2 rounded-sm bg-white/30 border border-white/40 flex flex-col items-center justify-center gap-1">
              <div className="h-6 w-10 rounded bg-white/80" />
              <div className="h-3 w-14 rounded bg-white/70" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/60">
              <div className="h-2 w-full rounded bg-white/80" />
              <div className="mt-1 h-2 w-4/5 rounded bg-white/60" />
            </div>
          </div>
          <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg,#0F172A 0%,#1E293B 40%,#020617 100%)",
              }}
            />
            <div className="absolute right-3 top-3 h-10 w-10 rounded-full border-2 border-red-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#EF4444">
                <path d="M7 2l3 4-3 2h3l-3 6 3-2 3 2-3-6h3l-3-2 3-4z" />
              </svg>
            </div>
            <div className="absolute left-3 top-4 h-5 w-14 rounded bg-green-500/80 flex items-center justify-center">
              <span className="text-[5px] font-bold text-white">🚚 АДУЛТИЦИЈА</span>
            </div>
            <div className="absolute left-3 top-10 h-3 w-12 rounded bg-white/15" />
            <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/60">
              <div className="h-2 w-full rounded bg-white/80" />
              <div className="mt-1 h-2 w-4/5 rounded bg-white/60" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5 mt-2">
          {[
            { c: "linear-gradient(135deg,#FEF3C7,#FDE68A)" },
            { c: "linear-gradient(135deg,#1E293B,#0F172A)" },
            { c: "linear-gradient(135deg,#7DD3FC,#0284C7)" },
            { c: "linear-gradient(135deg,#FECACA,#B91C1C)" },
          ].map((x, i) => (
            <div key={i} className="space-y-1">
              <div
                className="aspect-[5/4] rounded-sm"
                style={{ background: x.c }}
              />
              <div className="h-1.5 w-full rounded-sm bg-gray-900/80" />
              <div className="h-1.5 w-11/12 rounded-sm bg-gray-900/50" />
              <div className="h-1.5 w-10/12 rounded-sm bg-gray-900/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlovegoPreview({
  accent,
  accent2,
  wide,
}: {
  accent: string;
  accent2: string;
  wide?: boolean;
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white shadow-2xl overflow-hidden flex flex-col">
      <div className="flex h-7 items-center justify-between border-b border-black/10 bg-gray-100 px-3 shrink-0">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="h-4 w-40 rounded bg-white border border-gray-300 flex items-center justify-center">
          <span className="text-[7px] font-mono text-gray-500">slovego.com</span>
        </div>
        <div className="w-8" />
      </div>
      <div className="shrink-0 px-4 py-2 bg-white border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
            <path d="M6 6 H16 V16 H6 z M16 6 H26 V16 H16 z M6 16 H16 V26 H6 z M16 16 H26 V26 H16 z" fill={accent2} />
            <path d="M26 6 H36 V16 H26 z M26 16 H36 V26 H26 z" fill="#0A2540" />
          </svg>
          <div>
            <div className="text-[12px] font-black tracking-tight text-[#0A2540]" style={{ letterSpacing: "-0.02em" }}>
              SLOVEGO
            </div>
            <div className="text-[6px] text-blue-500 leading-none" style={{ color: accent2 }}>
              consult your future
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          {["ДОМА", "ОБРАЗОВАНИЕ", "СТУДИСКИ", "МИСИЈА", "УСЛУГИ", "ИНФО БЛОГ+"].map(
            (n, i) => (
              <span
                key={n}
                className="text-[7px] font-semibold"
                style={{ color: i === 0 ? accent2 : "#0A2540" }}
              >
                {n}
              </span>
            )
          )}
          <div className="flex items-center gap-1.5">
            <svg width="14" height="10" viewBox="0 0 60 40" fill="none">
              <path d="M0 0 H60 V40 H0 z" fill="#D52B1E" />
              <path d="M0 13 H60 z" stroke="#fff" strokeWidth="2" />
              <path d="M12 0 V40 M24 0 V40 M36 0 V40 M48 0 V40" stroke="#fff" strokeWidth="2" />
            </svg>
            <span className="text-[9px] text-gray-400">🔍</span>
            <div
              className="px-3 py-1 rounded text-[8px] font-bold text-white"
              style={{ background: accent2 }}
            >
              КОНТАКТ
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-3 overflow-hidden grid gap-2 grid-cols-12">
        <div
          className={`${wide ? "col-span-7" : "col-span-7"} p-2 rounded-sm flex flex-col justify-center`}
        >
          <div
            className="h-4 w-full rounded-sm"
            style={{ background: "linear-gradient(90deg,#0A2540,#0A2540)" }}
          />
          <div className="mt-1 h-2.5 w-11/12 rounded-sm bg-gray-800/80" />
          <div className="mt-1 h-2.5 w-8/12 rounded-sm bg-gray-800/60" />
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-gray-100 p-2 flex items-start gap-1.5 bg-white shadow-sm"
              >
                <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke={accent2} strokeWidth="2">
                  {i === 0 ? (
                    <>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <circle cx="12" cy="14" r="1.5" />
                      <path d="M8 14h2M8 18h6M15 18h.5" />
                    </>
                  ) : (
                    <>
                      <rect x="4" y="2" width="4" height="20" rx="1" />
                      <rect x="10" y="2" width="4" height="20" rx="1" />
                      <rect x="16" y="2" width="4" height="20" rx="1" />
                    </>
                  )}
                </svg>
                <div className="flex-1">
                  <div className="h-2 w-full rounded bg-gray-900/90" />
                  <div className="mt-1 h-1.5 w-full rounded bg-gray-500/60" />
                  <div className="mt-0.5 h-1.5 w-10/12 rounded bg-gray-500/40" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 justify-start">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent2 }} />
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          </div>
        </div>
        <div className="col-span-5 rounded-sm bg-white border border-gray-200 p-2.5 space-y-1.5 shadow-sm">
          <div className="h-2.5 w-10/12 rounded bg-gray-200" />
          {[
            0, 1, 2, 3, 4, 5,
          ].map((i) => (
            <div
              key={i}
              className={`h-5 rounded-sm border px-2 flex items-center ${
                i === 5 ? "border-gray-200" : "border-gray-100"
              } bg-gray-50/60`}
            >
              <div
                className={`h-1.5 rounded ${
                  i === 0 ? "w-1/3 bg-gray-600/70" : i === 5 ? "w-1/4 bg-gray-400/50" : "w-1/2 bg-gray-600/50"
                }`}
              />
              {i === 5 && (
                <span className="ml-auto text-gray-400 text-[8px]">▾</span>
              )}
            </div>
          ))}
          <div className="h-5 rounded-sm border border-gray-200 bg-gray-50/60 px-2 flex items-center">
            <div className="h-1.5 w-2/5 rounded bg-gray-600/50" />
          </div>
          <div className="h-5 rounded-sm border border-gray-200 bg-gray-50/60 px-2 flex items-center">
            <div className="h-1.5 w-3/5 rounded bg-gray-600/50" />
          </div>
          <div className="flex items-end justify-end gap-2 pt-1">
            <div
              className="h-6 w-14 rounded-sm flex items-center justify-center text-[8px] font-bold text-white shadow-md"
              style={{ background: accent2 }}
            >
              ИСПРАТИ
            </div>
            <div className="h-7 w-7 border border-gray-800 flex items-center justify-center">
              <span className="text-gray-800 text-[10px] font-bold">∧</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DanishPreview({
  accent,
  accent2,
  bg,
}: {
  accent: string;
  accent2: string;
  bg: string;
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white shadow-2xl overflow-hidden flex flex-col">
      <div className="flex h-7 items-center justify-between border-b border-black/10 bg-gray-100 px-3 shrink-0">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="h-4 w-48 rounded bg-white border border-gray-300 flex items-center justify-center">
          <span className="text-[7px] font-mono text-gray-500">danishlimousine.com</span>
        </div>
        <div className="w-8" />
      </div>
      <div
        className="shrink-0 px-4 py-2 flex items-center justify-between"
        style={{ background: accent }}
      >
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-full border-2 flex items-center justify-center"
            style={{ borderColor: "#C8A96A" }}
          >
            <span className="font-serif italic text-white" style={{ color: "#C8A96A", fontSize: "11px", lineHeight: 1 }}>
              DL
            </span>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-widest text-white uppercase" style={{ fontFamily: "serif" }}>
              DL — LIMOUSINE
            </div>
            <div className="text-[6px] tracking-[0.3em] text-white/60 uppercase">
              Service
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          {[
            { l: "HOME", active: true },
            { l: "ABOUT US" },
            { l: "CAR FLEET" },
            { l: "SERVICES" },
            { l: "BLOG" },
            { l: "FAQ" },
            { l: "BOOK NOW" },
          ].map((n) => (
            <span
              key={n.l}
              className="text-[7px] font-bold tracking-widest uppercase"
              style={{
                color: n.active ? accent2 : accent2,
                border: n.active ? `1px solid ${accent2}` : "1px solid transparent",
                padding: n.active ? "4px 10px" : "5px 1px",
                borderRadius: 999,
                letterSpacing: "0.12em",
              }}
            >
              {n.l}
            </span>
          ))}
          <div className="flex items-center gap-1 ml-1">
            <span className="text-[9px]">🇬🇧</span>
            <span className="text-[9px]">🇩🇰</span>
            <span className="text-[9px] text-white">🔍</span>
          </div>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 overflow-hidden">
        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg,#475569 0%,#64748B 30%,#1E293B 80%,#020617 100%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.08) 0%, transparent 45%)",
            }}
          />
          <div className="absolute inset-2 rounded-lg border-2 border-white/70 flex flex-col justify-end p-3">
            <div className="relative h-full">
              <div
                className="absolute bottom-0 left-0 right-0 h-10 rounded-t-lg"
                style={{
                  background:
                    "linear-gradient(180deg,transparent,rgba(0,0,0,0.55))",
                }}
              />
              <div className="absolute bottom-3 right-4">
                <div className="h-12 w-12 rounded-full bg-black/40 border border-white/30 flex items-center justify-center">
                  <span className="text-white text-[16px]">☂</span>
                </div>
              </div>
              <div className="absolute bottom-2 left-3 h-8 w-16 rounded-t bg-white/60 blur-[0.5px]" />
            </div>
          </div>
        </div>
        <div
          className="p-4 sm:p-5 flex flex-col justify-center"
          style={{ background: "#F8F8F6" }}
        >
          <div
            className="text-[14px] sm:text-[16px] leading-tight font-light tracking-wide text-gray-900 uppercase"
            style={{ fontFamily: "serif", letterSpacing: "0.08em" }}
          >
            Luxury Chauffeur
          </div>
          <div
            className="text-[14px] sm:text-[16px] leading-tight font-light tracking-wide text-gray-900 uppercase"
            style={{ fontFamily: "serif", letterSpacing: "0.08em" }}
          >
            Experiences Tailored For
          </div>
          <div
            className="text-[16px] sm:text-[20px] leading-tight font-light tracking-wide text-gray-900 uppercase mt-0.5"
            style={{ fontFamily: "serif", letterSpacing: "0.1em" }}
          >
            Denmark
          </div>
          <div
            className="mt-2 h-0.5 w-24"
            style={{ background: accent }}
          />
          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded-sm bg-gray-500/50" />
            <div className="h-1 w-11/12 rounded-sm bg-gray-500/40" />
            <div className="h-1 w-full rounded-sm bg-gray-500/50" />
            <div className="h-1 w-10/12 rounded-sm bg-gray-500/40" />
            <div className="h-1 w-9/12 rounded-sm bg-gray-500/30" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-full rounded-sm bg-gray-500/50" />
            <div className="h-1 w-11/12 rounded-sm bg-gray-500/40" />
            <div className="h-1 w-full rounded-sm bg-gray-500/50" />
            <div className="h-1 w-10/12 rounded-sm bg-gray-500/30" />
          </div>
          <div className="mt-3 h-1 w-4/5 rounded-sm bg-gray-500/30" />
        </div>
      </div>
    </div>
  );
}

function AppPreview({
  accent,
  bg,
  wide,
}: {
  accent: string;
  bg: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-xl border border-white/10 bg-[#081021] shadow-2xl overflow-hidden flex flex-col ${
        wide ? "" : ""
      }`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-white/5 bg-[#0B1226]/80 px-3 shrink-0">
        <div className="flex gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="mx-auto h-5 w-44 rounded bg-[#081021] border border-white/5 flex items-center justify-center">
          <span className="text-[8px] font-mono text-gray-400">app.flowboard.io</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-12">
        <div className="col-span-2 border-r border-white/5 p-1.5 space-y-1 bg-[#060C1B]">
          <div className="h-5 w-full rounded" style={{ background: `${accent}22` }} />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-4 w-full rounded bg-white/5" />
          ))}
        </div>
        <div className="col-span-10 p-2 sm:p-3 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-2.5 w-20 rounded bg-white/90" />
              <div className="mt-1 h-1.5 w-14 rounded bg-white/15" />
            </div>
            <div
              className="h-6 w-28 rounded"
              style={{ background: accent }}
            />
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { v: "1,284", l: "Users" },
              { v: "94%", l: "Active" },
              { v: "+28%", l: "Growth" },
              { v: "€42k", l: "MRR" },
            ].map((m) => (
              <div
                key={m.l}
                className="rounded-sm border border-white/5 bg-[#0B1226]/60 p-1.5"
              >
                <div className="text-[6px] uppercase tracking-wider text-gray-500">
                  {m.l}
                </div>
                <div className="text-xs font-bold text-white mt-0.5">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
          <div
            className="rounded-sm border border-white/5 bg-[#0B1226]/60 p-2"
            style={{ minHeight: wide ? 80 : 60 }}
          >
            <svg viewBox="0 0 300 80" className="w-full h-full">
              <path
                d="M0 60 Q30 40 60 50 T120 35 T180 45 T240 20 T300 25"
                stroke={accent}
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M0 60 Q30 40 60 50 T120 35 T180 45 T240 20 T300 25 L300 80 L0 80 Z"
                fill={`${accent}18`}
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-sm border border-white/5 bg-[#0B1226]/60 p-2">
              <div className="h-1.5 w-12 rounded-sm bg-white/80" />
              <div className="mt-1.5 space-y-1">
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-sm" style={{ background: accent }} />
                  <div className="h-1.5 flex-1 rounded-sm bg-white/10" />
                  <div className="h-1.5 w-6 rounded-sm bg-white/40" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-sm" style={{ background: "#A6AEC0" }} />
                  <div className="h-1.5 flex-1 rounded-sm bg-white/10" />
                  <div className="h-1.5 w-6 rounded-sm bg-white/30" />
                </div>
              </div>
            </div>
            <div className="rounded-sm border border-white/5 bg-[#0B1226]/60 p-2">
              <div className="h-1.5 w-10 rounded-sm bg-white/80" />
              <div className="mt-2 flex gap-1">
                {[55, 80, 65, 92, 45, 78, 70, 90, 62, 85, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h * 0.4}px`,
                      marginTop: `${(100 - h) * 0.4}px`,
                      background: i === 11 ? accent : `${accent}70`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
