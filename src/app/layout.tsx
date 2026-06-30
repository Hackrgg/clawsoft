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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://clawsoft.net/#organization",
      "name": "Clawsoft",
      "url": "https://clawsoft.net",
      "description":
        "Clawsoft is a web studio that builds and ships websites, web apps, SaaS platforms, mobile apps, and browser extensions for founders and businesses. All projects are fixed-price with full source code ownership.",
      "knowsAbout": [
        "Web Development",
        "Mobile App Development",
        "SaaS Development",
        "E-commerce Development",
        "Browser Extension Development",
        "MVP Development",
        "Next.js",
        "Flutter",
        "TypeScript",
        "React",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page Development",
              "description":
                "Custom landing pages built for conversion — starting from $150, delivered in 3–8 days.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Website Development",
              "description":
                "Multi-page business websites with optional CMS — $350–$1,200, delivered in 7–25 days.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Store Development",
              "description":
                "Full e-commerce stores with cart, checkout, and admin panel — $550–$2,200, delivered in 12–42 days.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web App and SaaS Development",
              "description":
                "Full-stack web apps and SaaS platforms with auth, payments, and dashboards — $1,700–$6,500, delivered in 25–90 days.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description":
                "Cross-platform iOS and Android apps built with Flutter — $1,200–$4,500, delivered in 18–65 days.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Browser Extension Development",
              "description":
                "Chrome and cross-browser extensions with optional auth, payments, and dashboards — $300–$1,200, delivered in 7–20 days.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://clawsoft.net/#website",
      "url": "https://clawsoft.net",
      "name": "Clawsoft",
      "publisher": { "@id": "https://clawsoft.net/#organization" },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clawsoft.net"),
  verification: {
    google: "7xQEbqim_73X3jOMBcefX9MMU2mXvkVlM_7tsxMtweM",
  },
  title: {
    default: "Clawsoft — Web Studio for Founders",
    template: "%s | Clawsoft",
  },
  description:
    "Clawsoft builds websites, web apps, mobile apps & browser extensions for founders — fixed-price, fast delivery, full source code.",
  openGraph: {
    title: "Clawsoft — Web Studio for Founders",
    description:
      "Clawsoft is a web studio that builds websites, web apps, SaaS platforms, mobile apps, and browser extensions. Fixed-price projects, full source code ownership, no retainers.",
    url: "https://clawsoft.net",
    siteName: "Clawsoft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawsoft — Web Studio for Founders",
    description:
      "Websites, web apps, mobile apps, and browser extensions — fixed-price, fast delivery, full source code.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
