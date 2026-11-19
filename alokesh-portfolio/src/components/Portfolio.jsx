import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Radio,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import { focusAreas, profile } from "../data/profile.js";

const navigation = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Stack", "#stack"],
  ["About", "#about"],
  ["Contact", "#contact"]
];

function SectionHeading({ index, title, caption }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-index">{index} / 05</span>
      <div>
        <p className="eyebrow">{caption}</p>
        <h2>{title}</h2>
      </div>
      <span className="section-heading-line" />
    </div>
  );
}

function Header({ theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Alokesh Bhattacharya, home">
        <span className="wordmark-icon"><Braces size={18} /></span>
        <span>alokesh<span className="wordmark-dot">.</span>dev</span>
      </a>
      <nav className={menuOpen ? "nav-links nav-links--open" : "nav-links"} aria-label="Main navigation">
        {navigation.map(([label, target], index) => (
          <a
            href={target}
            key={target}
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-number">0{index + 1}</span>{label}
          </a>
        ))}
      </nav>
      <div className="topbar-actions">
        <button className="theme-switch" onClick={onThemeChange} type="button" aria-label={`Current theme ${theme}, change theme`}>
          <span className="theme-switch-dot" />
          <span>{theme}</span>
        </button>
        <a className="topbar-contact" href="#contact">LET&apos;S TALK <ArrowUpRight size={14} /></a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Hero({ nextFestival, festivalStatus, onOpenFestival }) {
  return (
    <section className="hero-section page-width" id="home">
      <div className="hero-copy">
        <div className="availability-pill" data-reveal>
          <span className="availability-led" />
          SOFTWARE ENGINEER <span className="pill-divider">/</span> KOLKATA, IN
        </div>
        <p className="hero-pretitle" data-reveal>HELLO, I&apos;M ALOKESH</p>
        <h1 className="hero-title" data-reveal>
          I build <span>digital</span>
          <br />things that <span className="hero-title-outline">matter.</span>
        </h1>
        <p className="hero-description" data-reveal>{profile.summary}</p>
        <div className="hero-buttons" data-reveal>
          <a className="button button-primary" href="#work">EXPLORE MY WORK <ArrowDownRight size={16} /></a>
          <a className="button button-quiet" href="#contact"><span className="button-play">↗</span> LET&apos;S CONNECT</a>
        </div>
        <div className="hero-socials" data-reveal>
          <a aria-label="LinkedIn profile" href={profile.linkedIn} rel="noreferrer" target="_blank"><Linkedin size={16} /></a>
          <a aria-label="Email Alokesh" href={`mailto:${profile.email}`}><Mail size={16} /></a>
          <span className="social-line" />
          <span>OPEN TO BUILDING WHAT&apos;S NEXT</span>
        </div>
      </div>

      <div className="hero-visual" data-reveal>
        <div className="visual-topline"><span>FIG. 01 — SYSTEM ONLINE</span><span>22°36&apos;N / 88°22&apos;E</span></div>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-orbit orbit-three" />
        <div className="visual-crosshair crosshair-one">+</div>
        <div className="visual-crosshair crosshair-two">+</div>
        <div className="core-monogram">
          <span className="core-bracket">&lt;</span>
          <span>AB</span>
          <span className="core-bracket">/&gt;</span>
        </div>
        <div className="orbit-tag orbit-tag--top"><Code2 size={15} /> FULL STACK</div>
        <div className="orbit-tag orbit-tag--right"><Database size={15} /> SYSTEMS</div>
        <div className="orbit-tag orbit-tag--bottom"><Zap size={15} /> HUMAN FIRST</div>
        <div className="visual-bottomline"><span>ENGINEERED WITH INTENT</span><span>EST. 2003</span></div>
        <div className="visual-index">AB<span>_</span></div>
      </div>

      <div className="hero-bottom">
        <div className="hero-meta"><span className="meta-label">CURRENTLY</span><span>{profile.currentRole}</span></div>
        <a className="scroll-cue" href="#work">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        <button
          className={`festival-teaser ${festivalStatus === "error" ? "festival-teaser--error" : ""}`}
          onClick={onOpenFestival}
          type="button"
        >
          <span className="festival-teaser-icon"><Sparkles size={15} /></span>
          <span className="festival-teaser-text">
            <small>{festivalStatus === "loading" ? "SYNCING INDIA CALENDAR" : "INDIA FESTIVAL MODE"}</small>
            <strong>{nextFestival ? `${nextFestival.name} · ${nextFestival.date}` : festivalStatus === "error" ? "CALENDAR OFFLINE" : "NO UPCOMING DATES"}</strong>
          </span>
          <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

function SignalBar() {
  return (
    <div className="signal-bar" aria-label="Technologies and focus">
      <div className="signal-label"><span className="signal-live" /> SYSTEMS I WORK WITH</div>
      <div className="signal-track">
        <div className="signal-content">
          {[...profile.skills, ...profile.skills].map((skill, index) => (
            <span className="signal-item" key={`${skill.name}-${index}`}>
              <span className="signal-star">✳</span>{skill.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
      <div className="signal-freq">FREQ. 044.08</div>
    </div>
  );
}

function Projects({ onProjectOpen }) {
  return (
    <section className="content-section page-width" id="work">
      <SectionHeading index="01" title="Selected work." caption="THINGS I'VE HELPED MAKE" />
      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <article className={`project-card project-card--${index + 1}`} data-reveal key={project.number}>
            <div className="project-card-top">
              <span className="project-number">PROJECT / {project.number}</span>
              <span className="project-orbit"><ArrowUpRight size={18} /></span>
            </div>
            <div className="project-art" aria-hidden="true">
              {index === 0 && <div className="chat-art"><span>hey team 👋</span><strong>@everyone</strong><i>message delivered <Check size={12} /></i></div>}
              {index === 1 && <div className="sense-art"><div className="sense-orbit sense-orbit-a" /><div className="sense-orbit sense-orbit-b" /><Radio className="sense-icon" size={40} /><span className="sense-wave sense-wave-a" /><span className="sense-wave sense-wave-b" /></div>}
              {index === 2 && <div className="room-art"><div className="room-node node-a">ADMIN</div><div className="room-node node-b">FACULTY</div><div className="room-node node-c">ROOM 04</div><span className="room-line line-a" /><span className="room-line line-b" /></div>}
            </div>
            <div className="project-card-body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-card-bottom">
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <button aria-label={`Read about ${project.title}`} className="project-open" onClick={() => onProjectOpen(project)} type="button"><ArrowUpRight size={19} /></button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceLogo({ company, type }) {
  const logos = {
    cognizant: "/company-logos/cognizant.svg",
    hlthtek: "/company-logos/hlthtek.svg",
    nict: "/company-logos/nict.jpg",
    cricket: "/company-logos/cab.png"
  }[type];

  return (
    <span className={`experience-logo experience-logo--${type}`}>
      <img alt={`${company} logo`} src={logos} />
    </span>
  );
}

function Experience() {
  return (
    <section className="content-section experience-section page-width" id="experience">
      <SectionHeading index="02" title="The path so far." caption="BUILDING, LEARNING, REPEATING" />
      <div className="experience-layout">
        <div className="experience-intro" data-reveal>
          <p className="big-statement">Good work happens where <span>curiosity</span> meets craft.</p>
          <p>From enterprise software to teaching and national sport, every chapter shaped how I collaborate, solve problems, and keep moving forward.</p>
          <div className="experience-stat"><strong>04</strong><span>DIFFERENT WORLDS.<br />ONE BUILDER&apos;S MINDSET.</span></div>
        </div>
        <div className="timeline">
          {profile.experience.map((item, index) => (
            <article className="timeline-company" data-reveal key={item.company}>
              <span className="timeline-index">0{index + 1}</span>
              <span className="timeline-node" />
              <div className="timeline-company-main">
                <header className="experience-company">
                  <ExperienceLogo company={item.company} type={item.logo} />
                  <div>
                    <h3>{item.company}</h3>
                    <p>{item.employment}</p>
                    {item.workMode && <span className="experience-work-mode">{item.workMode}</span>}
                  </div>
                </header>
                <div className="timeline-roles">
                  {item.roles.map((role) => (
                    <section className="timeline-role" key={`${item.company}-${role.title}`}>
                      <span className="timeline-role-node" />
                      <div className="timeline-role-heading">
                        <h4>{role.title}</h4>
                        {role.current && <span className="experience-present">Present</span>}
                      </div>
                      <p className="timeline-role-dates">{role.dates} · {role.duration}</p>
                      <p className="timeline-role-location">{role.location}{role.workMode ? ` · ${role.workMode}` : ""}</p>
                      {role.description && <p className="timeline-description">{role.description}</p>}
                      {role.skills?.length > 0 && (
                        <div className="experience-skills">
                          <span className="experience-skills-icon" aria-hidden="true">◇</span>
                          {role.skills.map((skill) => <span key={skill}>{skill}</span>)}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { title: "BACKEND", icon: <Braces size={18} />, skills: profile.skills.filter((skill) => skill.group === "Backend") },
    { title: "FRONTEND", icon: <Layers3 size={18} />, skills: profile.skills.filter((skill) => skill.group === "Frontend") },
    { title: "DATA", icon: <Database size={18} />, skills: profile.skills.filter((skill) => skill.group === "Data") },
    { title: "EMERGING TECH", icon: <Radio size={18} />, skills: profile.skills.filter((skill) => skill.group === "IoT") }
  ];

  return (
    <section className="content-section skills-section page-width" id="stack">
      <SectionHeading index="03" title="My toolkit." caption="THE BUILDING BLOCKS" />
      <div className="skills-layout">
        <div className="skills-lede" data-reveal>
          <div className="skills-graphic"><span className="skills-graphic-ring" /><span className="skills-graphic-core"><Braces size={32} /></span><span className="skills-graphic-label">BUILD / LEARN / SHIP</span></div>
          <p>From the first API call to the final pixel, I like understanding how every layer connects.</p>
        </div>
        <div className="skills-groups">
          {groups.map((group, index) => (
            <article className="skill-group" data-reveal key={group.title}>
              <div className="skill-group-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <div className="skill-chips">{group.skills.map((skill) => <span key={skill.name}>{skill.name}</span>)}</div>
              <span className="skill-group-index">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-section about-section page-width" id="about">
      <SectionHeading index="04" title="More than the code." caption="A LITTLE CONTEXT" />
      <div className="about-layout">
        <div className="about-copy" data-reveal>
          <p className="about-quote">“Technology should feel <span>powerful</span> to build — and effortless to use.”</p>
          <p>{profile.about}</p>
          <div className="focus-list">
            {focusAreas.map((focus, index) => <span key={focus}><b>0{index + 1}</b>{focus}</span>)}
          </div>
        </div>
        <div className="about-side">
          <div className="education-card" data-reveal>
            <div className="about-card-heading"><GraduationCap size={17} /><span>EDUCATION</span></div>
            {profile.education.map((item) => (
              <div className="education-entry" key={item.school}>
                <h3>{item.school}</h3>
                <p>{item.course}</p>
                <time>{item.dates}</time>
              </div>
            ))}
          </div>
          <div className="cricket-card" data-reveal>
            <div className="cricket-symbol">XI</div>
            <div><p className="eyebrow">THE OTHER TEAM</p><h3>Cricket taught me the long game.</h3><p>National cricketer · Cricket Association of Bengal · 2013—2024</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `${formData.get("message")}\n\nFrom: ${formData.get("name")} (${formData.get("email")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner page-width">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">05 / YOUR MOVE</p>
          <h2>Have a good<br /><span>problem?</span></h2>
          <p>I&apos;m always up for building useful things with thoughtful people. Tell me what you&apos;re working on.</p>
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={16} /></a>
          <a className="linkedin-link" href={profile.linkedIn} rel="noreferrer" target="_blank"><Linkedin size={15} /> CONNECT ON LINKEDIN</a>
        </div>
        <form className="contact-form" data-reveal onSubmit={handleSubmit}>
          <div className="contact-form-top"><span>NEW MESSAGE</span><span><span className="availability-led" /> END-TO-END ENCRYPTED? NO. JUST HUMAN.</span></div>
          <label htmlFor="contact-name">YOUR NAME</label>
          <input autoComplete="name" id="contact-name" maxLength="80" name="name" placeholder="How should I address you?" required />
          <label htmlFor="contact-email">EMAIL ADDRESS</label>
          <input autoComplete="email" id="contact-email" name="email" placeholder="you@company.com" required type="email" />
          <label htmlFor="contact-message">WHAT ARE YOU BUILDING?</label>
          <textarea id="contact-message" maxLength="2000" name="message" placeholder="A product, an idea, a tricky problem..." required rows="4" />
          <button className="button button-primary contact-submit" type="submit">{submitted ? "OPENING YOUR EMAIL APP" : "SEND A SIGNAL"} <ArrowUpRight size={16} /></button>
          <p className="form-note">Your email app opens with the message ready to send. Nothing is stored on this site.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer page-width">
      <a className="wordmark" href="#home"><span className="wordmark-icon"><Braces size={17} /></span><span>alokesh<span className="wordmark-dot">.</span>dev</span></a>
      <p>BUILT WITH CURIOSITY IN KOLKATA <MapPin size={13} /></p>
      <a href="#home">BACK TO TOP <ChevronDown className="back-top-icon" size={14} /></a>
      <span>© {new Date().getFullYear()} ALOKESH BHATTACHARYA</span>
    </footer>
  );
}

function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div className="project-dialog-backdrop" onClick={onClose} role="presentation">
      <section
        aria-labelledby="project-dialog-title"
        aria-modal="true"
        className="project-dialog"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button aria-label="Close project details" autoFocus className="dialog-close" onClick={onClose} type="button"><X size={19} /></button>
        <p className="eyebrow">CASE STUDY / {project.number}</p>
        <h2 id="project-dialog-title">{project.title}</h2>
        <p>{project.detail}</p>
        <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="button button-primary" href="#contact" onClick={onClose}>DISCUSS A SIMILAR BUILD <ArrowUpRight size={15} /></a>
      </section>
    </div>
  );
}

export default function Portfolio({ festivals, festivalStatus, onOpenFestival }) {
  const [theme, setTheme] = useState("NEON");
  const [activeProject, setActiveProject] = useState(null);
  const themes = ["NEON", "ICE", "EMBER"];
  const nextTheme = () => setTheme((current) => themes[(themes.indexOf(current) + 1) % themes.length]);

  return (
    <div className={`portfolio theme-${theme.toLowerCase()}`}>
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <Header onThemeChange={nextTheme} theme={theme} />
      <main>
        <Hero
          festivalStatus={festivalStatus}
          nextFestival={festivals[0]}
          onOpenFestival={onOpenFestival}
        />
        <SignalBar />
        <Projects onProjectOpen={setActiveProject} />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <ProjectDialog onClose={() => setActiveProject(null)} project={activeProject} />
      <a className="floating-mail" aria-label="Email Alokesh" href={`mailto:${profile.email}`}><Mail size={17} /></a>
    </div>
  );
}
