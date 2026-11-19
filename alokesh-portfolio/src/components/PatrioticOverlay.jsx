import { useEffect, useState } from "react";
import { ArrowDownRight, Heart, X } from "lucide-react";

function getPatrioticCopy(name) {
  if (/netaji|subhas|parakram/i.test(name)) {
    return {
      eyebrow: "REMEMBERING NETAJI SUBHAS CHANDRA BOSE",
      title: <>Courage<br /><span>moves us.</span></>,
      message: "We honour the courage, conviction, and vision that helped shape India's freedom movement.",
      reflection: "Remembering Netaji's legacy with respect and gratitude."
    };
  }
  if (/shivaji/i.test(name)) {
    return {
      eyebrow: "REMEMBERING CHHATRAPATI SHIVAJI MAHARAJ",
      title: <>Courage<br /><span>with purpose.</span></>,
      message: "We honour a legacy of courage, leadership, and commitment to the people.",
      reflection: "Remembering Shivaji Maharaj's legacy with respect."
    };
  }
  if (/ambedkar/i.test(name)) {
    return {
      eyebrow: "HONOURING DR. B. R. AMBEDKAR",
      title: <>Justice is<br /><span>our promise.</span></>,
      message: "We honour a legacy of equality, learning, and the enduring promise of justice for all.",
      reflection: "Remembering Dr. Ambedkar's contribution with respect and gratitude."
    };
  }
  if (/rabindranath/i.test(name)) {
    return {
      eyebrow: "REMEMBERING RABINDRANATH TAGORE",
      title: <>A legacy<br /><span>of ideas.</span></>,
      message: "We celebrate a life of creativity, learning, and lasting contributions to India's cultural heritage.",
      reflection: "Remembering Tagore's cultural legacy with gratitude."
    };
  }
  if (/guru tegh|martyr/i.test(name)) {
    return {
      eyebrow: "REMEMBERING COURAGE AND SACRIFICE",
      title: <>Courage<br /><span>remembered.</span></>,
      message: "We honour a legacy of courage, conviction, and sacrifice in the service of others.",
      reflection: "Remembering the courage and sacrifice with respect."
    };
  }
  if (/independence|kargil|vijay diwas|army day|navy day|air force day|martyr|armed forces/i.test(name)) {
    return {
      eyebrow: "HONOURING INDIA'S FREEDOM AND SERVICE",
      title: <>Freedom is<br /><span>our promise.</span></>,
      message: "A moment to remember the people whose courage and service help protect India's freedom and future.",
      reflection: "We remember the courage and service behind our freedom."
    };
  }
  if (/gandhi/i.test(name)) {
    return {
      eyebrow: "REMEMBERING MAHATMA GANDHI",
      title: <>Strength in<br /><span>peace.</span></>,
      message: "We reflect on the enduring power of courage, service, and a commitment to peace.",
      reflection: "Remembering a legacy of courage, service, and peace."
    };
  }
  return {
    eyebrow: "A MOMENT OF NATIONAL REFLECTION",
    title: <>A promise<br /><span>we share.</span></>,
    message: "We honour the values, people, and shared responsibility that continue to shape India's future.",
    reflection: "Taking a moment to honour our shared values."
  };
}

function IndiaFlag() {
  return (
    <svg aria-hidden="true" className="patriotic-flag" viewBox="0 0 360 360">
      <circle className="patriotic-flag-orbit" cx="180" cy="180" r="155" />
      <path className="patriotic-flag-pole" d="M92 62v246" />
      <path className="patriotic-flag-saffron" d="M96 76h156l-18 37H96z" />
      <path className="patriotic-flag-white" d="M96 113h138l-18 37H96z" />
      <path className="patriotic-flag-green" d="M96 150h120l-18 37H96z" />
      <circle className="patriotic-flag-chakra" cx="172" cy="131" r="13" />
      {Array.from({ length: 12 }, (_, index) => (
        <path
          className="patriotic-flag-spoke"
          d="M172 119v24"
          key={index}
          transform={`rotate(${index * 30} 172 131)`}
        />
      ))}
      <path className="patriotic-flag-base" d="M77 308h34" />
      <circle className="patriotic-flag-star" cx="278" cy="95" r="2" />
      <circle className="patriotic-flag-star" cx="257" cy="244" r="2" />
      <circle className="patriotic-flag-star" cx="91" cy="225" r="2" />
    </svg>
  );
}

export default function PatrioticOverlay({ event, onClose }) {
  const [reflected, setReflected] = useState(false);
  const copy = getPatrioticCopy(event.name);
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
    <div aria-label={`${eventTitle} observance`} aria-modal="true" className="patriotic-overlay" role="dialog">
      <header className="patriotic-header">
        <a className="patriotic-wordmark" href="#home" onClick={onClose}><span>IN</span> INDIA, TOGETHER</a>
        <p><i /> MOMENT OF REMEMBRANCE <i /></p>
        <button aria-label="Close national observance" onClick={onClose} type="button"><X size={18} /><span>BACK</span></button>
      </header>
      <main className="patriotic-main">
        <section className="patriotic-copy">
          <p className="patriotic-date">{date}<span> / </span>{eventTitle}</p>
          <p className="patriotic-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="patriotic-message">{copy.message}</p>
          <button className="patriotic-reflect" onClick={() => setReflected(true)} type="button">
            <Heart size={16} fill={reflected ? "currentColor" : "none"} />
            {reflected ? "MOMENT OF REFLECTION HELD" : "TAKE A MOMENT TO REMEMBER"}
            <ArrowDownRight size={16} />
          </button>
          <p aria-live="polite" className="patriotic-response">{reflected ? copy.reflection : "No spectacle. Just a moment to honour the day."}</p>
        </section>
        <section aria-label="The Indian tricolour" className="patriotic-art">
          <span className="patriotic-art-index">01 / THE TRICOLOUR</span>
          <IndiaFlag />
          <p>COURAGE <i /> UNITY <i /> SERVICE</p>
          <span className="patriotic-art-caption">ONE NATION · MANY VOICES</span>
        </section>
      </main>
      <footer className="patriotic-footer">
        <span>WITH RESPECT FOR THE PEOPLE AND IDEALS THAT SHAPE INDIA.</span>
        <button onClick={onClose} type="button">RETURN TO PORTFOLIO <ArrowDownRight size={14} /></button>
      </footer>
    </div>
  );
}
