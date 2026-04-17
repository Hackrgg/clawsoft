"use client";

import {
  SiClaude,
  SiGithub,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import {
  VscTerminal,
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscGitCommit,
  VscCode,
  VscSymbolMisc,
} from "react-icons/vsc";

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="brutal-border overflow-hidden">
      {label && (
        <div className="border-b-2 border-[rgba(44,35,28,0.85)] bg-[var(--color-text)] px-4 py-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            {label}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[rgba(22,18,14,0.96)] p-5 text-sm leading-7 text-[#e8e0d0]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

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

export function ClaudeCodePost() {
  return (
    <article className="space-y-12">

      {/* What it actually is */}
      <section className="space-y-5">
        <SectionHeading>What Claude Code actually is</SectionHeading>
        <Body>
          Claude Code is Anthropic&apos;s official CLI for Claude — it runs in your terminal and has access to your entire project, not just whatever you paste into a chat window. It can read files, write files, run shell commands, search the codebase, check git history, run builds, read the errors, fix them, and try again. The whole loop, in the terminal, without switching contexts.
        </Body>
        <Body>
          The difference from tools like Copilot or ChatGPT is context. Copilot works on the file you&apos;re in. ChatGPT works on whatever you paste. Claude Code reads your <code className="brutal-border bg-[rgba(255,250,241,0.82)] px-1.5 py-0.5 font-mono text-[13px]">package.json</code>, your config files, traces imports across directories, checks how existing patterns work in your codebase, and makes changes that actually fit — not just changes that compile.
        </Body>
      </section>

      {/* Capabilities grid */}
      <section className="space-y-5">
        <SectionHeading>Core capabilities</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: VscFiles, label: "Multi-file editing", desc: "Edits across 10+ files in one pass. Useful for refactors, renames, consistent pattern changes." },
            { icon: VscTerminal, label: "Command execution", desc: "Runs npm, git, curl, whatever. Reads the output and reacts to it — not just fire and forget." },
            { icon: VscSearch, label: "Codebase search", desc: "Greps for usages, finds where a function is called, understands the full dependency chain." },
            { icon: VscDebugAlt, label: "Error loops", desc: "Runs build → reads error → fixes it → runs again. Iterates until it passes or tells you why it can't." },
            { icon: VscGitCommit, label: "Git integration", desc: "Reads diffs, checks commit history, writes commit messages, understands what changed and why." },
            { icon: VscCode, label: "Scaffolding", desc: "Generates full feature implementations that match your existing file structure and code patterns." },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="shell p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Icon className="text-xl text-[var(--color-text)]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                  {label}
                </span>
              </div>
              <p className="text-sm leading-6 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting started */}
      <section className="space-y-5">
        <SectionHeading>Getting started</SectionHeading>
        <Body>
          Install it globally or run it with npx. It authenticates via your Anthropic account — free tier gets you limited messages, Pro and API plans give you more.
        </Body>
        <CodeBlock
          label="Terminal"
          code={`# Install globally
npm install -g @anthropic-ai/claude-code

# Or run without installing
npx @anthropic-ai/claude-code

# Then authenticate
claude
> /login`}
        />
        <Body>
          First session, give it context about your project. The faster approach is adding a <code className="brutal-border bg-[rgba(255,250,241,0.82)] px-1.5 py-0.5 font-mono text-[13px]">CLAUDE.md</code> to your project root — it reads this every session and uses it as persistent context.
        </Body>
        <CodeBlock
          label="CLAUDE.md"
          code={`# Project context

This is a Next.js 15 app using App Router, Supabase for the backend,
Tailwind CSS v4 for styling, TypeScript throughout.

## Key conventions
- Server components by default, client only when needed
- All DB queries go through /src/lib/db.ts
- Environment variables in .env.local (never commit)
- Run \`npm run dev\` to start, \`npm run build\` to check for errors

## Current focus
Working on the dashboard — files in /src/app/dashboard/`}
        />
      </section>

      {/* How the workflow actually looks */}
      <section className="space-y-5">
        <SectionHeading>What the workflow actually looks like</SectionHeading>
        <Body>
          The best way to use Claude Code is to think of it as a developer on your team — one that needs clear instructions but moves fast once it has them. Vague prompts get vague results. Specific prompts with context get working code.
        </Body>

        {/* Flow diagram */}
        <div className="shell brutal-shadow p-6">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Typical session flow
          </p>
          <div className="flex flex-col gap-0">
            {[
              { step: "01", icon: VscTerminal, label: "Open Claude Code", detail: "Run `claude` in your project directory" },
              { step: "02", icon: VscSymbolMisc, label: "Give it the task", detail: "Be specific — file, feature, constraint" },
              { step: "03", icon: VscSearch, label: "It explores the codebase", detail: "Reads relevant files, checks patterns" },
              { step: "04", icon: VscCode, label: "Makes the changes", detail: "Edits files, shows you every diff" },
              { step: "05", icon: VscTerminal, label: "Runs and verifies", detail: "npm run build, fixes errors if any" },
              { step: "06", icon: VscGitCommit, label: "You review and commit", detail: "Always check what it changed" },
            ].map(({ step, icon: Icon, label, detail }, i, arr) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="brutal-border flex h-10 w-10 shrink-0 items-center justify-center bg-[var(--color-accent)]">
                    <Icon className="text-base text-[var(--color-text)]" />
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[rgba(44,35,28,0.2)] my-0.5" style={{ minHeight: 24 }} />
                  )}
                </div>
                <div className="pb-5 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[var(--color-muted)]">{step}</span>
                    <span className="text-sm font-black uppercase tracking-[0.08em] text-[var(--color-text)]">{label}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Body>
          A real example: adding a rate limiter to an API route. Instead of searching how to do it, writing the middleware, figuring out where to put it, testing it — you describe what you want, Claude reads your existing routes, picks the right pattern, adds the middleware, and wires it in. What takes 30 minutes of context switching takes 3 minutes of reviewing a diff.
        </Body>
        <CodeBlock
          label="Prompt example"
          code={`Add rate limiting to /api/contact — max 5 requests per IP per hour.
Use an in-memory store for now, we can swap it for Redis later.
Don't change the response format, just return 429 if the limit is hit.`}
        />
      </section>

      {/* Integrations */}
      <section className="space-y-5">
        <SectionHeading>What it works well with</SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: SiNextdotjs, label: "Next.js", desc: "Understands App Router, server vs client, route conventions." },
            { icon: SiTypescript, label: "TypeScript", desc: "Reads types across the project, generates type-safe code." },
            { icon: SiGithub, label: "Git", desc: "Reads history, writes commits, helps with PRs and diffs." },
            { icon: SiDocker, label: "Docker", desc: "Reads Dockerfiles, writes compose configs, debugs builds." },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="brutal-border bg-[rgba(255,250,241,0.82)] p-4 space-y-2">
              <Icon className="text-2xl text-[var(--color-text)]" />
              <p className="text-sm font-black uppercase tracking-[0.08em] text-[var(--color-text)]">{label}</p>
              <p className="text-xs leading-5 text-[var(--color-muted)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="space-y-5">
        <SectionHeading>Tips that actually help</SectionHeading>
        <div className="space-y-3">
          {[
            { n: "01", tip: "Use CLAUDE.md", body: "Anything you'd tell a new developer joining the project goes here. Stack, conventions, where things live, what to avoid. It reads this every session." },
            { n: "02", tip: "Be specific about constraints", body: "\"Add pagination\" gets generic code. \"Add cursor-based pagination to /api/posts — the cursor should be the post ID, return 20 at a time, don't change the existing response envelope\" gets code that fits." },
            { n: "03", tip: "Use /compact when context fills up", body: "Long sessions accumulate context. When responses start degrading, /compact summarises the session and clears old tokens. You keep the context, lose the bloat." },
            { n: "04", tip: "Tell it what NOT to do", body: "\"Don't touch the database schema\", \"don't add new dependencies\", \"keep the existing error format\" — constraints prevent the kind of correct-but-wrong changes that break things downstream." },
            { n: "05", tip: "Review every file it touches", body: "Claude Code is fast. That means it can confidently go wrong fast too. The diff review step is not optional — it's the part where you stay in control of your own codebase." },
          ].map(({ n, tip, body }) => (
            <div key={n} className="shell p-5 grid gap-4 sm:grid-cols-[60px_1fr]">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{n}</span>
              <div>
                <p className="mb-1 text-sm font-black uppercase tracking-[0.1em] text-[var(--color-text)]">{tip}</p>
                <p className="text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest limitations */}
      <section className="space-y-5">
        <SectionHeading>Where it falls short</SectionHeading>
        <Body>
          Claude Code is not a replacement for knowing what you&apos;re building. It can hallucinate library APIs that don&apos;t exist, miss subtle business logic it has no context for, and lose coherence on very large refactors spanning dozens of files. It moves fast, which means it can go wrong fast.
        </Body>
        <Body>
          The developers who get the most out of it are the ones who treat it as a fast executor of well-defined tasks — not a decision maker. You own the architecture, the tradeoffs, the review. Claude handles the mechanical work of getting from decision to code.
        </Body>
      </section>

      {/* Closing callout */}
      <Callout>
        Claude Code doesn&apos;t make coding easier by knowing more than you. It makes it faster by removing the friction between knowing what you want and having code that does it. The loop of read → think → write → test → fix is compressed. What you do with that time is still on you.
      </Callout>

      {/* WhatsApp CTA */}
      <div className="shell brutal-shadow p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-muted)]">Need help with your project?</p>
          <p className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)]">
            Want something built? Let&apos;s talk.
          </p>
          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
            Full-stack builds, web apps, extensions — available now.
          </p>
        </div>
        <a
          href="https://wa.me/962797205018"
          target="_blank"
          rel="noreferrer"
          className="brutal-border brutal-shadow flex shrink-0 items-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <SiClaude className="text-lg" />
          Message on WhatsApp →
        </a>
      </div>

    </article>
  );
}
