import { useEffect, useMemo, useState } from "react";

function indiaToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const read = (type) => parts.find((part) => part.type === type)?.value;
  return `${read("year")}-${read("month")}-${read("day")}`;
}

function festivalWindowStart(date) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day - 2)).toISOString().slice(0, 10);
}

export function useIndianFestivals() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadCalendar() {
      try {
        const response = await fetch("/api/indian-festivals", { signal: controller.signal });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.detail || result.error || "Festival calendar is unavailable.");
        }
        setEvents(result.events);
        setStatus("ready");
      } catch (calendarError) {
        if (calendarError.name === "AbortError") return;
        setError(calendarError.message || "Festival calendar is unavailable.");
        setStatus("error");
      }
    }

    loadCalendar();
    return () => controller.abort();
  }, []);

  const today = useMemo(indiaToday, []);
  const upcoming = useMemo(() => events.filter((event) => event.date >= today), [events, today]);
  const calendarFestival = useMemo(() => {
    const activeEvents = events.filter((event) => today >= festivalWindowStart(event.date) && today <= event.date);
    if (activeEvents.length === 0) return null;

    const activeDate = activeEvents[0].date;
    const sameDayEvents = activeEvents.filter((event) => event.date === activeDate);
    if (sameDayEvents.length === 1) return sameDayEvents[0];
    return {
      id: sameDayEvents.map((event) => event.id).join("|"),
      date: activeDate,
      name: sameDayEvents.map((event) => event.name).join(" · ")
    };
  },
    [events, today]
  );
  const activeFestival = useMemo(() => {
    if (new URLSearchParams(window.location.search).get("festival-preview") !== "1") {
      return calendarFestival;
    }
    return {
      id: "preview-diwali",
      date: today,
      name: "Diwali/Deepavali",
      preview: true
    };
  }, [calendarFestival, today]);

  return { activeFestival, error, events, upcoming, status, today };
}
