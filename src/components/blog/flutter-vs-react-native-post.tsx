import { WA_URL } from "@/lib/config";

export function FlutterVsReactNativePost() {
  return (
    <div className="space-y-12">

      <div className="shell p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Short answer</p>
        <p className="text-lg leading-8 text-[var(--color-text)]">
          Flutter gives you more consistent performance and a better visual result. React Native is easier to staff if you already have web developers. For new projects where quality matters, Flutter wins. For teams that live in JavaScript, React Native makes more sense.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Why This Decision Matters</h2>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          Both Flutter and React Native let you build a single codebase that runs on iOS and Android — rather than writing separate apps in Swift and Kotlin. The appeal is obvious: build once, ship everywhere, at roughly half the cost of going fully native.
        </p>
        <p className="text-base leading-8 text-[var(--color-muted)]">
          The choice between them comes down to how they work under the hood, what your team knows, and what kind of app you&apos;re building.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">How They Work Differently</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-6 space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Flutter</p>
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              Built by Google. Uses Dart (a language designed for UI). Draws every pixel itself using its own rendering engine — it doesn&apos;t use native iOS or Android UI components. This means pixel-perfect consistency across platforms, and no surprises when Apple or Google updates their platform.
            </p>
          </div>
          <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-6 space-y-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">React Native</p>
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              Built by Meta. Uses JavaScript/TypeScript — languages most web developers already know. Bridges to native UI components on each platform, so apps look and feel closer to the platform default. Relies on a bridge between JS and native code, which can become a performance bottleneck.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">Head-to-Head Comparison</h2>
        <div className="space-y-3">
          {[
            ["Performance", "Flutter", "Flutter's own rendering engine consistently outperforms React Native's JS bridge, especially on complex animations and heavy UI."],
            ["UI consistency", "Flutter", "Identical pixels on iOS and Android. React Native uses platform components so the same app can look subtly different."],
            ["Developer availability", "React Native", "JavaScript developers are everywhere. Dart developers are rarer, which affects hiring and cost."],
            ["Ecosystem & packages", "Even", "Both have mature ecosystems. React Native's is larger; Flutter's quality is more consistent."],
            ["Web/Desktop support", "Flutter", "Flutter runs on web, desktop, and mobile from a single codebase. React Native is primarily mobile."],
            ["Learning curve", "React Native", "If your team knows React, React Native is a natural extension. Flutter requires learning Dart."],
          ].map(([category, winner, desc]) => (
            <div key={category} className="brutal-border bg-[rgba(255,250,241,0.82)] p-5 grid gap-2 sm:grid-cols-[1fr_auto]">
              <div className="space-y-1">
                <p className="font-bold text-[var(--color-text)]">{category}</p>
                <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
              </div>
              <span className="brutal-border bg-[var(--color-accent)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black whitespace-nowrap self-start">
                {winner}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">When to Choose Flutter</h2>
        <div className="space-y-3">
          {[
            "You want a polished, custom UI that looks identical on iOS and Android",
            "Performance matters — heavy animations, real-time updates, complex interactions",
            "You&apos;re building for mobile AND want to cover web/desktop later from the same codebase",
            "You&apos;re hiring a specialist developer rather than repurposing a web team",
          ].map((item) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-text)] font-black shrink-0">✓</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)]">When to Choose React Native</h2>
        <div className="space-y-3">
          {[
            "Your existing team knows React and you want to reuse skills",
            "You need to ship fast and can&apos;t onboard a Dart developer",
            "Platform-native UI feel matters more than pixel-perfect custom design",
            "You have existing web infrastructure (APIs, auth) built in JavaScript",
          ].map((item) => (
            <div key={item} className="brutal-border bg-[rgba(255,250,241,0.82)] px-5 py-4 flex gap-3 items-start">
              <span className="text-[var(--color-text)] font-black shrink-0">✓</span>
              <span className="text-sm leading-6 text-[var(--color-text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-8 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">Building a mobile app?</p>
        <p className="text-lg font-bold leading-8 text-black">
          We build with Flutter — one codebase, iOS and Android, built properly. Tell us what you need and we&apos;ll scope it.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer"
          className="brutal-border inline-block bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:opacity-80">
          Get in touch →
        </a>
      </div>

    </div>
  );
}
