import { WA_URL } from "@/lib/config";

export function HowMuchDoesAMobileAppCostPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Quick answer</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          A simple MVP mobile app: $5k–$20k. A full-featured consumer app: $20k–$80k. A platform with backend, payments, and real-time features: $80k+. The range is wide because "mobile app" covers an enormous spectrum — here&apos;s how to know where your project sits.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What Actually Drives the Cost</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The number of screens is almost irrelevant. What matters is what happens behind them. A 5-screen app with real-time messaging, user authentication, payments, and push notifications costs more to build than a 20-screen app that mostly displays static content.
        </p>
        <div className="space-y-3">
          {[
            ["Platform", "iOS only, Android only, or both? Cross-platform frameworks like Flutter let you build for both with one codebase — significantly reducing cost. Native builds (Swift for iOS, Kotlin for Android) cost more but can access deeper device features."],
            ["Backend complexity", "Does the app need a server, a database, user accounts, or syncing across devices? That backend work often costs as much as the app itself."],
            ["Third-party integrations", "Payments (Stripe), maps (Google Maps), push notifications, camera, biometrics, social login — each one adds real development time."],
            ["Real-time features", "Live chat, live location tracking, collaborative editing — these require a more complex architecture and ongoing infrastructure costs."],
            ["Design", "A polished, custom UI takes time. An app using standard components ships faster. If you need something that looks and feels premium, budget for it."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Cost by App Type</h2>
        <div className="space-y-3">
          {[
            ["Simple informational app", "$3k–$8k", "Static content, a few screens, minimal backend. Think digital brochure or event guide."],
            ["MVP with user accounts", "$8k–$25k", "Sign up, log in, profile, core feature, basic backend. Good for validating an idea before full investment."],
            ["E-commerce or booking app", "$15k–$40k", "Product listings, cart, checkout, payments, order management. Stripe integration alone adds time."],
            ["Marketplace or social app", "$30k–$80k", "Two-sided platforms (buyers + sellers, riders + drivers) are structurally complex. Matching, reviews, payments, messaging."],
            ["Platform / SaaS mobile app", "$50k–$150k+", "Real-time data, multi-role user systems, admin dashboards, analytics, high-availability backend. Enterprise grade."],
          ].map(([type, cost, desc]) => (
            <div key={type} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 grid gap-2 sm:grid-cols-[1fr_auto]">
              <div className="space-y-1">
                <p className="font-bold text-[var(--color-text)]">{type}</p>
                <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
              </div>
              <span className="brutal-border bg-[var(--color-accent)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black whitespace-nowrap self-start">
                {cost}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Flutter vs Native: The Cost Difference</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Most apps today are built with cross-platform frameworks — Flutter being the most capable. One codebase, two platforms, roughly 60–70% of the cost of building native for both. The trade-off is minimal for most apps — you lose some platform-specific UI nuance, but gain speed and reduce budget.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Native builds (Swift on iOS, Kotlin on Android) make sense for apps that push hardware limits: real-time AR, heavy processing, deep OS integration. For 95% of business apps, Flutter or React Native is the right call.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What the Quotes You Get Actually Mean</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Getting a quote of $5k and a quote of $50k for "the same app" usually means one of these things: the cheaper quote is for a template-based build with limited customisation, it doesn&apos;t include the backend, it excludes the App Store submission and testing phase, or the developer is offshore and working at significantly lower rates.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          None of those are necessarily wrong — but you need to know which one you&apos;re getting. Always ask what the quote excludes, not just what it includes.
        </p>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Cost drivers — quick reference</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "iOS + Android (cross-platform): cheaper",
            "Native iOS + Android: 1.5–2× more",
            "User authentication: +cost",
            "Payment integration: +cost",
            "Real-time features: +significant cost",
            "Custom design vs standard UI: +cost",
            "Admin dashboard: often +30% to total",
            "App Store submission: time + $100/yr",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)] shrink-0">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Planning a mobile app?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you need to build. We build cross-platform mobile apps with Flutter — and we&apos;ll give you a straight estimate with no fluff.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Get a quote →
        </a>
      </div>

    </div>
  );
}
