'use client';

import { Loader2 } from 'lucide-react';

interface LoaderProps {
  message?: string;
}

export function Loader({ message = 'Loading...' }: LoaderProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-3 py-12">
      <Loader2 className="size-6 animate-spin text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
