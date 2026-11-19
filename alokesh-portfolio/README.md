# Alokesh Bhattacharya — portfolio

A React + Vite portfolio with a dedicated Diwali experience and distinct, calendar-driven visual themes for Indian festivals.

## Run locally

```powershell
npm install
npm run dev
```

Open the address printed by the server (`http://127.0.0.1:4173`). The app reads upcoming events from Google's public **Holidays in India** calendar. The server fetches and parses the public ICS feed so the browser does not need a Google API key or a cross-origin exception.

Build and run the production version:

```powershell
npm run build
npm start
```

## NOVA code-change assistant

NOVA is available from the floating button while the local development server is running. It creates a reviewable proposal and displays a diff; source files are changed only after you select **Approve & Apply**. Proposals expire after 10 minutes and are rejected if their source files changed in the meantime. Discarding a proposal makes no file changes. Source-editing routes are disabled in production.

To enable AI requests, open the ignored `.env` file in this folder and set your provider configuration. `.env.example` shows the required format. Keep the API key in `.env` only; it is ignored by Git and must never be committed or added to frontend code:

```env
NOVA_API_BASE_URL=https://api.openai.com/v1
NOVA_API_KEY=your-provider-key
NOVA_MODEL=gpt-4.1-mini
```

Restart `npm run dev` after editing `.env`. The server loads it automatically; existing process environment variables take precedence. NOVA uses an OpenAI-compatible `/chat/completions` endpoint. Hosted endpoints must use HTTPS; HTTP is accepted only for a loopback/local model. The server sends the prompt, recent conversation, and a bounded selection of relevant portfolio source files to the configured provider. The API key remains server-side and is never returned to the browser. Do not send sensitive information in prompts. Local development is required for generating, applying, or discarding proposals.

The festival experience opens automatically from two days before a calendar event through the event date (India time). The next event can also be opened manually from the hero's festival card. Diwali has its own interactive JSX experience; other festivals have distinct layouts, artwork, palettes, and greetings. National/patriotic observances use a separate, quiet tricolour design with no cracker effects. Add `?festival-preview=1` to the URL to preview Diwali.

## Structure

- `src/components/Portfolio.jsx` — navigation and portfolio sections
- `src/components/AgentAssistant.jsx` and `src/assistant.css` — NOVA chat, proposal review, and floating assistant
- `src/components/AmbientCanvas.jsx` — interactive ambient particle field
- `src/components/DiwaliWebapp.jsx` — Diwali experience, fireworks, diya, palette and greeting controls
- `src/components/FestivalOverlay.jsx` and `FestivalArtwork.jsx` — festival-specific layouts, copy, and illustrations
- `src/components/PatrioticOverlay.jsx` — national and patriotic observance experience
- `public/company-logos/` — locally bundled real employer logo assets
- `src/data/profile.js` — editable profile, skills, projects, experience, and education
- `src/hooks/useIndianFestivals.js` — calendar loading and India-time festival window
- `server.mjs` — local/prod server, public Google Calendar ICS endpoint, and local-only NOVA proposal/apply API

Personal home address and phone details from the profile export are intentionally not displayed on the public-facing portfolio. The contact section uses email and LinkedIn instead.

Experience entries are grouped by employer with roles, dates, locations, and skills. Employer marks are local copies of the real logos, so the timeline does not call external image services at runtime. Sources: [Cognizant logo](https://commons.wikimedia.org/wiki/File:Cognizant_logo_2022.svg), [HLTHTek](https://hlthtek.com/images/B-T-HLTH.svg), [NICT](https://www.nictindia.com/Images/logo.jpg), and [Cricket Association of Bengal](https://www.cricketassociationofbengal.com/img/logo.png).

National observances and patriotic dates (including Independence Day, Republic Day, Netaji's birthday, Gandhi Jayanti, and Armed Forces observances) use a separate reflection layout without fireworks or festival effects.
