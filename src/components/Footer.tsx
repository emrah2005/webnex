import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/_webnex_/?hl=en",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 py-16 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <svg width="36" height="32" viewBox="0 0 90 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 4 L26 76 L40 36 L50 60 L22 0 L0 4 Z" fill="#0A1A3D" />
                <path d="M36 72 L64 4 L88 4 L88 76 L64 76 L50 42 L44 56 L36 72 Z" fill="#009DFF" />
              </svg>
              <span className="text-lg font-extrabold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
                Web<span className="text-blue-500">Nex</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-500">
              Next Generation Web
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-500">
              Modern websites, web applications and digital experiences built to
              help businesses grow online.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-5">
              Follow
            </h4>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-muted-400 transition-all hover:border-blue-500/50 hover:text-blue-500"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-400">
                  <a href="mailto:webnexdevv@gmail.com" className="hover:text-white transition-colors">
                    webnexdevv@gmail.com
                  </a>
                </li>
                <li className="text-sm text-muted-400">
                  <a href="tel:+38971526528" className="hover:text-white transition-colors">
                    +389 71 526 528
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/5 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-500">
            © 2026 WebNex. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
