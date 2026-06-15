# Boilerplate Guide

Step-by-step guide for starting a new project from this template.

## Quick checklist

After cloning, work through these in order:

- [ ] `npm install`
- [ ] `npm run init:project -- "Your App Name"`
- [ ] Copy `.env.example` → `.env.local`
- [ ] Edit `src/config.ts` (name, description, sidebar links)
- [ ] Add your routes under `src/app/`
- [ ] Connect real backend (see below)

## What stays vs what you add

| Keep (foundation)              | You add (your app)                         |
| ------------------------------ | ------------------------------------------ |
| `src/providers/`               | Feature routes under `src/app/`            |
| `src/store/api/baseApi.ts`     | RTK Query APIs in `src/store/api/`         |
| `src/components/ui/`           | Page UI in `src/components/pages/`         |
| `src/components/common/`       | Forms in `src/components/forms/`           |
| Layout shell (navbar, sidebar) | Zod schemas in `src/schemas/`              |

## Adding a new feature

Example: adding an "Orders" module.

### 1. Define the route

Add a page under `src/app/(dashboard)/` and a matching link in `src/config.ts`.

### 2. Add API endpoints

Define paths in your RTK Query API module (or a small constants file in that feature when you need shared paths).

```ts
// src/store/api/ordersApi/index.ts
const ORDERS = {
  LIST: '/orders',
  DETAIL: (id: string) => `/orders/${id}`,
} as const;
```

### 3. Create RTK Query API

```ts
// src/store/api/ordersApi/index.ts
import { baseApi } from '@/store/api/baseApi';

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query(/* ... */),
  }),
});

export const { useGetOrdersQuery } = ordersApi;
```

Register in `src/store/index.ts`:

```ts
import '@/store/api/ordersApi';
```

Add tag types in `baseApi.ts` when needed: `tagTypes: ['Orders']`.

### 4. Create page components

```
src/components/pages/dashboard/orders/
  orders-page-content/
  order-table/
```

### 5. Add App Router page

```tsx
// src/app/(dashboard)/orders/page.tsx
import { OrdersPageContent } from '@/components/pages/dashboard/orders/orders-page-content';

export default function OrdersPage() {
  return <OrdersPageContent />;
}
```

### 6. Add sidebar link

```ts
// src/config.ts
{ href: '/orders', label: 'Orders', icon: ShoppingCart },
```

## Connecting a real backend

1. Set `NEXT_PUBLIC_API_URL` in `.env.local` to your API base URL
2. Add RTK Query endpoints in `src/store/api/` for your API routes

## Folder conventions

| Folder                    | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| `src/app/`                | Routes only — thin pages, delegate to components |
| `src/components/pages/`   | Page-specific UI                             |
| `src/components/ui/`      | Reusable primitives (Button, Input, Modal)   |
| `src/components/forms/`   | Form components with validation              |
| `src/store/api/`          | One folder per API domain                    |
| `src/schemas/`            | Zod schemas shared by forms and API          |
| `src/types/`              | Shared TypeScript interfaces                 |

## Code style

- Server Components by default; `'use client'` only when needed
- Import alias: `@/` → `src/`
- Forms: React Hook Form + Zod
- State: RTK Query for server data, Redux slices for client-only state when needed
- UI: shadcn/ui components + Tailwind utility classes
