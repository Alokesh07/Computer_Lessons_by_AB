const artworkLabels = {
  holi: "COLOURS · JOY · TOGETHER",
  eid: "PEACE · GRATITUDE · TOGETHER",
  winter: "WARM WISHES · BRIGHT DAYS",
  chhath: "SUN · WATER · GRATITUDE",
  durga: "COURAGE · RENEWAL · JOY",
  onam: "Pookalam · Abundance · Together",
  pongal: "HARVEST · SUNSHINE · THANKS",
  ganesh: "NEW BEGINNINGS · WISDOM",
  lohri: "HARVEST · FIRE · COMMUNITY",
  vasant: "SPRING · LEARNING · RENEWAL",
  buddha: "PEACE · WISDOM · COMPASSION",
  shivratri: "DEVOTION · STILLNESS · RENEWAL",
  janmashtami: "JOY · DEVOTION · PLAY",
  raksha: "CARE · TRUST · CONNECTION",
  sikh: "SERVICE · EQUALITY · COURAGE",
  regional: "RENEWAL · ABUNDANCE · TOGETHER",
  holika: "HOPE · RENEWAL · JOY",
  rama: "COURAGE · KINDNESS · DUTY",
  rath: "DEVOTION · COMMUNITY · JOY",
  mahavir: "AHIMSA · COMPASSION · PEACE",
  karwa: "CARE · TRUST · TOGETHER",
  bhai: "FAMILY · CARE · CONNECTION",
  govardhan: "NATURE · GRATITUDE · COMMUNITY",
  marigold: "LIGHT · JOY · TOGETHER"
};

