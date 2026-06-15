'use client';

import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { LoaderProps } from '@/types';

export function Loader({ message = 'Loading...', className }: LoaderProps) {
  return (
    <div
      className={cn(
        'flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-3 py-12',
        className,
      )}
    >
      <Loader2 className="size-6 animate-spin text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
