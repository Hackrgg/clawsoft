"use client";

import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";

type Severity = "low" | "medium" | "high";
type IncidentStatus = "investigating" | "identified" | "monitoring" | "resolved";

type Incident = {
  id: string;
  service: string;
  title: string;
  severity: Severity;
  status: IncidentStatus;
  region: "us-east" | "us-west" | "eu-central";
  startedAt: string;
  lastUpdateAt: string;
  summary: string;
};

const incidentsSeed: Incident[] = [
  {
    id: "INC-1042",
    service: "API Gateway",
    title: "Elevated 5xx on /v1/checkout",
    severity: "high",
    status: "monitoring",
    region: "us-west",
    startedAt: "Today 09:12",
    lastUpdateAt: "Today 10:03",
    summary:
      "A burst of 5xx responses affected a subset of payment attempts. Mitigation deployed (rate-limit + retry tuning). Monitoring error rate decay.",
  },
  {
    id: "INC-1038",
    service: "Realtime",
    title: "WebSocket reconnect storm",
    severity: "medium",
    status: "identified",
    region: "us-east",
    startedAt: "Today 08:11",
    lastUpdateAt: "Today 09:01",
    summary:
      "Clients are reconnecting aggressively after a short network event. Identified an exponential backoff regression in the latest build; patch rolling out.",
  },
  {
    id: "INC-1035",
    service: "Auth",
    title: "Login latency above SLO",
    severity: "medium",
    status: "investigating",
    region: "eu-central",
    startedAt: "Yesterday 18:42",
    lastUpdateAt: "Today 07:29",
    summary:
      "P95 login latency increased due to upstream token verification. Investigating cache hit rate and regional dependency health.",
  },
  {
    id: "INC-1033",
    service: "Storage",
    title: "Slow object listing on large buckets",
    severity: "low",
    status: "resolved",
    region: "us-east",
    startedAt: "Yesterday 15:05",
    lastUpdateAt: "Yesterday 16:10",
    summary:
      "Pagination query optimized; slow listings resolved. No further action required.",
  },
];

function badgeClass(severity: Severity) {
  switch (severity) {
    case "high":
      return "bg-[var(--color-accent)] text-black";
    case "medium":
      return "bg-[var(--color-accent-strong)] text-black";
    case "low":
      return "bg-[var(--color-teal)] text-black";
  }
}

function statusLabel(status: IncidentStatus) {
  switch (status) {
    case "investigating":
      return "Investigating";
    case "identified":
      return "Identified";
    case "monitoring":
      return "Monitoring";
    case "resolved":
      return "Resolved";
  }
}

export default function OpsDashboardDemo() {
  const [query, setQuery] = useState("");
  const [severity, setSeverity] = useState<Severity | "all">("all");
  const [region, setRegion] = useState<Incident["region"] | "all">("all");
  const [selectedId, setSelectedId] = useState<string>(incidentsSeed[0]?.id ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return incidentsSeed.filter((inc) => {
      const matchesQuery =
        q.length === 0 ||
        inc.id.toLowerCase().includes(q) ||
        inc.service.toLowerCase().includes(q) ||
        inc.title.toLowerCase().includes(q);
      const matchesSeverity = severity === "all" ? true : inc.severity === severity;
      const matchesRegion = region === "all" ? true : inc.region === region;
      return matchesQuery && matchesSeverity && matchesRegion;
    });
  }, [query, severity, region]);

  const selected = filtered.find((i) => i.id === selectedId) ?? filtered[0] ?? incidentsSeed[0];

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[var(--color-bg)] px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="brutal-border brutal-shadow bg-[var(--color-teal)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-black">
                Demo
              </span>
              <h1 className="mt-4 text-3xl font-black uppercase tracking-[-0.02em] text-[var(--color-text)] sm:text-4xl">
                Ops Dashboard
              </h1>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Incidents, status, and drill-down — a real SaaS surface (with safe demo data).
              </p>
            </div>

            <div className="brutal-border brutal-shadow bg-white p-3 w-full sm:w-[420px]">
              <div className="flex items-center gap-2">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search incidents, services, titles…"
                  className="w-full border-2 border-[#2c231c] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] outline-none"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as Severity | "all")}
                  className="w-full border-2 border-[#2c231c] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] outline-none"
                >
                  <option value="all">All severity</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value as Incident["region"] | "all")}
                  className="w-full border-2 border-[#2c231c] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] outline-none"
                >
                  <option value="all">All regions</option>
                  <option value="us-west">US West</option>
                  <option value="us-east">US East</option>
                  <option value="eu-central">EU Central</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.85fr]">
            <section className="brutal-border brutal-shadow panel-strong overflow-hidden">
              <div className="border-b-2 border-[#2c231c] px-5 py-4 flex items-center justify-between">
                <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Incidents</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Showing {filtered.length}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[rgba(44,35,28,0.06)]">
                      <th className="text-left px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Incident
                      </th>
                      <th className="text-left px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Service
                      </th>
                      <th className="text-left px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Status
                      </th>
                      <th className="text-left px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        Region
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((inc) => {
                      const active = inc.id === selected?.id;
                      return (
                        <tr
                          key={inc.id}
                          className={active ? "bg-white" : "bg-transparent"}
                          style={{ borderTop: "2px solid #2c231c" }}
                        >
                          <td className="px-5 py-4">
                            <button
                              type="button"
                              onClick={() => setSelectedId(inc.id)}
                              className="w-full text-left"
                            >
                              <div className="flex items-center gap-2">
                                <span className={`brutal-border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${badgeClass(inc.severity)}`}>
                                  {inc.severity}
                                </span>
                                <span className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">
                                  {inc.id}
                                </span>
                              </div>
                              <p className="mt-1 text-[13px] font-semibold text-[var(--color-text)]">{inc.title}</p>
                              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                                Started {inc.startedAt}
                              </p>
                            </button>
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{inc.service}</p>
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                              {statusLabel(inc.status)}
                            </p>
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                              Updated {inc.lastUpdateAt}
                            </p>
                          </td>
                          <td className="px-5 py-4">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-text)]">
                              {inc.region.replace("-", " ")}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="brutal-border brutal-shadow bg-white overflow-hidden h-fit">
              <div className="border-b-2 border-[#2c231c] px-5 py-4 flex items-center justify-between">
                <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">Details</p>
                {selected ? (
                  <span className={`brutal-border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${badgeClass(selected.severity)}`}>
                    {selected.severity}
                  </span>
                ) : null}
              </div>

              {selected ? (
                <div className="p-5">
                  <p className="font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{selected.id}</p>
                  <p className="mt-2 text-[15px] font-semibold text-[var(--color-text)]">{selected.title}</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="brutal-border bg-[rgba(246,239,227,0.75)] p-3">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">Service</p>
                      <p className="mt-1 font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{selected.service}</p>
                    </div>
                    <div className="brutal-border bg-[rgba(246,239,227,0.75)] p-3">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">Status</p>
                      <p className="mt-1 font-black uppercase tracking-[-0.01em] text-[var(--color-text)] text-sm">{statusLabel(selected.status)}</p>
                    </div>
                  </div>

                  <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Summary
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text)]">{selected.summary}</p>

                  <div className="mt-5 brutal-border bg-[rgba(44,35,28,0.04)] p-3">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      Action
                    </p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-text)]">
                      This demo simulates a real ops workflow. In production, actions here could page on-call, annotate
                      incidents, and update status pages.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Select an incident to view details.
                  </p>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

