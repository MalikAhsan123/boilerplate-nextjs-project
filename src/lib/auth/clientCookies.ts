'use client';

import Cookies from 'js-cookie';

import { ACCESS_TOKEN_COOKIE, AUTH_COOKIE_CLIENT_OPTIONS } from '@/constants/auth';

export function setAccessTokenCookie(token: string) {
  Cookies.set(ACCESS_TOKEN_COOKIE, token, AUTH_COOKIE_CLIENT_OPTIONS);
}

export function getAccessTokenCookie() {
  return Cookies.get(ACCESS_TOKEN_COOKIE);
}

export function removeAccessTokenCookie() {
  Cookies.remove(ACCESS_TOKEN_COOKIE, { path: AUTH_COOKIE_CLIENT_OPTIONS.path });
}
