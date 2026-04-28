import { WA_URL } from "@/lib/config";

export function MultiVendorFoodAppPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">What this covers</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Multi-vendor food ordering apps look simple from the outside — restaurants list food, customers order, drivers deliver. But the product has three distinct user types, real-time state everywhere, and failure points at every handoff. Here&apos;s what separates the ones that work from the ones that don&apos;t.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Three Products in One</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Most food ordering apps are actually three separate products that have to feel like one. The customer app needs to be fast, browsable, and frictionless at checkout. The restaurant dashboard needs to surface incoming orders clearly and let staff confirm or reject them without confusion. The delivery side — whether that&apos;s your own drivers or a third-party fleet — needs real-time location and status updates that actually reflect what&apos;s happening.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Apps that treat these as one product end up with interfaces that work poorly for all three. The restaurant dashboard gets cluttered with customer-facing logic. The delivery tracking gets bolted on as an afterthought. Designing them as separate surfaces with a shared backend is the structural decision that everything else depends on.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Core Features That Actually Matter</h2>
        <div className="space-y-3">
          {[
            ["Multi-restaurant browsing", "Customers need to filter by cuisine, distance, rating, and delivery time — and trust that the information is accurate. Stale menus and wrong opening hours kill trust faster than anything."],
            ["Real-time order tracking", "The moment a customer places an order, they want to know it was received. Then when it&apos;s being prepared. Then when it&apos;s picked up. Then where the driver is. Each status update reduces support load significantly."],
            ["Restaurant order management", "The restaurant-side interface is the most underbuilt part of most food apps. Incoming orders need to be loud, clear, and easy to action — accept, reject, or mark ready. Missed orders because the notification was quiet costs restaurants money and customers trust."],
            ["Flexible menu management", "Restaurants need to update items, prices, availability, and modifiers without needing a developer. Modifiers — add cheese, remove onions, choose size — are deceptively complex to build correctly."],
            ["Split payouts", "In a multi-vendor model, each order payment needs to be split correctly between the platform, the restaurant, and potentially a delivery fee. Getting this wrong creates reconciliation headaches and disputes."],
            ["Ratings and reviews", "Per-restaurant and per-order reviews drive quality and inform discovery. They also give you data on which restaurants are damaging your platform&apos;s reputation."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Where Most Apps Get It Wrong</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["No offline handling", "Drivers lose signal. Restaurants have unstable connections. An app that breaks entirely without internet is unusable in the field."],
            ["Order status isn&apos;t real-time", "Polling for updates every 30 seconds feels broken compared to a WebSocket that pushes the moment something changes. Users notice immediately."],
            ["Payments handled too late", "Adding payment infrastructure after the app is built is painful. Stripe Connect for multi-vendor payouts needs to be designed in from the start — not retrofitted."],
            ["No admin visibility", "Platform operators need to see everything: live orders, restaurant performance, driver activity, disputes, and revenue. An admin dashboard isn&apos;t optional — it&apos;s how you run the business."],
            ["Push notifications as an afterthought", "Order updates, driver arrival, special offers — these drive re-engagement and reduce support load. They need to be reliable, not best-effort."],
            ["Menu system too rigid", "Modifiers are the hardest part to build well. \"No sauce\", \"extra cheese\", \"choose your size\" — nested options with pricing logic that need to work consistently across ordering and kitchen display."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">⚠ {title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">The Tech That Holds It Together</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Real-time is the throughline. Order status, driver location, restaurant acceptance — all of it needs to update live without the user having to refresh. That means WebSockets or a real-time database (Supabase Realtime, Firebase) at the backend layer, not a REST API that gets polled.
        </p>
        <div className="space-y-3">
          {[
            { n: "01", label: "Mobile app", detail: "Flutter is the right call for most food apps — one codebase, iOS and Android, with the performance to handle maps, animations, and real-time updates smoothly." },
            { n: "02", label: "Real-time backend", detail: "Supabase or Firebase for live order state and driver location. REST APIs for everything else — menus, user profiles, history." },
            { n: "03", label: "Payments", detail: "Stripe Connect handles multi-vendor payouts cleanly — each restaurant gets a connected account and receives their cut automatically." },
            { n: "04", label: "Maps + delivery", detail: "Google Maps SDK for customer-facing tracking. If you&apos;re managing your own fleet, you need driver apps with location broadcasting — a separate product in itself." },
            { n: "05", label: "Push notifications", detail: "FCM (Firebase Cloud Messaging) for reliable push on both platforms. Critical for order status updates and re-engagement." },
          ].map(({ n, label, detail }) => (
            <div key={n} className="shell p-5 grid gap-4 sm:grid-cols-[60px_1fr]">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{n}</span>
              <div>
                <p className="mb-1 text-sm font-black uppercase tracking-[0.1em] text-[var(--color-text)]">{label}</p>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">What to Build First</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The biggest mistake is trying to build everything at once. A food ordering platform that works well for 10 restaurants is more useful than one that half-works for 100. Start with the core loop — browse, order, pay, track — and get it right before adding loyalty programmes, scheduled orders, or corporate accounts.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The restaurant dashboard and the customer app need to ship together. One is useless without the other. Everything else — admin analytics, driver apps, marketing tools — is phase two.
        </p>
      </div>

      <div className="shell brutal-shadow p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">What a solid MVP covers</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Customer app — browse, order, track",
            "Restaurant dashboard — manage orders + menu",
            "Real-time order status updates",
            "Stripe Connect for split payouts",
            "Push notifications for order events",
            "Admin panel — orders, restaurants, revenue",
          ].map((item, i) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 flex gap-3 items-center">
              <span className="font-mono text-[10px] text-[var(--color-muted)] shrink-0">0{i + 1}</span>
              <span className="text-sm text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Building a food ordering platform?</p>
        <p className="text-lg font-bold leading-8 text-black">
          We build mobile apps and web platforms — Flutter for mobile, real-time backends, payments. Tell us what you&apos;re building and we&apos;ll tell you how we&apos;d approach it.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Let&apos;s talk →
        </a>
      </div>

    </div>
  );
}
