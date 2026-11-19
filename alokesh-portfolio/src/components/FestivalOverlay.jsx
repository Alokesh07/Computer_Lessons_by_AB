import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Check, Copy, Pause, Play, Sparkles, Volume2, VolumeX, X } from "lucide-react";
import FestivalArtwork from "./FestivalArtwork.jsx";

const festivalCopy = {
  diwali: {
    kicker: "THE FESTIVAL OF LIGHTS",
    message: "May the light you bring into the world shine back on you. Wishing you a bright, peaceful, and beautiful Diwali.",
    action: "LIGHT THE DIYA",
    wishTitle: "SHARE A LITTLE LIGHT",
    wishHint: "A small greeting, a bright new beginning.",
    greeting: "May your days be bright with new beginnings.",
    artCaption: "DIPAVALI / DEEPAVALI"
  },
  holi: {
    kicker: "THE FESTIVAL OF COLOURS",
    message: "May Holi fill your days with colour, laughter, and the joy of celebrating together.",
    action: "CELEBRATE WITH COLOUR",
    wishTitle: "SHARE A SPLASH OF JOY",
    wishHint: "Send colourful wishes to someone you love.",
    greeting: "Wishing you colour, laughter, and togetherness.",
    artCaption: "COLOURS · JOY · TOGETHER"
  },
  eid: {
    kicker: "A CELEBRATION OF GRATITUDE",
    message: "Wishing you a peaceful Eid filled with generosity, gratitude, and meaningful time with loved ones.",
    action: "SEND AN EID WISH",
    wishTitle: "SHARE A FESTIVE GREETING",
    wishHint: "Send warm wishes of peace and abundance.",
    greeting: "May your celebration bring peace and abundance.",
    artCaption: "PEACE · GRATITUDE · TOGETHER"
  },
  winter: {
    kicker: "A SEASON OF WARMTH",
    message: "May the season bring you warmth, quiet moments of joy, and bright beginnings in the year ahead.",
    action: "SEND WARM WISHES",
    wishTitle: "SHARE A SEASONAL GREETING",
    wishHint: "Send a little warmth to someone dear.",
    greeting: "Wishing you warmth, joy, and bright days ahead.",
    artCaption: "WARM WISHES · BRIGHT DAYS"
  },
  chhath: {
    kicker: "A FESTIVAL OF GRATITUDE",
    message: "May Chhath bring harmony, strength, and gratitude for the light and life shared with family.",
    action: "CELEBRATE THE SUN",
    wishTitle: "SHARE A SUNLIT WISH",
    wishHint: "Send wishes for health, harmony, and happiness.",
    greeting: "Wishing you health, harmony, and abundant blessings.",
    artCaption: "SUN · WATER · GRATITUDE"
  },
  durga: {
    kicker: "A CELEBRATION OF COURAGE",
    message: "May Durga Puja bring renewal, courage, and joyful moments shared with your community.",
    action: "CELEBRATE TOGETHER",
    wishTitle: "SHARE A PUJA GREETING",
    wishHint: "Send wishes for joy, strength, and new beginnings.",
    greeting: "Wishing you joy, strength, and beautiful new beginnings.",
    artCaption: "COURAGE · RENEWAL · JOY"
  },
  onam: {
    kicker: "A HARVEST OF TOGETHERNESS",
    message: "May Onam bring abundance, cherished traditions, and the happiness of gathering together.",
    action: "SHARE THE JOY",
    wishTitle: "SHARE AN ONAM GREETING",
    wishHint: "Send warm wishes for a joyful Onam.",
    greeting: "Wishing you abundance, joy, and togetherness.",
    artCaption: "POOKALAM · ABUNDANCE · TOGETHER"
  },
  pongal: {
    kicker: "A HARVEST OF GRATITUDE",
    message: "May Pongal bring sunshine, a grateful heart, and a season of abundance for you and your family.",
    action: "CELEBRATE THE HARVEST",
    wishTitle: "SHARE A HARVEST WISH",
    wishHint: "Send wishes for abundance and a bright season.",
    greeting: "Wishing you sunshine, abundance, and a joyful harvest.",
    artCaption: "HARVEST · SUNSHINE · THANKS"
  },
  ganesh: {
    kicker: "A CELEBRATION OF NEW BEGINNINGS",
    message: "May this celebration bring wisdom, hope, and a clear path through every new beginning.",
    action: "CELEBRATE A NEW BEGINNING",
    wishTitle: "SHARE A BLESSING",
    wishHint: "Send wishes for wisdom and good beginnings.",
    greeting: "May wisdom and good fortune guide your new beginnings.",
    artCaption: "NEW BEGINNINGS · WISDOM"
  },
  lohri: {
    kicker: "A HARVEST CELEBRATION",
    message: "May Lohri bring warmth, gratitude, and joyful moments around the bonfire with family and friends.",
    action: "CELEBRATE THE SEASON",
    wishTitle: "SHARE A LOHRI GREETING",
    wishHint: "Send warm wishes for a bright harvest season.",
    greeting: "Wishing you warmth, happiness, and a bountiful harvest.",
    artCaption: "HARVEST · FIRE · COMMUNITY"
  },
  vasant: {
    kicker: "A CELEBRATION OF SPRING AND LEARNING",
    message: "May Vasant Panchami bring fresh inspiration, a love of learning, and the promise of spring.",
    action: "WELCOME THE SEASON",
    wishTitle: "SHARE A SPRING GREETING",
    wishHint: "Send wishes for inspiration and new growth.",
    greeting: "Wishing you inspiration, learning, and a bright spring.",
    artCaption: "SPRING · LEARNING · RENEWAL"
  },
  buddha: {
    kicker: "A DAY FOR REFLECTION",
    message: "May the day inspire compassion, mindfulness, and wisdom in our lives and communities.",
    action: "PAUSE AND REFLECT",
    wishTitle: "SHARE A THOUGHTFUL WISH",
    wishHint: "Send a wish for peace and compassion.",
    greeting: "Wishing you peace, wisdom, and compassion.",
    artCaption: "PEACE · WISDOM · COMPASSION"
  },
  shivratri: {
    kicker: "A NIGHT OF DEVOTION",
    message: "May Maha Shivratri bring a moment of stillness, reflection, and renewal.",
    action: "TAKE A MOMENT",
    wishTitle: "SHARE A SHIVRATRI WISH",
    wishHint: "Send peaceful wishes for reflection and renewal.",
    greeting: "Wishing you a peaceful night of reflection and renewal.",
    artCaption: "DEVOTION · STILLNESS · RENEWAL"
  },
  janmashtami: {
    kicker: "A CELEBRATION OF KRISHNA",
    message: "May Janmashtami bring joy, devotion, and a little more playfulness to the day.",
    action: "CELEBRATE THE JOY",
    wishTitle: "SHARE A JANMASHTAMI WISH",
    wishHint: "Send wishes for joy, devotion, and togetherness.",
    greeting: "Wishing you joy, devotion, and a beautiful celebration.",
    artCaption: "JOY · DEVOTION · PLAY"
  },
  raksha: {
    kicker: "A CELEBRATION OF CONNECTION",
    message: "A day to celebrate the care, trust, and lasting connections that bring people closer.",
    action: "CELEBRATE YOUR BOND",
    wishTitle: "SHARE A RAKHI GREETING",
    wishHint: "Send a note to someone who matters to you.",
    greeting: "Celebrating the care and connection you share.",
    artCaption: "CARE · TRUST · CONNECTION"
  },
  sikh: {
    kicker: "A CELEBRATION OF SERVICE",
    message: "May Gurpurab inspire reflection on service, equality, and compassion for all.",
    action: "SHARE A MOMENT OF GRATITUDE",
    wishTitle: "SHARE A GURPURAB GREETING",
    wishHint: "Send warm wishes for a day of service and peace.",
    greeting: "Wishing you a peaceful Gurpurab filled with service and compassion.",
    artCaption: "SERVICE · EQUALITY · COURAGE"
  },
  regional: {
    kicker: "A NEW SEASON, A NEW BEGINNING",
    message: "May the new season bring fresh hope, good fortune, and joyful moments shared with your community.",
    action: "WELCOME THE NEW SEASON",
    wishTitle: "SHARE A NEW YEAR GREETING",
    wishHint: "Send wishes for a bright and abundant year.",
    greeting: "Wishing you new beginnings, happiness, and abundance.",
    artCaption: "RENEWAL · ABUNDANCE · TOGETHER"
  },
  holika: {
    kicker: "THE NIGHT BEFORE HOLI",
    message: "May the bonfire mark the triumph of hope and make way for a joyful, colourful Holi.",
    action: "WELCOME THE SEASON",
    wishTitle: "SHARE A HOLI GREETING",
    wishHint: "Send good wishes for the celebration ahead.",
    greeting: "Wishing you hope, joy, and a colourful Holi.",
    artCaption: "HOPE · RENEWAL · JOY"
  },
  rama: {
    kicker: "A CELEBRATION OF DHARMA",
    message: "May Rama Navami inspire courage, kindness, and a steady commitment to what is right.",
    action: "SHARE A BLESSING",
    wishTitle: "SHARE A RAMA NAVAMI WISH",
    wishHint: "Send wishes for courage and kindness.",
    greeting: "Wishing you courage, kindness, and peace.",
    artCaption: "COURAGE · KINDNESS · DUTY"
  },
  rath: {
    kicker: "A CELEBRATION IN MOTION",
    message: "May Rath Yatra bring devotion, hope, and the joy of coming together in community.",
    action: "CELEBRATE TOGETHER",
    wishTitle: "SHARE A RATH YATRA WISH",
    wishHint: "Send wishes for a joyful celebration.",
    greeting: "Wishing you devotion, joy, and togetherness.",
    artCaption: "DEVOTION · COMMUNITY · JOY"
  },
  mahavir: {
    kicker: "A DAY FOR COMPASSION",
    message: "May Mahavir Jayanti inspire non-violence, compassion, and respect for every living being.",
    action: "PAUSE AND REFLECT",
    wishTitle: "SHARE A THOUGHTFUL WISH",
    wishHint: "Send a wish for compassion and peace.",
    greeting: "Wishing you peace, compassion, and kindness.",
    artCaption: "AHIMSA · COMPASSION · PEACE"
  },
  karwa: {
    kicker: "A TRADITION OF CARE",
    message: "A day to celebrate care, trust, and the bonds that bring people together.",
    action: "SEND A WARM WISH",
    wishTitle: "SHARE A KARWA CHAUTH WISH",
    wishHint: "Send a thoughtful note to someone dear.",
    greeting: "Wishing you care, happiness, and togetherness.",
    artCaption: "CARE · TRUST · TOGETHER"
  },
  bhai: {
    kicker: "CELEBRATING A SIBLING BOND",
    message: "A moment to celebrate the laughter, care, and connection shared between siblings.",
    action: "CELEBRATE YOUR BOND",
    wishTitle: "SHARE A BHAI DOOJ GREETING",
    wishHint: "Send a note to your sibling.",
    greeting: "Celebrating the care and laughter you share.",
    artCaption: "FAMILY · CARE · CONNECTION"
  },
  govardhan: {
    kicker: "A CELEBRATION OF NATURE",
    message: "May Govardhan Puja remind us of the value of nature, community, and gratitude.",
    action: "SHARE YOUR GRATITUDE",
    wishTitle: "SHARE A GOVARDHAN WISH",
    wishHint: "Send wishes for gratitude and abundance.",
    greeting: "Wishing you gratitude, abundance, and harmony with nature.",
    artCaption: "NATURE · GRATITUDE · COMMUNITY"
  },
  observance: {
    kicker: "A MOMENT TO PAUSE",
    message: "A quiet moment to reflect on the meaning of this day and the values it invites us to carry forward.",
    action: "TAKE A MOMENT",
    wishTitle: "SHARE A THOUGHTFUL NOTE",
    wishHint: "A quiet note of care and reflection.",
    greeting: "Wishing you a thoughtful and peaceful day.",
    artCaption: "REFLECTION · CARE · PEACE"
  },
  marigold: {
    kicker: "A MOMENT TO CELEBRATE",
    message: "Wishing you and your loved ones a wonderful celebration, filled with joy, gratitude, and good beginnings.",
    action: "CELEBRATE THIS MOMENT",
    wishTitle: "SHARE A FESTIVE GREETING",
    wishHint: "Send a warm greeting to someone you love.",
    greeting: "May this day bring new energy, joy, and good beginnings.",
    artCaption: "LIGHT · JOY · TOGETHER"
  },
  patriotic: {
    kicker: "A MOMENT TO HONOUR INDIA",
    message: "We honour the courage, service, and shared responsibility that shape India's freedom and future.",
    action: "TAKE A MOMENT TO REMEMBER",
    wishTitle: "SHARE A NOTE OF REMEMBRANCE",
    wishHint: "A quiet moment for the people and ideals we honour.",
    greeting: "With respect for the people and ideals that shape India.",
    artCaption: "COURAGE · UNITY · SERVICE"
  }
};

