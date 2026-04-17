import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
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
  metadataBase: new URL("https://diguz.com"),
  title: {
    default: "diguz — Web developer for hire",
    template: "%s | diguz",
  },
  description:
    "Web developer available for hire. Websites, web apps, and browser extensions — built and shipped. Recent work: hackr.gg, nimra.app, thebedstore.shop. Available now.",
  openGraph: {
    title: "diguz — Web developer for hire",
    description:
      "Web developer available for hire. Shipped hackr.gg, nimra.app, and thebedstore.shop in 2026. Next.js, TypeScript, Supabase, Chrome extensions.",
    url: "https://diguz.com",
    siteName: "diguz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "diguz — Web developer for hire",
    description:
      "Web developer available for hire. Shipped hackr.gg, nimra.app, and thebedstore.shop in 2026.",
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
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
