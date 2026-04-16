"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const TIME_SLOTS = ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00"];
const WA_NUMBER = "962797205018";
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

export function BookingWidget() {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [subject, setSubject] = useState("");

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const isPast = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isSelected = (day: number) =>
    !!selectedDate &&
    selectedDate.getFullYear() === viewYear &&
    selectedDate.getMonth() === viewMonth &&
    selectedDate.getDate() === day;

  const canBook = selectedDate && selectedTime && subject.trim().length > 0;

  const handleBook = () => {
    if (!canBook) return;
    const dateStr = selectedDate!.toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    const msg = `Booking request\n\nDate: ${dateStr}\nTime: ${selectedTime}\nSubject: ${subject.trim()}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

      {/* Calendar */}
      <div className="shell brutal-shadow p-6">
        <div className="mb-5 flex items-center justify-between">
          <button
            onClick={prevMonth}
            className="brutal-border bg-white px-3 py-1.5 text-sm font-black transition hover:bg-[var(--color-bg-soft)]"
          >
            ←
          </button>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text)]">
            {MONTHS[viewMonth]} {viewYear}
          </span>
          <button
            onClick={nextMonth}
            className="brutal-border bg-white px-3 py-1.5 text-sm font-black transition hover:bg-[var(--color-bg-soft)]"
          >
            →
          </button>
        </div>

        <div className="mb-2 grid grid-cols-7">
          {DAYS.map(d => (
            <div key={d} className="py-1 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              {d}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const past = isPast(day);
            const sel = isSelected(day);
            return (
              <button
                key={day}
                onClick={() => { if (!past) { setSelectedDate(new Date(viewYear, viewMonth, day)); setSelectedTime(null); } }}
                disabled={past}
                className={`aspect-square text-sm font-bold transition
                  ${past ? "cursor-not-allowed text-[var(--color-inactive)] opacity-30" : "brutal-border cursor-pointer hover:bg-[var(--color-bg-soft)]"}
                  ${sel ? "!bg-[var(--color-accent)] text-black brutal-border" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time + Subject + CTA */}
      <div className="flex flex-col gap-5">
        <div className="shell p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Time slot
          </p>
          <div className="grid grid-cols-2 gap-2">
            {TIME_SLOTS.map(slot => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`brutal-border py-2.5 text-sm font-black uppercase tracking-[0.1em] transition
                  ${selectedTime === slot
                    ? "bg-[var(--color-accent-strong)] text-black"
                    : "hover:bg-[var(--color-bg-soft)]"}
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="shell p-5">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
            Subject
          </p>
          <input
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Briefly describe the project"
            className="w-full brutal-border bg-[rgba(255,250,241,0.82)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:bg-white transition"
          />
        </div>

        <button
          onClick={handleBook}
          disabled={!canBook}
          className={`brutal-border w-full py-4 text-sm font-black uppercase tracking-[0.18em] transition
            ${canBook
              ? "bg-[#25D366] text-white brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
              : "cursor-not-allowed bg-[var(--color-bg-soft)] text-[var(--color-inactive)]"}
          `}
        >
          Book via WhatsApp →
        </button>

        {selectedDate && selectedTime && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)]"
          >
            {selectedDate.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })} · {selectedTime}
          </motion.p>
        )}
      </div>
    </div>
  );
}