function FestivalSymbol({ theme }) {
  if (theme === "holi") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="powder-cloud powder-cloud--one" cx="70" cy="85" r="44" />
        <circle className="powder-cloud powder-cloud--two" cx="151" cy="83" r="39" />
        <circle className="powder-cloud powder-cloud--three" cx="112" cy="144" r="42" />
        <path d="M56 52c-9-17-1-28 8-29 12-1 16 15 8 27 16-6 28 2 25 12-4 12-20 8-29 1-3 15-17 20-23 11-7-10 2-20 11-22Z" />
        <path d="M154 38c-1-14 10-19 18-14 9 6 3 19-6 23 14 2 18 14 10 20-9 7-18-3-19-14-10 10-22 6-22-4 0-11 12-15 19-11Z" />
        <path d="M101 127c-12-13-6-25 4-27 12-2 17 13 10 24 15-8 27-1 25 9-2 12-18 10-28 4-1 15-14 22-21 13-8-9 0-20 10-23Z" />
        <circle className="festival-symbol-core" cx="111" cy="105" r="21" />
        <path className="festival-symbol-star" d="m111 91 4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" />
      </svg>
    );
  }

  if (theme === "eid") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <path className="festival-moon" d="M128 35a72 72 0 1 0 57 115 62 62 0 1 1-57-115Z" />
        <path className="festival-symbol-star" d="m157 52 5 13 14 1-11 9 4 14-12-8-12 8 4-14-11-9 14-1 5-13Z" />
        <g className="festival-lantern">
          <path d="M49 73h30l-4 8v46l-11 12-11-12V81l-4-8Z" />
          <path d="M58 67q6-10 12 0M55 91h18M57 116h14M64 139v13" />
          <circle cx="64" cy="158" r="4" />
        </g>
        <g className="festival-lantern festival-lantern--small">
          <path d="M153 112h25l-4 7v36l-9 10-9-10v-36l-3-7Z" />
          <path d="M160 107q5-8 10 0M158 128h15M164 165v10" />
        </g>
        <circle className="festival-symbol-core" cx="122" cy="119" r="3" />
      </svg>
    );
  }

  if (theme === "winter") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <path className="festival-symbol-star" d="m110 25 7 19 20 1-16 12 6 19-17-11-17 11 6-19-16-12 20-1 7-19Z" />
        <path className="winter-tree" d="m110 48-44 53h25l-32 39h35l-25 34h82l-25-34h35l-32-39h25L110 48Z" />
        <path className="winter-tree-base" d="M103 166h14v27h-14z" />
        <circle className="winter-ornament" cx="91" cy="109" r="4" />
        <circle className="winter-ornament" cx="129" cy="123" r="4" />
        <circle className="winter-ornament" cx="104" cy="145" r="4" />
        <circle className="winter-snow" cx="49" cy="66" r="3" />
        <circle className="winter-snow" cx="166" cy="86" r="3" />
        <circle className="winter-snow" cx="53" cy="158" r="2" />
        <circle className="winter-snow" cx="170" cy="171" r="2" />
      </svg>
    );
  }

  if (theme === "chhath") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-sun" cx="110" cy="87" r="31" />
        <path className="festival-sun-ray" d="M110 32v-14M110 156v-14M55 87H40M180 87h-15M71 48 61 38M159 136l-10-10M149 48l10-10M61 136l10-10" />
        <path className="festival-water" d="M36 143q18-12 37 0t37 0 37 0 37 0M28 161q20-12 40 0t40 0 40 0 40 0M42 179q16-10 32 0t32 0 32 0 32 0" />
        <path className="festival-offering" d="M77 130h66l-8 11H85l-8-11ZM94 120q16-19 32 0" />
      </svg>
    );
  }

  if (theme === "pongal") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-sun" cx="110" cy="65" r="27" />
        <path className="festival-sun-ray" d="M110 25V14M70 65H57M163 65h-13M82 37 73 28M147 37l9-9M82 93l-9 9M138 93l9 9" />
        <path className="festival-pot" d="M65 107h90l-8 68q-37 25-74 0l-8-68Z" />
        <path className="festival-pot-rim" d="M56 101h108v14H56z" />
        <path className="festival-pot-mark" d="M85 135q25 22 50 0M110 126v41M92 154h36" />
        <path className="festival-sugarcane" d="M57 125 43 90M163 125l14-35M43 90l-10-13M43 90l14-8M177 90l-10-13M177 90l10-8" />
      </svg>
    );
  }

  if (theme === "ganesh") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="108" r="73" />
        <text className="festival-om" x="110" y="126" textAnchor="middle">ॐ</text>
        <path className="festival-lotus" d="M110 164q-24-17-24-36 18 4 24 23 6-19 24-23 0 19-24 36ZM77 164q-17-12-18-28 14 3 20 18 2-15 15-20 1 15-17 30ZM143 164q17-12 18-28-14 3-20 18-2-15-15-20-1 15 17 30Z" />
      </svg>
    );
  }

  if (theme === "durga") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="106" r="73" />
        <path className="festival-trident" d="M110 54v111M110 76c-27 0-35-17-35-34 15 2 27 9 35 25 8-16 20-23 35-25 0 17-8 34-35 34ZM98 165h24M104 174h12" />
        <path className="festival-lotus" d="M110 196q-23-15-23-32 16 3 23 19 7-16 23-19 0 17-23 32ZM78 192q-14-10-15-24 12 3 17 16 2-13 13-17 1 13-15 25ZM142 192q14-10 15-24-12 3-17 16-2-13-13-17-1 13 15 25Z" />
      </svg>
    );
  }

  if (theme === "onam") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="88" />
        <circle className="onam-ring onam-ring--one" cx="110" cy="110" r="65" />
        <circle className="onam-ring onam-ring--two" cx="110" cy="110" r="48" />
        {Array.from({ length: 12 }, (_, index) => (
          <ellipse
            className={`onam-petal onam-petal--${index % 4}`}
            cx="110"
            cy="54"
            key={index}
            rx="10"
            ry="25"
            transform={`rotate(${index * 30} 110 110)`}
          />
        ))}
        <circle className="onam-center" cx="110" cy="110" r="20" />
        <circle className="onam-center-dot" cx="110" cy="110" r="6" />
      </svg>
    );
  }

  if (theme === "lohri") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="114" r="79" />
        <path className="festival-bonfire" d="M110 52c10 22 27 32 23 58-2 12-10 20-23 25-16-8-26-19-24-34 1-13 12-26 15-49 8 13 8 22 9 29 9-9 10-17 10-29Z" />
        <path className="festival-bonfire-core" d="M110 92c8 12 12 19 8 30-2 5-5 8-8 10-8-5-11-11-9-18 1-6 7-12 9-22Z" />
        <path className="festival-log" d="m75 151 70 27M145 151l-70 27" />
        <circle className="festival-ember" cx="70" cy="95" r="3" /><circle className="festival-ember" cx="153" cy="78" r="2" /><circle className="festival-ember" cx="159" cy="126" r="3" />
      </svg>
    );
  }

  if (theme === "vasant") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="festival-kite" d="m110 48 52 54-52 70-52-70 52-52Z" />
        <path className="festival-kite-string" d="m110 48 0 124m-52-70 104 0m-52 0q-17 13-7 25 10 10-2 23" />
        <path className="festival-kite-tail" d="m108 166-9 12 13 7-10 14" />
        <path className="festival-kite-bow" d="m104 177 9 5m-8 8 9 5" />
        <circle className="festival-spring-dot" cx="53" cy="71" r="3" /><circle className="festival-spring-dot" cx="171" cy="144" r="3" /><circle className="festival-spring-dot" cx="62" cy="163" r="2" />
      </svg>
    );
  }

  if (theme === "buddha") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="103" r="69" />
        <circle className="buddha-wheel" cx="110" cy="100" r="35" />
        <circle className="buddha-wheel" cx="110" cy="100" r="7" />
        {Array.from({ length: 8 }, (_, index) => (
          <path className="buddha-spoke" d="M110 65v70" key={index} transform={`rotate(${index * 45} 110 100)`} />
        ))}
        <path className="festival-lotus" d="M110 184q-27-16-26-36 18 3 26 22 8-19 26-22 1 20-26 36ZM75 180q-17-11-17-26 14 2 20 17 3-14 16-18 2 14-19 27ZM145 180q17-11 17-26-14 2-20 17-3-14-16-18-2 14 19 27Z" />
      </svg>
    );
  }

  if (theme === "shivratri") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="77" />
        <path className="festival-trident" d="M110 40v77M110 64c-23 0-31-15-31-29 14 2 24 8 31 22 7-14 17-20 31-22 0 14-8 29-31 29ZM100 117h20M104 125h12" />
        <path className="shivling" d="M91 143q0-18 19-25 19 7 19 25v8H91v-8ZM71 155h78q-3 15-39 18-36-3-39-18Z" />
        <path className="shiv-water" d="M73 187q18-8 37 0t37 0" />
        <circle className="festival-spring-dot" cx="64" cy="88" r="3" /><circle className="festival-spring-dot" cx="157" cy="94" r="3" />
      </svg>
    );
  }

  if (theme === "janmashtami") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="festival-flute" d="m67 149 83-83" />
        <path className="festival-flute-hole" d="m94 127 8 8m7-23 8 8m7-23 8 8m-52 29 7 7" />
        <path className="festival-peacock" d="M134 75q-19-22 1-36 16 15 4 33 17-17 32-2-5 21-29 13-1 14-14 22" />
        <circle className="festival-peacock-eye" cx="152" cy="50" r="4" />
        <path className="festival-makhan-pot" d="M75 162h70q-5 28-35 31-30-3-35-31ZM68 157h84" />
        <circle className="makhan-dot" cx="105" cy="150" r="4" /><circle className="makhan-dot" cx="119" cy="146" r="3" />
      </svg>
    );
  }

  if (theme === "raksha") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="rakhi-thread" d="M32 110h49m58 0h49" />
        <circle className="rakhi-medallion" cx="110" cy="110" r="30" />
        <circle className="rakhi-medallion-inner" cx="110" cy="110" r="18" />
        <path className="rakhi-star" d="m110 91 5 13 14 6-14 5-5 14-5-14-14-5 14-6 5-13Z" />
        <circle className="rakhi-bead" cx="62" cy="110" r="5" /><circle className="rakhi-bead" cx="158" cy="110" r="5" />
        <circle className="rakhi-bead" cx="45" cy="110" r="3" /><circle className="rakhi-bead" cx="175" cy="110" r="3" />
      </svg>
    );
  }

  if (theme === "sikh") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="77" />
        <text className="sikh-khanda" x="110" y="133" textAnchor="middle">☬</text>
      </svg>
    );
  }

  if (theme === "regional") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="79" />
        <path className="regional-rangoli" d="M110 46q18 24 0 44-18-20 0-44Zm0 84q18 20 0 44-18-24 0-44ZM46 110q24-18 44 0-20 18-44 0Zm84 0q20-18 44 0-24 18-44 0ZM65 65q31-3 31 28-28 0-31-28Zm59 59q31-3 31 28-28 0-31-28Zm31-59q-3 31-31 31 0-28 31-31Zm-90 59q-3 31-31 31 0-28 31-31Z" />
        <circle className="regional-center" cx="110" cy="110" r="16" />
        <path className="regional-leaf" d="M110 89q-13-19-30-14 3 19 30 14Zm0 42q13 19 30 14-3-19-30-14Z" />
      </svg>
    );
  }

  if (theme === "holika" || theme === "govardhan") {
    if (theme === "holika") {
      return (
        <svg viewBox="0 0 220 220" aria-hidden="true">
          <circle className="festival-symbol-halo" cx="110" cy="112" r="79" />
          <path className="holika-flame" d="M110 47c12 25 36 39 30 70-3 17-15 29-30 37-21-10-33-26-29-44 2-17 17-32 19-58 10 15 11 25 10 34 9-11 13-21 10-39Z" />
          <path className="holika-flame-core" d="M110 103q17 22 1 43-16-9-11-23 4-9 10-20Z" />
          <path className="festival-log" d="m75 157 70 27M145 157l-70 27" />
          <circle className="festival-ember" cx="63" cy="103" r="3" /><circle className="festival-ember" cx="157" cy="84" r="2" /><circle className="festival-ember" cx="162" cy="132" r="3" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="govardhan-hill" d="M36 151q19-42 45-31 27-52 57-23 23-22 48 54H36Z" />
        <path className="govardhan-ground" d="M41 154h138" />
        <circle className="govardhan-sun" cx="151" cy="70" r="14" />
        <path className="govardhan-cow" d="M65 137q1-14 18-14h20v22H67q-5-3-2-8Zm27-14-4-9m14 9 5-9m-29 31v8m19-8v8" />
        <circle className="govardhan-cow-eye" cx="98" cy="130" r="1.5" />
      </svg>
    );
  }

  if (theme === "rama") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="rama-bow" d="M68 55q91 55 0 110m0-110q-17 55 0 110" />
        <path className="rama-arrow" d="M69 110h96m0 0-17-10m17 10-17 10m-21-10 8-7m-8 7 8 7" />
        <path className="rama-string" d="M68 55q33 55 0 110" />
        <circle className="festival-symbol-star" cx="64" cy="110" r="4" />
      </svg>
    );
  }

  if (theme === "rath") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="79" />
        <path className="rath-canopy" d="M58 88q52-63 104 0H58Z" />
        <path className="rath-top" d="M110 43v45m-8-45h16" />
        <path className="rath-body" d="M64 91h92l-9 47H73l-9-47Z" />
        <path className="rath-decoration" d="M80 105v20m30-20v20m30-20v20M52 144h116" />
        <circle className="rath-wheel" cx="82" cy="153" r="11" /><circle className="rath-wheel" cx="138" cy="153" r="11" />
        <path className="rath-rope" d="M51 130 31 148m138-18 20 18" />
      </svg>
    );
  }

  if (theme === "mahavir") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="79" />
        <circle className="mahavir-wheel" cx="110" cy="111" r="51" />
        <circle className="mahavir-wheel" cx="110" cy="111" r="39" />
        {Array.from({ length: 12 }, (_, index) => (
          <path className="mahavir-spoke" d="M110 60v102" key={index} transform={`rotate(${index * 30} 110 111)`} />
        ))}
        <path className="mahavir-hand" d="M96 143v-37q0-6 5-6t5 6V85q0-6 5-6t5 6v21-13q0-6 5-6t5 6v17-8q0-6 5-6t5 6v19q0 26-21 31h-9q-13-5-20-20l-8-12q-3-6 2-8 4-2 8 4l8 9Z" />
        <text className="mahavir-peace" x="110" y="130" textAnchor="middle">अहिंसा</text>
      </svg>
    );
  }

  if (theme === "karwa") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <path className="festival-moon" d="M142 39a63 63 0 1 0 42 108 54 54 0 1 1-42-108Z" />
        <circle className="festival-symbol-halo" cx="110" cy="116" r="72" />
        <path className="karwa-pot" d="M83 112h54q-1 35-27 42-26-7-27-42ZM77 105h66v10H77z" />
        <path className="karwa-neck" d="M96 100V87h28v13" />
        <path className="karwa-decoration" d="M94 128q16 13 32 0m-16-9v26" />
        <path className="festival-symbol-star" d="m58 70 3 8 9 1-7 5 3 8-8-5-7 5 3-8-7-5 9-1 2-8Z" />
      </svg>
    );
  }

  if (theme === "bhai") {
    return (
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="festival-symbol-halo" cx="110" cy="110" r="78" />
        <path className="bhai-thread" d="M37 110h44m58 0h44" />
        <circle className="bhai-knot" cx="110" cy="110" r="31" />
        <circle className="bhai-knot-inner" cx="110" cy="110" r="19" />
        <path className="bhai-heart" d="M110 125s-17-10-17-21c0-9 12-13 17-3 5-10 17-6 17 3 0 11-17 21-17 21Z" />
        <circle className="bhai-bead" cx="68" cy="110" r="5" /><circle className="bhai-bead" cx="152" cy="110" r="5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 220" aria-hidden="true">
      <circle className="festival-symbol-halo" cx="110" cy="110" r="81" />
      <circle className="festival-petal festival-petal--one" cx="110" cy="54" r="28" />
      <circle className="festival-petal festival-petal--two" cx="159" cy="82" r="28" />
      <circle className="festival-petal festival-petal--three" cx="159" cy="138" r="28" />
      <circle className="festival-petal festival-petal--four" cx="110" cy="166" r="28" />
      <circle className="festival-petal festival-petal--five" cx="61" cy="138" r="28" />
      <circle className="festival-petal festival-petal--six" cx="61" cy="82" r="28" />
      <circle className="festival-symbol-core" cx="110" cy="110" r="24" />
      <path className="festival-symbol-star" d="m110 94 5 11 12 5-12 5-5 11-5-11-12-5 12-5 5-11Z" />
    </svg>
  );
}

export default function FestivalArtwork({ theme, onCelebrate }) {
  return (
    <button
      aria-label={`Celebrate ${artworkLabels[theme] || artworkLabels.marigold}`}
      className={`festival-symbol festival-symbol--${theme}`}
      onClick={onCelebrate}
      type="button"
    >
      <span className="festival-symbol-aura" />
      <FestivalSymbol theme={theme} />
      <span>{artworkLabels[theme] || artworkLabels.marigold}</span>
    </button>
  );
}
