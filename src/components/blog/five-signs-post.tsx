"use client";
import { WA_URL } from "@/lib/config";

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="brutal-border brutal-shadow bg-[var(--color-accent)] p-5">
      <p className="text-sm font-bold leading-7 text-[var(--color-text)]">{children}</p>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-black uppercase tracking-[-0.03em] text-[var(--color-text)] sm:text-3xl">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-8 text-[var(--color-text)]">{children}</p>
  );
}

function SignCard({
  number,
  title,
  children,
  fix,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  fix: string;
}) {
  return (
    <div className="shell brutal-shadow overflow-hidden">
      <div className="border-b-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] px-6 py-4 flex items-center gap-4">
        <span className="font-mono text-3xl font-black text-[var(--color-accent)] leading-none">{number}</span>
        <h3 className="text-base font-black uppercase tracking-[-0.01em] text-white sm:text-lg">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        <div className="text-sm leading-7 text-[var(--color-text)]">{children}</div>
        <div className="brutal-border bg-[rgba(255,250,241,0.82)] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-1">The fix</p>
          <p className="text-sm leading-6 text-[var(--color-text)]">{fix}</p>
        </div>
      </div>
    </div>
  );
}

export function FiveSignsPost() {
  return (
    <article className="space-y-12">

      {/* Intro */}
      <section className="space-y-5">
        <Body>
          Here&apos;s the problem with a bad website: you never see the damage. There&apos;s no alert, no notification, no moment where someone tells you they left because your site was slow, confusing, or looked like it was built in 2014. They just go. They find someone else. And you never know it happened.
        </Body>
        <Body>
          Most business owners assume that if a website is &quot;up&quot; it&apos;s doing its job. But being live and being effective are completely different things. A website that loads in 8 seconds, breaks on mobile, or has three different phone numbers across four pages is actively working against you — even if it looks fine on your own laptop.
        </Body>
        <Body>
          These are the five signs that your website is costing you customers, and what to do about each one.
        </Body>
      </section>

      {/* The 5 signs */}
      <section className="space-y-6">
        <SectionHeading>The 5 signs</SectionHeading>

        <SignCard
          number="01"
          title="It takes more than 3 seconds to load"
          fix="Compress images, remove unused scripts, use a fast hosting provider. A well-built modern site loads in under 2 seconds. This alone can double conversion rates."
        >
          <p>
            53% of mobile users leave a site that takes longer than 3 seconds to load. Not 10 seconds — 3. And most slow sites don&apos;t feel slow to the person who owns them, because they&apos;ve already loaded it a hundred times and it&apos;s cached in their browser.
          </p>
          <p className="mt-3">
            Open your site on your phone with WiFi turned off. That&apos;s closer to what a first-time visitor on mobile data experiences. If it takes more than a few seconds to show something useful, you&apos;re losing people before they&apos;ve read a single word.
          </p>
        </SignCard>

        <SignCard
          number="02"
          title="It doesn't work properly on mobile"
          fix="Mobile-first design isn't optional anymore — over 60% of web traffic is mobile. Text that's too small, buttons that are too close together, or layouts that break on a phone screen kill trust instantly."
        >
          <p>
            Pull up your website on your phone right now. Can you read the text without zooming in? Can you tap the buttons without hitting the wrong one? Does the navigation actually work? Is anything cut off or overlapping?
          </p>
          <p className="mt-3">
            If any of those answers are no, a significant chunk of your visitors are hitting a broken experience and bouncing. Google also ranks mobile-friendly sites higher — so a bad mobile experience hurts your search visibility too.
          </p>
        </SignCard>

        <SignCard
          number="03"
          title="There's no clear next step for the visitor"
          fix="Every page needs one primary action. Book a call. Send a message. Buy now. Make it obvious, make it easy, and put it somewhere visible without scrolling. One CTA beats five every time."
        >
          <p>
            Someone lands on your homepage. They read a bit, they&apos;re interested — and then what? If the answer is &quot;they have to figure it out themselves,&quot; most of them won&apos;t bother. People don&apos;t explore websites the way they browse a shop. They scan, they decide in seconds, and if it&apos;s not obvious what to do next, they leave.
          </p>
          <p className="mt-3">
            Cluttered pages with five different buttons, no clear pricing, and a contact form buried in a footer are leaving money on the table. Not because the business isn&apos;t good — because the website doesn&apos;t make it easy to say yes.
          </p>
        </SignCard>

        <SignCard
          number="04"
          title="It looks outdated or unpolished"
          fix="You don't need a flashy redesign — you need a site that looks intentional. Clean spacing, consistent fonts, quality images, and a design that signals you take your business seriously. First impressions take 0.05 seconds."
        >
          <p>
            Design communicates trust before a single word is read. A site with mismatched fonts, stock photos from 2012, and layout that looks like a template nobody updated tells the visitor something about the business — whether that&apos;s fair or not.
          </p>
          <p className="mt-3">
            Visitors compare your site to every other site they&apos;ve seen that day. If yours feels significantly behind, it creates doubt — even if your actual product or service is excellent. In competitive markets, looking behind is enough reason to call someone else first.
          </p>
        </SignCard>

        <SignCard
          number="05"
          title="You can't update it yourself"
          fix="A website you can't control is a liability. You should be able to update prices, change photos, add a new service, or fix a typo without calling a developer every time. If you can't, that's a project worth fixing."
        >
          <p>
            This one doesn&apos;t affect visitors directly — but it affects you. If updating your website requires emailing someone, waiting for a response, and paying for every small change, the result is a website that stays outdated because the friction of updating it is too high.
          </p>
          <p className="mt-3">
            Outdated opening hours, an old phone number, services you no longer offer, prices that don&apos;t match what you charge — these all come from websites that are too painful to maintain. And each one erodes trust with real customers who find the wrong information.
          </p>
        </SignCard>
      </section>

      {/* Honest take */}
      <section className="space-y-5">
        <SectionHeading>The honest reality</SectionHeading>
        <Body>
          Most of these problems are fixable. Not always cheap, not always overnight — but fixable. The ones that aren&apos;t worth fixing are the ones where the website is so far from what the business actually needs that a full rebuild is the cleaner path.
        </Body>
        <Body>
          The first step is knowing which situation you&apos;re in. Run your site through Google PageSpeed Insights (free). Open it on three different phones. Ask someone who has never seen it to find your contact info in under 30 seconds. The answers will tell you more than any audit report.
        </Body>
      </section>

      {/* Closing callout */}
      <Callout>
        A website that looks fine but converts badly is one of the most expensive things a business can have — because the cost is invisible. Every visitor who left without contacting you is a customer you never knew you lost.
      </Callout>

      {/* WhatsApp CTA */}
      <div className="shell brutal-shadow p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Recognise any of these?</p>
          <p className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)]">
            Let&apos;s fix it.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            Send a message and we can look at your site together — no commitment, no sales pitch.
          </p>
        </div>
        <a
          href={WA_URL}
          target="_blank"
          rel="noreferrer"
          className="brutal-border brutal-shadow flex shrink-0 items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          💬 Message on WhatsApp →
        </a>
      </div>

    </article>
  );
}
