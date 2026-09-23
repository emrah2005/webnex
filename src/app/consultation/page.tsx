"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const needOptions = [
  "Website",
  "Web Application",
  "E-commerce",
  "Custom Solution",
  "I'm not sure",
];

const budgetOptions = [
  "Under €500",
  "€500–€1,000",
  "€1,000–€2,500",
  "€2,500+",
  "Not sure",
];

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    need: "" as string,
    budget: "" as string,
    date: "",
    time: "",
    message: "",
    agree: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof typeof form, value: any) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.need) e.need = "Please select a project type";
    if (!form.budget) e.budget = "Please select a budget range";
    if (!form.agree) e.agree = "You must agree to be contacted";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setSubmitError(err.message || "Failed to send request. Please try again.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-950 text-white">
      <Navbar />
      <main className="pt-10 pb-28">
        {submitted ? (
          <SuccessState />
        ) : (
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="text-center mb-14 pt-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3.5 py-1.5 text-xs font-medium text-blue-400 mb-6">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                </svg>
                Free 30-minute call
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
                LET'S TALK ABOUT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                  YOUR PROJECT
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-muted-400 leading-relaxed">
                Tell us a little about your project. We'll review your request
                and get back to you to arrange a consultation.
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 sm:p-10 lg:p-12 space-y-10 backdrop-blur-sm"
            >
              {submitError && (
                <div className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-red-400">Couldn't send your request</p>
                    <p className="text-xs text-red-300/80 mt-0.5">{submitError}</p>
                  </div>
                </div>
              )}

              <Section title="Your information" />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Name"
                  required
                  error={errors.name}
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  placeholder="John Doe"
                />
                <Field
                  label="Business name"
                  value={form.business}
                  onChange={(v) => update("business", v)}
                  placeholder="Company Ltd."
                />
                <Field
                  label="Email"
                  type="email"
                  required
                  error={errors.email}
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  placeholder="john@company.com"
                />
                <Field
                  label="Phone"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  placeholder="+386 40 000 000"
                />
              </div>

              <Section title="Your project" />

              <div className="space-y-7">
                <div>
                  <Label text="What do you need?" required error={errors.need} />
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-3">
                    {needOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("need", opt)}
                        className={`text-left rounded-lg border px-4 py-3.5 text-sm font-medium transition-all ${
                          form.need === opt
                            ? "border-blue-500 bg-blue-500/10 text-white"
                            : "border-white/10 bg-navy-800/50 text-muted-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          {opt}
                          {form.need === opt && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#009DFF" strokeWidth="2.5" strokeLinecap="round">
                              <path d="M9 11l3 3L22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label text="Estimated budget" required error={errors.budget} />
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5 mt-3">
                    {budgetOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("budget", opt)}
                        className={`text-left rounded-lg border px-3.5 py-3 text-[13px] font-medium transition-all ${
                          form.budget === opt
                            ? "border-blue-500 bg-blue-500/10 text-white"
                            : "border-white/10 bg-navy-800/50 text-muted-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Preferred date"
                    type="date"
                    value={form.date}
                    onChange={(v) => update("date", v)}
                  />
                  <Field
                    label="Preferred time"
                    type="time"
                    value={form.time}
                    onChange={(v) => update("time", v)}
                  />
                </div>

                <div>
                  <Label text="Tell us about your project" />
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={6}
                    placeholder="What are you building? What are your goals? Any timeline or specific requirements..."
                    className="mt-3 w-full rounded-lg border border-white/10 bg-navy-800/50 px-4 py-3.5 text-sm text-white placeholder:text-muted-500/70 focus:border-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-y"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => update("agree", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-white/20 bg-navy-800 text-blue-500 focus:ring-blue-500/30"
                  />
                  <div>
                    <span className="text-sm text-muted-400">
                      I agree to be contacted regarding my project.
                    </span>
                    {errors.agree && (
                      <p className="mt-1 text-xs text-red-400">{errors.agree}</p>
                    )}
                  </div>
                </label>
              </div>

              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-muted-500 max-w-sm">
                  We'll reply within 24 hours by email to confirm your
                  consultation details.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-blue-400/35 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-blue-500 min-w-[240px]"
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
                      REQUEST CONSULTATION
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
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function SuccessState() {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:px-10 pt-16 pb-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-10 sm:p-16 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/15 blur-3xl rounded-full" />
        <div className="relative">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 border border-green-500/30 mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/5 px-3.5 py-1.5 text-xs font-medium text-green-400 mb-6">
            Sent successfully
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-[1.1] text-balance">
            REQUEST{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              RECEIVED
            </span>
            .
          </h1>
          <p className="mt-6 text-muted-400 leading-relaxed max-w-lg mx-auto">
            Thanks for contacting WebNex. We've received your request and will
            review the details. We'll contact you by email to confirm your
            consultation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-all"
            >
              Back to home
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-all"
            >
              Browse our work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </div>
  );
}

function Label({
  text,
  required,
  error,
}: {
  text: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-sm font-medium text-white">
        {text}
        {required && <span className="text-blue-500 ml-1">*</span>}
      </label>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <Label text={label} required={required} error={error} />
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-lg border bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-muted-500/70 transition-all focus:outline-none focus:ring-4 ${
          error
            ? "border-red-500/40 focus:border-red-500/60 focus:ring-red-500/10"
            : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/10"
        }`}
      />
    </div>
  );
}
