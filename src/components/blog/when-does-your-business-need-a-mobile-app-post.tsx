import { WA_URL } from "@/lib/config";

export function WhenDoesYourBusinessNeedAMobileAppPost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">The short version</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Most businesses don&apos;t need a mobile app — they need a better mobile website. But when your users need to do things on the go, offline, or repeatedly throughout the day, an app is often the right answer. Here&apos;s how to tell the difference.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Website vs App: The Real Difference</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          A mobile website is what most businesses need. It&apos;s fast to build, available on every device, easy to update, and works perfectly for browsing, reading, and contacting you. If someone visits once a month, a mobile-optimised website is fine.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          An app makes sense when people interact with your product every day, when it needs to work without internet, when it uses the phone&apos;s camera, GPS, or sensors, or when the experience needs to feel native rather than browser-based. Apps also allow push notifications — a direct line to your users that websites can&apos;t match.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Signs You Probably Need an App</h2>
        <div className="space-y-3">
          {[
            ["Your users come back daily", "High-frequency use is the clearest signal. Apps reduce friction for users who interact with your product regularly — no URL to type, no browser chrome, instant access."],
            ["You need to send push notifications", "Push notifications drive re-engagement in ways that email and SMS can&apos;t match. If retention matters, push is a major lever."],
            ["Users need to access features offline", "Service workers can partially solve this on the web, but native apps handle offline far more reliably — useful for field workers, travellers, or low-signal environments."],
            ["You&apos;re using hardware features", "Camera, GPS, accelerometer, biometrics, Bluetooth — these work natively in apps and require more workarounds on the web."],
            ["You want to be on the App Store", "The App Store and Google Play still drive significant discovery, especially for consumer products. If being found there matters, you need an app."],
            ["The experience needs to feel native", "For products where quality of experience is a differentiator — a fitness tracker, a creative tool, a communication app — native performance matters."],
          ].map(([title, desc]) => (
            <div key={title} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 space-y-1">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Signs You Probably Don&apos;t Need One Yet</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            ["Low visit frequency", "If users come to your business once a month to book or browse, a mobile-first website handles this better and at a fraction of the cost."],
            ["No repeat user actions", "Information sites, brochure sites, landing pages — there&apos;s nothing for an app to add here."],
            ["You don&apos;t have product-market fit yet", "Build an app after you know what users want. Validating with a web product first saves a lot of wasted development budget."],
            ["Budget is the main constraint", "A well-built mobile website is 3–5× cheaper than an app. Start there, validate demand, then invest in native."],
          ].map(([title, desc]) => (
            <div key={title} className="shell p-5 space-y-2">
              <p className="font-bold text-[var(--color-text)]">{title}</p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Industries Where Mobile Apps Pay Off</h2>
        <div className="space-y-3">
          {[
            "Food delivery and ordering — repeat daily use, location, push notifications",
            "Fitness and health tracking — daily engagement, offline sync, device sensors",
            "Field service and logistics — GPS, offline mode, camera for documentation",
            "Communication tools — real-time messaging, calling, notifications",
            "Marketplace platforms — buyer/seller flows that benefit from native UX",
            "Finance and banking — security, biometrics, transaction alerts",
            "On-demand services — location, booking, real-time tracking",
          ].map((item) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-accent-strong)] font-black shrink-0">→</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">A Middle Path: Progressive Web Apps</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Progressive Web Apps (PWAs) sit between a website and a native app. They&apos;re built on web technology but can be installed on a home screen, work offline, and send push notifications. They don&apos;t appear in the App Store, and they can&apos;t access all device features — but for many use cases, they cover 80% of what an app does at 30% of the cost.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          If you want app-like behaviour without the full investment of a native build, a PWA is worth considering as a first step.
        </p>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Thinking about building an app?</p>
        <p className="text-lg font-bold leading-8 text-black">
          Tell us what you&apos;re building and we&apos;ll tell you whether an app, a PWA, or a mobile website is the right move for your specific situation.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Let&apos;s talk →
        </a>
      </div>

    </div>
  );
}
