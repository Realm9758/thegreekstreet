"use client";

import { useEffect, useState } from "react";
import { business } from "@/content/site";

interface Status {
  isOpen: boolean;
  label: string;
}

function getLondonStatus(): Status {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const day = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const now = hour * 60 + minute;
  const period = business.openingHours.find((entry) => entry.day === day);

  if (!period?.opens || !period.closes) {
    return { isOpen: false, label: "Closed today" };
  }

  const [openHour, openMinute] = period.opens.split(":").map(Number);
  const [closeHour, closeMinute] = period.closes.split(":").map(Number);
  const opens = openHour * 60 + openMinute;
  const closes = closeHour * 60 + closeMinute;

  if (now >= opens && now < closes) {
    return { isOpen: true, label: `Open now · until ${period.closes}` };
  }

  if (now < opens) {
    return { isOpen: false, label: `Opens today at ${period.opens}` };
  }

  return { isOpen: false, label: "Closed for today" };
}

export default function OpenStatus({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    setStatus(getLondonStatus());
    const timer = window.setInterval(() => setStatus(getLondonStatus()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className={`open-status${compact ? " open-status--compact" : ""}`}>
      <span
        className={`open-status__dot${status?.isOpen ? " open-status__dot--open" : ""}`}
        aria-hidden="true"
      />
      {status?.label ?? "View today’s hours"}
    </span>
  );
}
