import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './api/baseApi';
import { authSlice } from './slices/authSlice';

import '@/store/api/authApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authSlice.reducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  });
