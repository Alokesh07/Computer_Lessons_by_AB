import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Check, Copy, Moon, Pause, Play, Sparkles, Volume2, VolumeX, X } from "lucide-react";
import { CelebrationCanvas, Diya } from "./FestivalOverlay.jsx";

const palettes = ["festive", "cyber", "gold"];
const blessings = [
  "May the festival of lights fill your home with joy, peace, and prosperity.",
  "May every diya bring hope, warmth, and a beautiful new beginning.",
  "Wishing you a bright Diwali filled with laughter and togetherness."
];

function formatFestivalDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata"
  }).format(new Date(`${date}T12:00:00+05:30`));
}

function getFestivalCountdown(date) {
  const indiaDate = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
  const today = Date.parse(`${indiaDate}T00:00:00Z`);
  const festivalDay = Date.parse(`${date}T00:00:00Z`);
  const days = Math.max(0, Math.round((festivalDay - today) / 86400000));
  if (days === 0) return "FESTIVAL DAY";
  return `${days} ${days === 1 ? "DAY" : "DAYS"} TO DIWALI`;
}

export default function DiwaliWebapp({ event, onClose }) {
  const [autoShow, setAutoShow] = useState(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [paused, setPaused] = useState(false);
  const [sound, setSound] = useState(false);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [sparkCount, setSparkCount] = useState(0);
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [blessing, setBlessing] = useState(blessings[0]);
  const [wishOpen, setWishOpen] = useState(false);
  const [wishMessage, setWishMessage] = useState("");
  const actionRef = useRef(null);
  const soundContext = useRef(null);
  const wishDialog = useRef(null);
  const eventTitle = event.name.replaceAll("/", " / ");
  const greeting = `🪔 Happy Diwali, ${recipient.trim() || "Friend"}! 🪔\n\n${blessing}\n\nWarmest wishes,\n${sender.trim() || "A Well-Wisher"} ✨`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(keyEvent) {
      if (keyEvent.key === "Escape" && !wishDialog.current?.open) onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      soundContext.current?.close();
    };
  }, [onClose]);

  useEffect(() => {
    const dialog = wishDialog.current;
    if (wishOpen && dialog && !dialog.open) dialog.showModal();
    if (!wishOpen && dialog?.open) dialog.close();
  }, [wishOpen]);

  function celebrate() {
    if (paused) return;
    actionRef.current?.burst(window.innerWidth * 0.73, window.innerHeight * 0.55);
    actionRef.current?.launch();
    setSparkCount((count) => count + 1);
    if (sound && soundContext.current) {
      const context = soundContext.current;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(660, context.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1046, context.currentTime + 0.22);
      gain.gain.setValueAtTime(0.08, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.6);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.6);
    }
  }

  function toggleSound() {
    if (sound) {
      soundContext.current?.suspend();
      setSound(false);
      return;
    }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      setWishMessage("Audio is not supported in this browser.");
      return;
    }
    soundContext.current ||= new AudioContextClass();
    soundContext.current.resume().catch((error) => {
      setWishMessage(`Audio could not be enabled: ${error.message}`);
    });
    setSound(true);
  }

  async function copyGreeting() {
    try {
      await navigator.clipboard.writeText(greeting);
      setWishMessage("Greeting copied. It is ready to paste and share.");
    } catch (error) {
      setWishMessage("Copy is unavailable here. Select the greeting preview and copy it manually.");
      console.error("Could not copy the Diwali greeting:", error);
    }
  }

  async function shareGreeting() {
    if (!navigator.share) {
      await copyGreeting();
      return;
    }
    try {
      await navigator.share({ title: "Happy Diwali", text: greeting });
      setWishMessage("Your greeting was shared.");
    } catch (error) {
      if (error.name === "AbortError") {
        setWishMessage("Sharing cancelled.");
        return;
      }
      setWishMessage("Could not open the share options. Please copy the greeting instead.");
      console.error("Could not share the Diwali greeting:", error);
    }
  }

  return (
    <div className={`diwali-webapp festival-palette--${palettes[paletteIndex]}`} role="presentation">
      <CelebrationCanvas actionRef={actionRef} active={!paused} autoShow={autoShow} onSparkCount={setSparkCount} />
      <svg className="diwali-webapp-rangoli" viewBox="0 0 500 500" fill="none" aria-hidden="true">
        <circle cx="250" cy="250" r="230" /><circle cx="250" cy="250" r="180" />
        <circle cx="250" cy="250" r="120" /><polygon points="250,40 300,170 450,150 340,250 440,360 300,330 250,470 200,330 60,360 160,250 50,150 200,170" />
      </svg>
      <header className="diwali-webapp-header">
        <a className="diwali-webapp-brand" href="#home" onClick={onClose}><span><Sparkles size={18} /></span> ALOKESH<span>.DEV</span></a>
        <div className="diwali-webapp-header-actions">
          <span className="diwali-live"><i /> FESTIVAL MODE · INDIA</span>
          <button aria-label={`Change festival palette, current palette ${palettes[paletteIndex]}`} className="diwali-icon-button" onClick={() => setPaletteIndex((index) => (index + 1) % palettes.length)} type="button"><Sparkles size={16} /><span>PALETTE</span></button>
          <button aria-label="Close Diwali experience" className="diwali-icon-button" onClick={onClose} type="button"><X size={17} /><span>EXIT</span></button>
        </div>
      </header>
      <main className="diwali-webapp-main">
        <section className="diwali-copy">
          <p className="diwali-overline"><span>{getFestivalCountdown(event.date)}</span><i /> {formatFestivalDate(event.date)}</p>
          <p className="diwali-kicker">THE FESTIVAL OF LIGHTS</p>
          <h1>Happy<br /><span>Diwali.</span></h1>
          <p className="diwali-message">May the light you bring into the world shine back on you. Wishing you a bright, peaceful, and beautiful Diwali.</p>
          <div className="diwali-controls">
            <button className="diwali-primary-button" onClick={celebrate} type="button"><Sparkles size={16} /> LIGHT THE DIYA <ArrowDownRight size={16} /></button>
            <button aria-pressed={autoShow} className="diwali-secondary-button" onClick={() => setAutoShow((enabled) => !enabled)} type="button">AUTO SHOW {autoShow ? "ON" : "OFF"}</button>
            <button aria-pressed={paused} className="diwali-secondary-button" onClick={() => setPaused((stopped) => !stopped)} type="button">{paused ? <Play size={15} /> : <Pause size={15} />} {paused ? "RESUME" : "PAUSE"}</button>
            <button aria-pressed={sound} className="diwali-secondary-button" onClick={toggleSound} type="button">{sound ? <Volume2 size={15} /> : <VolumeX size={15} />} SOUND {sound ? "ON" : "OFF"}</button>
          </div>
          <div className="diwali-greeting-prompt">
            <div><span className="diwali-prompt-icon"><Moon size={16} /></span><span><strong>Share a little light</strong><small>Make a personal Diwali greeting.</small></span></div>
            <button onClick={() => { setWishMessage(""); setWishOpen(true); }} type="button">CREATE GREETING <ArrowDownRight size={14} /></button>
          </div>
        </section>
        <section className="diwali-art" aria-label="Interactive Diwali diya">
          <div className="diwali-art-top"><span>CELEBRATION ENGINE / 01</span><span>SPARKS {String(sparkCount).padStart(3, "0")}</span></div>
          <div className="diwali-art-ring diwali-art-ring--one" /><div className="diwali-art-ring diwali-art-ring--two" /><div className="diwali-art-ring diwali-art-ring--three" />
          <div className="diwali-art-cross diwali-art-cross--one">+</div><div className="diwali-art-cross diwali-art-cross--two">✦</div>
          <Diya onLight={celebrate} />
          <span className="diwali-art-caption">DIPAVALI / DEEPAVALI</span>
          <div className="diwali-art-bottom"><span>✦ {eventTitle} ✦</span><span>ALL SYSTEMS GLOWING</span></div>
        </section>
      </main>
      <footer className="diwali-webapp-footer"><span>A SMALL GREETING, A BRIGHT NEW BEGINNING.</span><button onClick={onClose} type="button">BACK TO PORTFOLIO <ArrowDownRight size={14} /></button></footer>
      <dialog aria-labelledby="diwali-dialog-title" className="diwali-wish-dialog" onClose={() => setWishOpen(false)} ref={wishDialog}>
        <div className="diwali-dialog-top"><div><p>MAKE IT PERSONAL</p><h2 id="diwali-dialog-title">Create a Diwali greeting</h2></div><button aria-label="Close greeting dialog" onClick={() => setWishOpen(false)} type="button"><X size={18} /></button></div>
        <label htmlFor="diwali-sender">YOUR NAME</label>
        <input autoComplete="name" id="diwali-sender" maxLength="60" onChange={(inputEvent) => setSender(inputEvent.target.value)} placeholder="A Well-Wisher" value={sender} />
        <label htmlFor="diwali-recipient">SEND TO</label>
        <input id="diwali-recipient" maxLength="60" onChange={(inputEvent) => setRecipient(inputEvent.target.value)} placeholder="Friend" value={recipient} />
        <label htmlFor="diwali-blessing">CHOOSE A BLESSING</label>
        <select id="diwali-blessing" onChange={(inputEvent) => setBlessing(inputEvent.target.value)} value={blessing}>
          {blessings.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <label htmlFor="diwali-greeting-preview">GREETING PREVIEW</label>
        <textarea id="diwali-greeting-preview" readOnly value={greeting} rows="5" />
        <div className="diwali-dialog-actions">
          <button className="diwali-primary-button" onClick={copyGreeting} type="button"><Copy size={15} /> COPY GREETING</button>
          <button className="diwali-secondary-button" onClick={shareGreeting} type="button"><Sparkles size={15} /> SHARE GREETING</button>
        </div>
        <p aria-live="polite" className="diwali-wish-status">{wishMessage || <><Check size={13} /> Your greeting stays in this browser.</>}</p>
      </dialog>
    </div>
  );
}
