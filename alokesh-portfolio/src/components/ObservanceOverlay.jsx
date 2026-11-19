import { useEffect } from "react";
import { ArrowDownRight, X } from "lucide-react";

function getObservanceCopy(name) {
  if (/good friday/i.test(name)) {
    return {
      eyebrow: "A DAY OF QUIET REFLECTION",
      title: <>A moment<br /><span>of hope.</span></>,
      message: "A quiet day for reflection, compassion, and hope.",
      motif: "cross",
      caption: "REFLECTION · COMPASSION · HOPE"
    };
  }
  if (/muharram|ashura/i.test(name)) {
    return {
      eyebrow: "A DAY OF REMEMBRANCE",
      title: <>Remembering<br /><span>with care.</span></>,
      message: "A respectful moment for remembrance, compassion, and reflection.",
      motif: "crescent",
      caption: "REMEMBRANCE · COMPASSION · PEACE"
    };
  }
  return {
    eyebrow: "A MOMENT TO PAUSE",
    title: <>A day for<br /><span>reflection.</span></>,
    message: "A quiet moment to reflect on the meaning of this day and the values it invites us to carry forward.",
    motif: "circle",
    caption: "REFLECTION · CARE · PEACE"
  };
}

function ObservanceMotif({ type }) {
  if (type === "cross") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="observance-orbit" cx="110" cy="110" r="77" />
        <path className="observance-cross" d="M110 57v104M78 91h64" />
        <path className="observance-horizon" d="M48 174q62-23 124 0" />
      </svg>
    );
  }
  if (type === "crescent") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="observance-orbit" cx="110" cy="110" r="77" />
        <path className="observance-crescent" d="M123 49a66 66 0 1 0 51 109 57 57 0 1 1-51-109Z" />
        <circle className="observance-star" cx="158" cy="66" r="4" />
        <circle className="observance-star" cx="70" cy="86" r="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 220" aria-hidden="true">
      <circle className="observance-orbit" cx="110" cy="110" r="77" />
      <circle className="observance-core" cx="110" cy="110" r="26" />
      <path className="observance-horizon" d="M52 157q58-31 116 0" />
    </svg>
  );
}

export default function ObservanceOverlay({ event, onClose }) {
  const copy = getObservanceCopy(event.name);
  const eventTitle = event.name.replaceAll("/", " / ");
  const date = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  }).format(new Date(`${event.date}T12:00:00+05:30`));

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(keyEvent) {
      if (keyEvent.key === "Escape") onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div aria-label={`${eventTitle} observance`} aria-modal="true" className={`observance-overlay observance-overlay--${copy.motif}`} role="dialog">
      <header className="observance-header">
        <a href="#home" onClick={onClose}>A QUIET MOMENT</a>
        <span>{date}</span>
        <button aria-label="Close observance" onClick={onClose} type="button"><X size={18} /></button>
      </header>
      <main className="observance-main">
        <section className="observance-copy">
          <p className="observance-event">{eventTitle}</p>
          <p className="observance-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="observance-message">{copy.message}</p>
        </section>
        <section aria-label={copy.caption} className="observance-art">
          <span className="observance-art-index">A MOMENT OF STILLNESS</span>
          <div className="observance-artwork"><ObservanceMotif type={copy.motif} /></div>
          <span className="observance-art-caption">{copy.caption}</span>
        </section>
      </main>
      <footer className="observance-footer">
        <span>HELD WITH RESPECT.</span>
        <button onClick={onClose} type="button">RETURN TO PORTFOLIO <ArrowDownRight size={14} /></button>
      </footer>
    </div>
  );
}
