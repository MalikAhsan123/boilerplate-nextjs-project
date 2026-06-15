export const ACCESS_TOKEN_COOKIE = 'accessToken';

export const AUTH_USER_STORAGE_KEY = 'auth_user';

export const AUTH_COOKIE_CLIENT_OPTIONS = {
  expires: 7,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'Lax' as const,
};
