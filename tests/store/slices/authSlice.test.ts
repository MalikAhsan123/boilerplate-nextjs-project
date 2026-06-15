import { beforeEach, describe, expect, it } from 'vitest';

import { AUTH_USER_STORAGE_KEY } from '@/constants/auth';
import { authSlice, logout, setCredentials } from '@/store/slices/authSlice';

const mockUser = {
  id: '1',
  email: 'user@example.com',
  name: 'user',
};

describe('authSlice', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('stores user credentials on login', () => {
    const state = authSlice.reducer(
      { user: null },
      setCredentials({
        token: 'mock-token',
        user: mockUser,
      }),
    );

    expect(state.user).toEqual(mockUser);
    expect(localStorage.getItem(AUTH_USER_STORAGE_KEY)).toBe(JSON.stringify(mockUser));
  });

  it('clears user on logout', () => {
    localStorage.setItem(AUTH_USER_STORAGE_KEY, JSON.stringify(mockUser));

    const state = authSlice.reducer({ user: mockUser }, logout());

    expect(state.user).toBeNull();
    expect(localStorage.getItem(AUTH_USER_STORAGE_KEY)).toBeNull();
  });
});