export function getFestivalTheme(name) {
  const themes = [
    [/independence|netaji|subhas|republic|gandhi jayanti|constitution|kargil|vijay diwas|army day|navy day|air force day|martyr|armed forces|parakram diwas|national youth day|flag day|national science day|national technology day|ambedkar jayanti|shivaji jayanti|rabindranath|birthday of rabindranath/i, "patriotic"],
    [/diwali|deepavali|naraka chaturdas/i, "diwali"],
    [/holika dahana/i, "holika"],
    [/holi|rangwali|dolyatra/i, "holi"],
    [/good friday|muharram|ashura/i, "observance"],
    [/eid|ramadan|ramzan|bakrid|jamat|hazarat|hazrat ali|milad/i, "eid"],
    [/christmas|new year/i, "winter"],
    [/chhat/i, "chhath"],
    [/durga|navratri|dussehra|maha saptami|maha ashtami|maha navami/i, "durga"],
    [/onam/i, "onam"],
    [/pongal|makar sankranti/i, "pongal"],
    [/ganesh|ganpati/i, "ganesh"],
    [/lohri/i, "lohri"],
    [/vasant panchami|basant panchami|saraswati puja/i, "vasant"],
    [/buddha purnima|buddha jayanti/i, "buddha"],
    [/maha shivaratri|maha shivratri|shivaratri|shivratri/i, "shivratri"],
    [/janmashtami|krishna/i, "janmashtami"],
    [/rama navami/i, "rama"],
    [/rath yatra/i, "rath"],
    [/mahavir/i, "mahavir"],
    [/raksha bandhan|rakhi/i, "raksha"],
    [/karaka chaturthi|karwa chauth/i, "karwa"],
    [/bhai duj|bhai dooj/i, "bhai"],
    [/govardhan/i, "govardhan"],
    [/guru nanak|guru gobind|guru govind|guru ravidas|gurpurab|vaisakhi/i, "sikh"],
    [/ugadi|gudi padwa|chaitra|cheti chand|vishu|mesadi|vaisakh|bihu|parsi new year/i, "regional"]
  ];
  return themes.find(([pattern]) => pattern.test(name))?.[1] || "observance";
}

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
  return `${days} ${days === 1 ? "DAY" : "DAYS"} TO FESTIVAL`;
}

