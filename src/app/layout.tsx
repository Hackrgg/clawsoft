import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import Script from "next/script";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clawsoft.io"),
  title: {
    default: "Clawsoft — We Build. We Ship.",
    template: "%s | Clawsoft",
  },
  description:
    "A web studio that builds and ships — websites, web apps, mobile apps, and browser extensions. Recent work: hackr.gg, nimra.app, thebedstore.shop.",
  openGraph: {
    title: "Clawsoft — We Build. We Ship.",
    description:
      "A web studio that builds and ships. Websites, web apps, mobile apps, browser extensions. Next.js, TypeScript, Supabase, Flutter.",
    url: "https://clawsoft.io",
    siteName: "clawsoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawsoft — We Build. We Ship.",
    description:
      "A web studio that builds and ships. Websites, web apps, mobile apps, browser extensions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X9N9Z1EPST" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X9N9Z1EPST');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <PageTransition />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
