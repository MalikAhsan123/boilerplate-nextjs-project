'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { APP_NAME, NAV_ITEMS } from '@/config';
import { removeAccessTokenCookie } from '@/lib/auth/clientCookies';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLogoutMutation } from '@/store/api/authApi';
import { baseApi } from '@/store/api/baseApi';
import { logout, selectAuthUser } from '@/store/slices/authSlice';
import { cn } from '@/utils/cn';
import { toast } from '@/lib/toast';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAuthUser);
  const [logoutRequest, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutRequest().unwrap();
    } catch {
      toast.error('Failed to logout');
    }

    removeAccessTokenCookie();
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    router.replace('/login');
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="sm:hidden" aria-label="Open menu" />
              }
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <SheetHeader>
                <SheetTitle>{APP_NAME}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                  const isActive = pathname === href || pathname.startsWith(`${href}/`);

                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center gap-2 rounded-lg px-3 py-2 text-sm no-underline transition-colors',
                        isActive
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )}
                    >
                      <Icon size={16} />
                      {label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href={NAV_ITEMS[0]?.href ?? '/dashboard'} className="text-lg font-bold no-underline">
            {APP_NAME}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {isClient && user ? (
            <span className="hidden text-sm text-muted-foreground sm:inline">{user.email}</span>
          ) : null}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            loading={isLoggingOut}
            className="gap-2"
          >
            <LogOut size={16} />
            Sign out
          </Button>
        </div>
      </div>
    </header>
  );
}
