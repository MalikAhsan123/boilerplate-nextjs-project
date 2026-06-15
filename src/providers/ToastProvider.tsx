'use client';

import { ToastContainer } from 'react-toastify';

import type { ToastProviderProps } from '@/types';

import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
