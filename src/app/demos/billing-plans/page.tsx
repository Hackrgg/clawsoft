"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";

type PlanId = "starter" | "pro" | "enterprise";

type Plan = {
  id: PlanId;
  name: string;
  price: string;
  blurb: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$49/mo",
    blurb: "For teams shipping their first internal ops stack.",
    features: ["10 seats", "50k events/mo", "Email support", "Basic audit log"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$199/mo",
    blurb: "For product teams that care about uptime, billing, and workflows.",
    features: ["Unlimited seats", "500k events/mo", "Priority support", "SAML (add-on)"],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Let’s talk",
    blurb: "For regulated orgs with custom security and deployment needs.",
    features: ["Dedicated VPC", "Custom SLAs", "SSO + SCIM", "On-prem / hybrid"],
  },
];

type Invoice = {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "open" | "void";
};

const invoicesSeed: Invoice[] = [
  { id: "INV-8891", date: "2026-04-01", amount: "$199.00", status: "paid" },
  { id: "INV-8722", date: "2026-03-01", amount: "$199.00", status: "paid" },
  { id: "INV-8530", date: "2026-02-01", amount: "$199.00", status: "paid" },
  { id: "INV-8314", date: "2026-01-01", amount: "$199.00", status: "paid" },
];

function statusChip(status: Invoice["status"]) {
  switch (status) {
    case "paid":
      return "bg-[var(--color-teal)] text-black";
    case "open":
      return "bg-[var(--color-accent-strong)] text-black";
    case "void":
      return "bg-[rgba(44,35,28,0.16)] text-[var(--color-text)]";
  }
}

function Meter({ label, value, max }: { label: string; value: number; max: number }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="brutal-border bg-[rgba(246,239,227,0.75)] p-4">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">{label}</p>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
          {value.toLocaleString()} / {max.toLocaleString()}
        </p>
      </div>
      <div className="mt-3 brutal-border bg-white h-3 overflow-hidden">
        <div
          className="h-full"
          style={{
            width: `${pct}%`,
            background: pct > 90 ? "var(--color-accent)" : "var(--color-teal)",
          }}
        />
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{pct}% used</p>
    </div>
  );
}

export default function BillingPlansDemo() {
  const [planId, setPlanId] = useState<PlanId>("pro");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState<string | null>(null);

  const currentPlan = useMemo(() => plans.find((p) => p.id === planId)!, [planId]);
  const couponIsValid = coupon.trim().toLowerCase() === "diguz";

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--color-bg)] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <span className="brutal-border brutal-shadow bg-[var(--color-accent-strong)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-black">
              Demo
            </span>
            <h1 className="mt-4 text-3xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)] sm:text-4xl">
              Billing + Plans
            </h1>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Pricing selection, usage meters, invoices — the “money” surface of SaaS.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="brutal-border brutal-shadow panel-strong p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Choose a plan</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Demo-only. No real payments.
                  </p>
                </div>
                <div className="brutal-border bg-white p-3 w-full sm:w-[340px]">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">Coupon</p>
                  <div className="mt-2 flex gap-2">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Try: DIGUZ"
                      className="w-full border-2 border-[#2c231c] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setCouponApplied(couponIsValid ? "DIGUZ" : null)}
                      className="brutal-border brutal-shadow bg-[var(--color-accent)] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied ? (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-teal)]">
                      Coupon applied: {couponApplied} (20% off)
                    </p>
                  ) : coupon.length > 0 ? (
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Invalid coupon
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {plans.map((plan) => {
                  const active = plan.id === planId;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setPlanId(plan.id)}
                      className={[
                        "brutal-border brutal-shadow text-left p-5 transition",
                        active ? "bg-white" : "bg-[rgba(246,239,227,0.65)] hover:bg-white",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{plan.name}</p>
                        {active ? (
                          <span className="brutal-border bg-[var(--color-teal)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                            Selected
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-2xl font-black text-[var(--color-text)]">{plan.price}</p>
                      <p className="mt-2 text-[13px] text-[var(--color-text)]">{plan.blurb}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((f) => (
                          <li key={f} className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                            • {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 brutal-border brutal-shadow bg-[var(--color-text)] p-5 text-[var(--color-accent)]">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                  Checkout summary
                </p>
                <div className="mt-2 flex items-end justify-between">
                  <p className="font-black uppercase tracking-[-0.01em] text-white text-sm">{currentPlan.name} plan</p>
                  <p className="text-2xl font-black text-white">
                    {couponApplied ? "—20%" : ""}
                  </p>
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.7)]">
                  In a real product, this connects to Stripe (or your billing provider) and updates entitlements instantly.
                </p>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="brutal-border brutal-shadow bg-white p-6">
                <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Usage</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Metered usage example
                </p>
                <div className="mt-4 space-y-3">
                  <Meter label="Events" value={173_402} max={500_000} />
                  <Meter label="Seats" value={18} max={50} />
                  <Meter label="Storage (GB)" value={312} max={500} />
                </div>
              </section>

              <section className="brutal-border brutal-shadow panel-strong overflow-hidden">
                <div className="border-b-2 border-[#2c231c] px-5 py-4 flex items-center justify-between">
                  <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Invoices</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">Last 4</p>
                </div>
                <div className="divide-y-2 divide-[#2c231c]">
                  {invoicesSeed.map((inv) => (
                    <div key={inv.id} className="px-5 py-4 bg-white">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{inv.id}</p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{inv.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-[var(--color-text)]">{inv.amount}</p>
                          <span className={`inline-block mt-2 brutal-border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${statusChip(inv.status)}`}>
                            {inv.status}
                          </span>
                        </div>
                      </div>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        In production: download PDF, update card, and view line items.
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

