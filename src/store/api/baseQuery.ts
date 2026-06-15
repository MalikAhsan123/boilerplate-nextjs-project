import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import { getAccessTokenCookie } from '@/lib/auth/clientCookies';

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? '/api',
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('Accept', 'application/json');

    const token = getAccessTokenCookie();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseQueryWithRetry = retry(rawBaseQuery, {
  maxRetries: 3,
});
