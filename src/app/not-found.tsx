import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="shell max-w-xl rounded-[2rem] p-8 text-center">
        <p className="eyebrow">404 / signal lost</p>
        <h1 className="pt-4 text-4xl font-semibold text-white">Project not found.</h1>
        <p className="pt-4 text-sm leading-7 text-[var(--color-muted)]">
          The route exists, but there is no case study mapped to it yet.
        </p>
        <div className="pt-8">
          <Link
            href="/work"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-[0.98]"
          >
            Return to work index
          </Link>
        </div>
      </div>
    </main>
  );
}
