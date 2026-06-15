import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithRetry } from '@/store/api/baseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: [],
  endpoints: () => ({}),
});
