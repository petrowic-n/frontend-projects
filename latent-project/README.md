# LATENT

A landing page for a fictional analog photography studio, built to practice React fundamentals — components, props, and state — inside a real, polished UI rather than an isolated exercise.

Shoot on film, develop by hand, print in the enlarger room. LATENT runs five-week darkroom cohorts, and this is its marketing site: a hero countdown to the next session, a four-stage breakdown of the development process, and a flip-card glossary of darkroom terms.


project link: (https://latent-project-petrowic-n.netlify.app)

## Tech stack

| | |
|---|---|
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) |
| **Animation** | Framer Motion |
| **Fonts** | Fraunces (display/serif), Inter (body), JetBrains Mono (data/numeric) |

## Features

- **Live countdown timer** to the next cohort's start date, built as a custom `useCountdown` hook with per-digit tick animations
- **Interactive stepper** walking through the four stages of film development, with an animated progress line and cross-fading detail panel
- **Flip-card glossary** of darkroom terminology each card manages its own flip state independently
- Scroll-triggered reveal animations throughout, respecting `prefers-reduced-motion`
- Fully responsive layout, from mobile through desktop
- All copy and content centralized in plain JS data files no text hardcoded inside components

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Other scripts

```bash
npm run build      # production build, output to /dist
npm run preview    # preview the production build locally
```

## Project structure

```
src/
├── main.jsx                 # React entry point
├── App.jsx                  # Assembles all sections
├── index.css                # Tailwind theme + custom component classes
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CountdownTimer.jsx   # date counter
│   ├── About.jsx
│   ├── ProcessSection.jsx   # wraps Stepper
│   ├── Stepper.jsx          # step component
│   ├── GlossaryDeck.jsx     # wraps Flashcard grid
│   ├── Flashcard.jsx        # flashcard component
│   ├── CTASection.jsx
│   └── Footer.jsx
├── hooks/
│   └── useCountdown.js      # interval/cleanup logic for the countdown
└── data/
    ├── content.js           # nav, hero, about, cta, footer copy
    ├── steps.js              # the four development stages
    └── flashcards.js         # glossary terms
```

## Customization

All site copy lives in `src/data/`, so most changes don't require touching a component at all:

- **Rename or reword anything** (nav links, headings, button labels) → `src/data/content.js`
- **Change the countdown target** → `hero.countdown.targetDate` in `content.js`, as an ISO date string
- **Edit the process steps** → `src/data/steps.js`
- **Edit the glossary cards** → `src/data/flashcards.js`

Colors, fonts, and spacing tokens are defined once in `src/index.css` under the `@theme` block, and reused throughout via Tailwind utility classes (`bg-red`, `text-brass`, `font-display`, etc.) change a value there and it updates everywhere it's used.

## Notes on the component patterns

This project was built as an exercise in a few specific React concepts:

- **`Flashcard`** demonstrates that each rendered instance of a component owns its own state flipping one card in the grid has no effect on the others, even though they're all the same component with different props.
- **`Stepper`** keeps `activeStep` as local state and derives everything else (which circle is active/done, the progress bar width, which detail panel is shown) from that single value, rather than tracking multiple pieces of state that could fall out of sync.
- **`useCountdown`** separates the timing/interval logic from rendering the hook owns the `setInterval` and cleanup, and `CountdownTimer` is a plain function of whatever the hook returns.

## License

For personal/educational use.