export function CelebrationCanvas({ actionRef, active, autoShow, onSparkCount }) {
  const canvasRef = useRef(null);
  const stateRef = useRef({ particles: [], rockets: [], frame: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const state = stateRef.current;
    let width = 0;
    let height = 0;
    let last = 0;
    let autoElapsed = 0;
    let counterElapsed = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function burst(x = Math.random() * width, y = Math.random() * height * 0.55 + height * 0.08) {
      const colors = ["#8bffdf", "#d0ff81", "#ffcb75", "#d5a5ff", "#ff89b8"];
      const count = Math.min(64, 900 - state.particles.length);
      for (let index = 0; index < count; index++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.8 + 0.7;
        state.particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.01,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2 + 0.7
        });
      }
    }

    function launch() {
      if (state.rockets.length >= 5) return;
      state.rockets.push({
        x: Math.random() * width,
        y: height + 5,
        tx: Math.random() * width,
        ty: Math.random() * height * 0.45 + 40,
        speed: 5
      });
    }

    function render(time) {
      const delta = last ? Math.min(time - last, 45) : 16;
      last = time;
      autoElapsed += delta;
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      ctx.globalAlpha = 1;

      state.rockets.forEach((rocket, index) => {
        const angle = Math.atan2(rocket.ty - rocket.y, rocket.tx - rocket.x);
        const previousX = rocket.x;
        const previousY = rocket.y;
        rocket.x += Math.cos(angle) * rocket.speed;
        rocket.y += Math.sin(angle) * rocket.speed;
        ctx.strokeStyle = "#caff91";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(previousX, previousY);
        ctx.lineTo(rocket.x, rocket.y);
        ctx.stroke();
        if (Math.hypot(rocket.tx - rocket.x, rocket.ty - rocket.y) < 10) {
          state.rockets.splice(index, 1);
          burst(rocket.tx, rocket.ty);
        }
      });

      for (let index = state.particles.length - 1; index >= 0; index--) {
        const particle = state.particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.985;
        particle.vy = particle.vy * 0.985 + 0.025;
        particle.alpha -= particle.decay;
        ctx.globalAlpha = Math.max(particle.alpha, 0);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        if (particle.alpha <= 0) state.particles.splice(index, 1);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      counterElapsed += delta;
      if (counterElapsed > 200) {
        onSparkCount(state.particles.length);
        counterElapsed = 0;
      }
      if (autoShow && !reducedMotion && autoElapsed > 1100) {
        launch();
        autoElapsed = 0;
      }
      if (active) state.frame = requestAnimationFrame(render);
    }

    function handleClick(event) {
      burst(event.clientX, event.clientY);
    }

    resize();
    actionRef.current = { burst, launch };
    if (active) state.frame = requestAnimationFrame(render);
    canvas.addEventListener("pointerdown", handleClick);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(state.frame);
      actionRef.current = null;
      canvas.removeEventListener("pointerdown", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, [active, autoShow, onSparkCount]);

  return <canvas aria-label="Click to create a celebration burst" className="festival-canvas" ref={canvasRef} />;
}

export function Diya({ onLight }) {
  return (
    <button aria-label="Light the festival diya" className="festival-diya" onClick={onLight} type="button">
      <span className="diya-aura" />
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <defs>
          <radialGradient id="celebrationGlow"><stop stopColor="#e9ffad" /><stop offset=".55" stopColor="#c6ff6a" stopOpacity=".55" /><stop offset="1" stopColor="#c6ff6a" stopOpacity="0" /></radialGradient>
          <linearGradient id="celebrationFlame" x1="110" x2="110" y1="35" y2="124" gradientUnits="userSpaceOnUse"><stop stopColor="white" /><stop offset=".45" stopColor="#d7ff8a" /><stop offset="1" stopColor="#ffbf70" /></linearGradient>
          <linearGradient id="celebrationBowl" x1="38" x2="184" y1="139" y2="188" gradientUnits="userSpaceOnUse"><stop stopColor="#a94b92" /><stop offset=".5" stopColor="#d8ff8a" /><stop offset="1" stopColor="#7646ab" /></linearGradient>
        </defs>
        <ellipse className="flame-halo" cx="110" cy="82" fill="url(#celebrationGlow)" rx="44" ry="55" />
        <path className="flame-shape" d="M110 32c20 34 27 57 0 88-26-31-19-54 0-88Z" fill="url(#celebrationFlame)" />
        <path d="M110 55c11 19 13 34 0 52-13-18-11-33 0-52Z" fill="white" />
        <ellipse cx="110" cy="190" fill="#080b12" fillOpacity=".55" rx="77" ry="11" />
        <path d="M33 140c2 48 152 48 154 0-32 13-54 18-77 18s-45-5-77-18Z" fill="url(#celebrationBowl)" stroke="#d7ff8a" strokeWidth="2" />
        <path d="M53 154q57 25 114 0M69 168q41 16 82 0" fill="none" stroke="#a8f3ff" strokeDasharray="4 6" />
        <circle cx="110" cy="169" r="5" fill="#fff" />
      </svg>
      <span>CLICK TO IGNITE</span>
    </button>
  );
}

export default function FestivalOverlay({ event, onClose }) {
  const [autoShow, setAutoShow] = useState(
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [paused, setPaused] = useState(false);
  const [sound, setSound] = useState(false);
  const [sender, setSender] = useState("");
  const [sparkCount, setSparkCount] = useState(0);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const soundContext = useRef(null);
  const actionRef = useRef(null);
  const festivalTheme = getFestivalTheme(event.name);
  const eventTitle = event.name.replaceAll("/", " / ");
  const copy = festivalCopy[festivalTheme] || festivalCopy.marigold;

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
      soundContext.current?.close();
    };
  }, [onClose]);

  function celebrateFestival() {
    if (paused) return;
    actionRef.current?.burst(window.innerWidth * 0.73, window.innerHeight * 0.55);
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
    setSparkCount((count) => count + 1);
  }

  async function shareGreeting() {
    const greeting = `Wishing you a joyful ${eventTitle}! ${copy.greeting} — ${sender.trim() || "Alokesh"}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: eventTitle, text: greeting });
        setMessage("Greeting shared. Spread the light.");
      } else {
        await navigator.clipboard.writeText(greeting);
        setCopied(true);
        setMessage("Greeting copied to your clipboard.");
      }
    } catch (error) {
      if (error.name === "AbortError") return;
      setMessage("Clipboard/share is unavailable in this browser.");
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
      setMessage("Audio is not supported in this browser.");
      return;
    }
    soundContext.current ||= new AudioContextClass();
    soundContext.current.resume().catch(() => setMessage("Audio could not be enabled."));
    setSound(true);
  }

  return (
    <div className={`festival-overlay festival-overlay--${festivalTheme}`} role="presentation">
      <CelebrationCanvas actionRef={actionRef} active={!paused} autoShow={autoShow} onSparkCount={setSparkCount} />
    {festivalTheme === "diwali" && <div className="festival-rangoli" aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none"><circle cx="250" cy="250" r="230" /><circle cx="250" cy="250" r="180" /><circle cx="250" cy="250" r="120" /><polygon points="250,40 300,170 450,150 340,250 440,360 300,330 250,470 200,330 60,360 160,250 50,150 200,170" /></svg>
    </div>}
      <header className="festival-topbar">
        <a className="festival-brand" href="#home" onClick={onClose}><span><Sparkles size={17} /></span> ALOKESH<span className="festival-brand-dot">.DEV</span></a>
        <div className="festival-live"><span /> FESTIVAL MODE ACTIVE <i /> INDIA · {event.date}</div>
        <button aria-label="Close festival overlay" className="festival-close" onClick={onClose} type="button"><X size={19} /><span>EXIT EXPERIENCE</span></button>
      </header>
      <main className="festival-main">
        <section className="festival-copy">
          <p className="festival-overline"><span>{getFestivalCountdown(event.date)}</span><i /> {formatFestivalDate(event.date)}</p>
          <p className="festival-kicker">{copy.kicker}</p>
          <h1>{eventTitle.split(" ").map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}</h1>
          <p className="festival-message">{copy.message}</p>
          <div className="festival-interactions">
            <button className="festival-cta" onClick={celebrateFestival} type="button"><Sparkles size={16} /> {copy.action} <ArrowDownRight size={16} /></button>
            <button aria-pressed={autoShow} className="festival-control" onClick={() => setAutoShow(!autoShow)} type="button"><Sparkles size={15} /> AUTO SHOW {autoShow ? "ON" : "OFF"}</button>
            <button aria-pressed={paused} className="festival-control" onClick={() => setPaused(!paused)} type="button">{paused ? <Play size={15} /> : <Pause size={15} />} {paused ? "RESUME" : "PAUSE"}</button>
            <button aria-pressed={sound} className="festival-control" onClick={toggleSound} type="button">{sound ? <Volume2 size={15} /> : <VolumeX size={15} />} SOUND {sound ? "ON" : "OFF"}</button>
          </div>
          <div className="festival-wish-box">
            <label htmlFor="festival-sender">{copy.wishTitle}</label>
            <div><input id="festival-sender" maxLength="50" onChange={(inputEvent) => setSender(inputEvent.target.value)} placeholder="Your name" value={sender} /><button onClick={shareGreeting} type="button">{copied ? <Check size={15} /> : <Copy size={15} />} SHARE WISH</button></div>
            <p aria-live="polite">{message || copy.wishHint}</p>
          </div>
        </section>
        <section className={`festival-art festival-art--${festivalTheme}`} aria-label={`Interactive ${eventTitle} celebration`}>
          <div className="festival-art-top"><span>CELEBRATION ENGINE / 01</span><span>SPARKS {String(sparkCount).padStart(3, "0")}</span></div>
          <div className="festival-ring festival-ring-one" /><div className="festival-ring festival-ring-two" /><div className="festival-ring festival-ring-three" />
          <div className="festival-art-cross cross-a">+</div><div className="festival-art-cross cross-b">+</div>
          <FestivalArtwork onCelebrate={celebrateFestival} theme={festivalTheme} />
          <span className="festival-art-caption">{copy.artCaption}</span>
          <div className="festival-art-bottom"><span>✦ {event.name} ✦</span><span>ALL SYSTEMS GLOWING</span></div>
        </section>
      </main>
      <footer className="festival-footer"><span>THIS EXPERIENCE APPEARS TWO DAYS BEFORE THE FESTIVAL THROUGH FESTIVAL DAY.</span><button onClick={onClose} type="button">BACK TO PORTFOLIO <ArrowDownRight size={14} /></button></footer>
    </div>
  );
}
