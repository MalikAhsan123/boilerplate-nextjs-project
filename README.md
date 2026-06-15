# Next.js Boilerplate

Company-internal starter for new frontend projects. Clone this repo, run `init:project`, then build your features on top of the included layout, state, and UI patterns.

## Tech stack

| Layer        | Tools                                   |
| ------------ | --------------------------------------- |
| Framework    | Next.js (App Router), React, TypeScript |
| State & data | Redux Toolkit, RTK Query                |
| UI           | shadcn/ui, Tailwind CSS, Lucide Icons   |
| Forms        | React Hook Form, Zod                    |
| Testing      | Vitest, Testing Library, MSW            |

## Project structure

```
src/
├── app/                         # Next.js App Router
│   └── (dashboard)/             # App shell (navbar, sidebar, footer)
├── components/
│   ├── common/                  # Navbar, Sidebar, Footer
│   ├── forms/                   # Reusable form components
│   ├── pages/                   # Page-level UI (grouped by route)
│   └── ui/                      # Design system primitives
├── config.ts                    # ★ Customize: name, description, sidebar
├── hooks/                       # Shared React hooks
├── lib/                         # Toast, utilities
├── providers/                   # AppProvider (Redux)
├── schemas/                     # Zod validation schemas
├── store/
│   ├── api/                     # RTK Query endpoints (inject into baseApi)
│   └── slices/                  # Redux slices
├── types/                       # Shared TypeScript types
└── utils/                       # Formatters, cn(), etc.
```

## Start a new project

```bash
# 1. Clone or copy this boilerplate
git clone <repo-url> my-new-app && cd my-new-app

# 2. Install dependencies
npm install

# 3. Set app name (updates package.json + src/config.ts)
npm run init:project -- "My App Name"

# 4. Environment
cp .env.example .env.local

# 5. Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the dashboard.

See [docs/BOILERPLATE.md](./docs/BOILERPLATE.md) for the full new-project checklist and feature guide.

## Scripts

| Command                  | Description                          |
| ------------------------ | ------------------------------------ |
| `npm run dev`            | Start dev server                     |
| `npm run build`          | Production build                     |
| `npm run start`          | Start production server              |
| `npm run lint`           | Run ESLint                           |
| `npm run lint:fix`       | Fix ESLint issues                    |
| `npm run format`         | Format with Prettier                 |
| `npm run format:check`   | Check Prettier formatting            |
| `npm run test`           | Run Vitest tests                     |
| `npm run test:watch`     | Run tests in watch mode              |
| `npm run init:project`   | Set app name after cloning           |

## Key patterns

### RTK Query

- `baseApi` in `src/store/api/baseApi.ts`
- Feature APIs use `injectEndpoints`
- Tag-based cache invalidation

### Forms

- React Hook Form + Zod resolvers
- Schemas in `src/schemas/`

### Server vs client

- Pages default to Server Components where possible
- `'use client'` only for hooks, events, Redux, and browser APIs

## Environment variables

| Variable              | Default | Description            |
| --------------------- | ------- | ---------------------- |
| `NEXT_PUBLIC_API_URL` | `/api`  | Base URL for RTK Query |

## License

Private — internal company boilerplate.
