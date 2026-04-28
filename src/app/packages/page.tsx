"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WA_URL } from "@/lib/config";

const apps = [
  {
    n: "01",
    title: "Food Delivery App",
    desc: "Multi-restaurant ordering platform built for scale.",
    features: ["Customer app + Driver app", "Restaurant dashboard", "Admin panel", "Real-time order tracking", "In-app payments", "Push notifications"],
    tags: ["Multi-Vendor", "Live Tracking", "Payments"],
    accent: "var(--color-accent)",
  },
  {
    n: "02",
    title: "Taxi / Ride Hailing App",
    desc: "Uber-style on-demand ride platform, fully white-label.",
    features: ["Passenger app + Driver app", "Live GPS tracking", "Fare calculation", "Ride history", "In-app payments", "Surge pricing support"],
    tags: ["GPS Tracking", "Live Dispatch", "In-App Payments"],
    accent: "var(--color-teal)",
  },
  {
    n: "03",
    title: "E-commerce App",
    desc: "Full mobile storefront ready to sell from day one.",
    features: ["Product listings & categories", "Cart & checkout", "Order management", "Coupon & discount engine", "Push notifications", "Admin dashboard"],
    tags: ["Product Catalog", "Cart & Checkout", "Order Management"],
    accent: "var(--color-accent-strong)",
  },
  {
    n: "04",
    title: "Hotel Booking App",
    desc: "Property listing and booking platform for hotels and rentals.",
    features: ["Room availability calendar", "Online reservations", "Guest management", "Payment processing", "Reviews & ratings", "Multi-property support"],
    tags: ["Availability Calendar", "Reservations", "Guest Management"],
    accent: "var(--color-accent)",
  },
  {
    n: "05",
    title: "Grocery Delivery App",
    desc: "On-demand grocery ordering with multi-store support.",
    features: ["Multi-vendor stores", "Product categories & search", "Delivery tracking", "Scheduled orders", "Wallet & payments", "Driver app included"],
    tags: ["Multi-Vendor", "Scheduled Orders", "Delivery Tracking"],
    accent: "var(--color-teal)",
  },
  {
    n: "06",
    title: "Real Estate App",
    desc: "Property search and listing platform for agents and buyers.",
    features: ["Map-based property search", "Advanced filters", "Property detail pages", "Agent contact & chat", "Saved listings", "Virtual tour support"],
    tags: ["Map View", "Property Listings", "Agent Contact"],
    accent: "var(--color-accent-strong)",
  },
  {
    n: "07",
    title: "Beauty & Salon App",
    desc: "Appointment booking system for salons, spas, and freelancers.",
    features: ["Service catalog", "Staff selection", "Time slot booking", "Reminders & notifications", "In-app payments", "Loyalty points"],
    tags: ["Appointment Booking", "Staff Selection", "Reminders"],
    accent: "var(--color-accent)",
  },
  {
    n: "08",
    title: "Doctor & Clinic App",
    desc: "Patient booking and clinic management in one platform.",
    features: ["Doctor profiles & specialties", "Appointment scheduling", "Medical records", "Teleconsultation (video)", "Prescription management", "Admin panel"],
    tags: ["Patient Booking", "Teleconsultation", "Medical Records"],
    accent: "var(--color-teal)",
  },
  {
    n: "09",
    title: "Events & Ticketing App",
    desc: "Event discovery and ticket sales for any scale.",
    features: ["Event listings & discovery", "Ticket purchase & checkout", "QR code entry scanning", "Organizer dashboard", "Seat selection", "Refund management"],
    tags: ["QR Entry", "Ticket Sales", "Organizer Dashboard"],
    accent: "var(--color-accent-strong)",
  },
  {
    n: "10",
    title: "Gym & Fitness App",
    desc: "Membership and class management for gyms and coaches.",
    features: ["Membership plans & billing", "Class booking & schedule", "Workout tracking", "Coach profiles", "Progress stats", "Push notifications"],
    tags: ["Memberships", "Class Booking", "Workout Tracking"],
    accent: "var(--color-accent)",
  },
  {
    n: "11",
    title: "Education & Courses App",
    desc: "Online learning platform for schools, coaches, and course creators.",
    features: ["Course catalog & enrollment", "Video lessons & modules", "Quizzes & assignments", "Student progress tracking", "Certificates & badges", "Instructor dashboard"],
    tags: ["Online Learning", "Video Lessons", "Certificates"],
    accent: "var(--color-teal)",
  },
];

export default function PackagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="dot-grid border-b-2 border-[rgba(44,35,28,0.85)] px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="brutal-border brutal-shadow bg-white px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Back
              </Link>
              <span className="brutal-border bg-[var(--color-accent)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-black brutal-shadow">
                Packages
              </span>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end mb-12">
              <h1 className="text-4xl font-black uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                App Packages.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                Production-ready mobile apps, customized for your brand and delivered fast. Pick a category, we handle the rest.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {apps.map((app, i) => (
                <motion.div
                  key={app.n}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="shell brutal-shadow p-6 space-y-4 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">{app.n}</span>
                    <span className="brutal-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black" style={{ backgroundColor: app.accent }}>
                      Mobile App
                    </span>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h2 className="text-lg font-black uppercase tracking-[-0.02em] text-[var(--color-text)]">{app.title}</h2>
                    <p className="text-sm leading-6 text-[var(--color-muted)]">{app.desc}</p>
                    <ul className="space-y-1 pt-1">
                      {app.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                          <span className="text-[10px] font-black" style={{ color: app.accent }}>✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-nowrap gap-1.5">
                    {app.tags.map((tag) => (
                      <span key={tag} className="brutal-border bg-[rgba(255,250,241,0.82)] whitespace-nowrap px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--color-text)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-border brutal-shadow bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[var(--color-text)] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none text-center"
                  >
                    Get This App →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
