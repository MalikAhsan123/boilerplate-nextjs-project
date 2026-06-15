<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Agent rules — Company Next.js Boilerplate

This repo is an **internal company boilerplate**, not a one-off app. New projects clone it and customize config, then add features. Preserve patterns; do not reinvent architecture.

## Before coding

1. Read `docs/BOILERPLATE.md` for structure and feature workflow
2. Customize via `src/config.ts` — not hardcoded strings
3. Do not add domain/business logic to the boilerplate itself — add features in new modules when starting a project

## Architecture

```
app/ (routes) → components/pages/ (page UI) → store/api/ (RTK Query) → api/ (mock or real)
```

- **Routes** (`src/app/`): thin pages only
- **Page UI** (`src/components/pages/`): grouped by route area
- **Shared UI** (`src/components/ui/`, `components/common/`)
- **API layer** (`src/store/api/`): inject endpoints into `baseApi`

## Adding features

1. `src/store/api/<feature>Api/` + import in `src/store/index.ts`
2. `src/components/pages/...` + `src/app/(dashboard)/.../page.tsx`
3. `src/config.ts` for sidebar links

## Do not

- Create a `src/features/` folder (use existing `components/pages/` + `store/api/` layout)
- Add demo CRUD modules, mock data stores, or sample business domains to the boilerplate
- Add `'use client'` to pages unless hooks/events/Redux are required

## Commands

```bash
npm run dev          # development
npm run build        # production build
npm run lint         # ESLint
npm run test         # Vitest
npm run init:project -- "App Name"   # after clone
```
