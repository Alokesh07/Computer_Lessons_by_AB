import { useCallback, useEffect, useState } from "react";
import AgentAssistant from "./components/AgentAssistant.jsx";
import AmbientCanvas from "./components/AmbientCanvas.jsx";
import DiwaliWebapp from "./components/DiwaliWebapp.jsx";
import FestivalOverlay, { getFestivalTheme } from "./components/FestivalOverlay.jsx";
import ObservanceOverlay from "./components/ObservanceOverlay.jsx";
import PatrioticOverlay from "./components/PatrioticOverlay.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { useIndianFestivals } from "./hooks/useIndianFestivals.js";
import { useReveal } from "./hooks/useReveal.js";

export default function App() {
  const { activeFestival, error, upcoming, status } = useIndianFestivals();
  const [festivalExperience, setFestivalExperience] = useState(null);
  useReveal();

  useEffect(() => {
    const scrollProgress = document.querySelector(".scroll-progress span");
    if (!scrollProgress) return undefined;

    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      scrollProgress.style.width = `${percentage}%`;
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (!activeFestival) return;
    const dismissalKey = `festival-overlay-dismissed:${activeFestival.id}`;
    if (sessionStorage.getItem(dismissalKey) !== "true") {
      setFestivalExperience(activeFestival);
    }
  }, [activeFestival]);

  const closeFestival = useCallback(() => {
    if (festivalExperience && activeFestival?.id === festivalExperience.id) {
      sessionStorage.setItem(`festival-overlay-dismissed:${festivalExperience.id}`, "true");
    }
    setFestivalExperience(null);
  }, [activeFestival, festivalExperience]);

  const festivalTheme = festivalExperience ? getFestivalTheme(festivalExperience.name) : null;

  const openFestival = useCallback(() => {
    const event = activeFestival || upcoming[0];
    if (event) setFestivalExperience(event);
  }, [activeFestival, upcoming]);

  return (
    <>
      <AmbientCanvas />
      <Portfolio
        festivalStatus={status}
        festivals={upcoming}
        onOpenFestival={openFestival}
      />
      {status === "error" && (
        <p className="calendar-error" role="status">
          Indian festival calendar could not sync: {error}
        </p>
      )}
      {festivalExperience && (festivalTheme === "diwali"
        ? <DiwaliWebapp event={festivalExperience} onClose={closeFestival} />
        : festivalTheme === "patriotic"
          ? <PatrioticOverlay event={festivalExperience} onClose={closeFestival} />
          : festivalTheme === "observance"
            ? <ObservanceOverlay event={festivalExperience} onClose={closeFestival} />
            : <FestivalOverlay event={festivalExperience} onClose={closeFestival} />)}
      <AgentAssistant />
    </>
  );
}
