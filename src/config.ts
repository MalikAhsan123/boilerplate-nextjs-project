import { LayoutDashboard, type LucideIcon } from 'lucide-react';

/** Customize when starting a new project. */
export const APP_NAME = 'Next.js Boilerplate';

export const APP_DESCRIPTION =
  'Production-ready Next.js boilerplate with Redux Toolkit, RTK Query, shadcn/ui, and modular architecture.';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
];
