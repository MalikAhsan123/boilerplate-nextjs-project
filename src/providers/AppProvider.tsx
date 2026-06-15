'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';

import { makeStore, type AppStore } from '@/store';

import { ToastProvider } from './ToastProvider';

interface AppProviderProps {
  children: React.ReactNode;
}

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
