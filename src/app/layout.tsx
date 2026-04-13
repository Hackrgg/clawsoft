import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
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
    default: "diguz",
    template: "%s | diguz",
  },
  description:
    "A project-first portfolio for diguz featuring technical products, case studies, and evolving experiments.",
  openGraph: {
    title: "diguz",
    description:
      "Dark, technical, project-led portfolio featuring hackr.gg, nimra.app, and thebedstore.shop.",
    url: "https://diguz.com",
    siteName: "diguz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "diguz",
    description:
      "Dark, technical, project-led portfolio featuring hackr.gg, nimra.app, and thebedstore.shop.",
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
      </body>
    </html>
  );
}
