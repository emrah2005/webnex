"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err: any) {
      setSubmitError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main className="pt-10 pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-500 mb-5">
              <span className="h-px w-8 bg-blue-500/60" />
              CONTACT
              <span className="h-px w-8 bg-blue-500/60" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
              LET'S{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                TALK
              </span>
              .
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-muted-400 leading-relaxed">
              Have a project in mind? Get in touch. We reply to every message
              within 24 hours.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-5">
              {[
                {
                  label: "Email",
                  value: "webnexdevv@gmail.com",
                  href: "mailto:webnexdevv@gmail.com",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  ),
                },
                {
                  label: "Phone",
                  value: "+389 71 526 528",
                  href: "tel:+38971526528",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-5 rounded-xl border border-white/10 bg-navy-900/60 p-6 transition-all hover:border-blue-500/25 hover:bg-navy-800/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/15 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-500">
                      {c.label}
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}

              <div className="rounded-xl border border-white/10 bg-navy-900/60 p-6">
                <div className="text-[11px] uppercase tracking-widest text-muted-500 mb-4">
                  Follow along
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { s: "Instagram", href: "https://www.instagram.com/_webnex_/?hl=en", label: "I" },
                    { s: "Facebook", href: "#", label: "F" },
                    { s: "LinkedIn", href: "#", label: "L" },
                  ].map(({ s, href, label }) => (
                    <a
                      key={s}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-muted-400 transition-all hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/5"
                      aria-label={s}
                    >
                      <span className="text-[10px] font-bold uppercase">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="/consultation"
                className="group flex items-center justify-between rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-6 transition-all hover:border-blue-500/60"
              >
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-blue-400">
                    Prefer a call?
                  </div>
                  <div className="mt-1 text-base font-bold text-white">
                    Book a consultation →
                  </div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#009DFF"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-navy-900/60 p-6 sm:p-10 backdrop-blur-sm">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message sent!
                  </h3>
                  <p className="text-muted-400">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send us a message
                  </h3>
                  <p className="text-sm text-muted-400 mb-6">
                    Quick questions, project ideas — whatever it is, we'd love
                    to hear from you.
                  </p>

                  {submitError && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 mb-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-red-400">Couldn't send your message</p>
                        <p className="text-xs text-red-300/80 mt-0.5">{submitError}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-white">
                        Name<span className="text-blue-500 ml-1">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-muted-500/70 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white">
                        Email<span className="text-blue-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="john@company.com"
                        className="mt-2 w-full rounded-lg border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-muted-500/70 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white">
                      Message<span className="text-blue-500 ml-1">*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell us about your project or question..."
                      className="mt-2 w-full rounded-lg border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-muted-500/70 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-lg bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-blue-400/35 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-blue-500 min-w-[200px]"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        SENDING...
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          <path d="M22 2 11 13" />
                          <path d="M22 2 15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
