'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

import { makeStore } from '@/store';
import type { AppProviderProps, AppStore } from '@/types';

import { ToastProvider } from './ToastProvider';

export function AppProvider({ children }: AppProviderProps) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    setupListeners(storeRef.current.dispatch);
  }

  return (
    <Provider store={storeRef.current}>
      <ToastProvider>{children}</ToastProvider>
    </Provider>
  );
}
