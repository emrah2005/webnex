import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebNex — Next Generation Web",
  description:
    "WebNex builds modern websites, web applications and digital experiences designed to help businesses grow online.",
  keywords: [
    "web design",
    "web development",
    "web agency",
    "e-commerce",
    "web applications",
    "custom websites",
  ],
  authors: [{ name: "WebNex" }],
  openGraph: {
    title: "WebNex — Next Generation Web",
    description:
      "Modern websites, web applications and digital experiences built to help businesses grow online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy-950">
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-size" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
        </div>
        {children}
      </body>
    </html>
  );
}
