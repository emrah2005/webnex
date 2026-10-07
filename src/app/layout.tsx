import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://webnex.agency"),
  title: {
    default: "WebNex — Next Generation Web",
    template: "%s · WebNex",
  },
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
  creator: "WebNex",
  publisher: "WebNex",
  applicationName: "WebNex",
  icons: {
    icon: [{ url: "/icon", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "WebNex — Next Generation Web",
    description:
      "Modern websites, web applications and digital experiences built to help businesses grow online.",
    type: "website",
    siteName: "WebNex",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNex — Next Generation Web",
    description:
      "Modern websites, web applications and digital experiences built to help businesses grow online.",
    creator: "@_webnex_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080F" },
    { media: "(prefers-color-scheme: light)", color: "#05080F" },
  ],
  width: "device-width",
  initialScale: 1,
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
