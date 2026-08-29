# Tatiana Miroshina — Living System starter

This package contains two things:

1. A ready starting codebase for Codex / any coding agent.
2. A standalone prompt for Claude Design.

## Files to read first

- `BRAND.md` — positioning and brand logic
- `DESIGN_SYSTEM.md` — visual rules
- `CONTENT.md` — homepage content architecture
- `AGENTS.md` — Codex implementation constraints
- `CLAUDE_DESIGN_PROMPT.md` — copy/paste into Claude Design

## Run the starter locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## What is already implemented

- Next.js + TypeScript starter
- responsive homepage
- hero relationship map in SVG
- warm editorial color system
- desktop and mobile layouts
- restrained system-map animation
- reduced-motion support

## Contact configuration

Telegram and email are configured centrally in `config/contact.ts`. The contact page renders direct links only; there is no contact form or backend endpoint for personal data.

The current text is positioning copy, not final sales copy. It is deliberately usable but still designed to be refined after comparing the Claude and Codex visual directions.

## Recommended first Codex instruction

Read `BRAND.md`, `DESIGN_SYSTEM.md`, `CONTENT.md` and `AGENTS.md` before editing anything.

Run the project, inspect the homepage visually at desktop and mobile widths, then improve the implementation without changing the core concept.

Concentrate on:
- stronger editorial hierarchy
- more intentional spacing
- better system-map composition
- refined typography
- avoiding repetitive card layouts
- preserving asymmetry on mobile

Do not add generic SaaS/AI visual clichés.
