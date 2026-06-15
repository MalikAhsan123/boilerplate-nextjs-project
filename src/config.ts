import { LayoutDashboard } from 'lucide-react';

import type { NavItem } from '@/types';

/** Customize when starting a new project. */
export const APP_NAME = 'Next.js Boilerplate';

export const APP_DESCRIPTION =
  'Production-ready Next.js boilerplate with Redux Toolkit, RTK Query, shadcn/ui, and modular architecture.';

export const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];
