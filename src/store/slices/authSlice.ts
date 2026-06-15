import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { AUTH_USER_STORAGE_KEY } from '@/constants/auth';
import type { AuthUser, LoginResponse } from '@/types/authTypes';

const getStoredUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;

  const user = localStorage.getItem(AUTH_USER_STORAGE_KEY);
  if (!user) return null;

  try {
    return JSON.parse(user) as AuthUser;
  } catch {
    return null;
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: getStoredUser(),
  },
  reducers: {
    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      state.user = action.payload.user;
      localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(AUTH_USER_STORAGE_KEY);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectAuthUser = (state: { auth: { user: AuthUser | null } }) => state.auth.user;
