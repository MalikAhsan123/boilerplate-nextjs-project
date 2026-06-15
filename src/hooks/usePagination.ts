'use client';

import { useMemo, useState } from 'react';

import type { UsePaginationOptions } from '@/types';

export function usePagination({ initialPage = 1, pageSize = 10 }: UsePaginationOptions = {}) {
  const [page, setPage] = useState(initialPage);

  const pagination = useMemo(
    () => ({
      page,
      pageSize,
      offset: (page - 1) * pageSize,
      setPage,
      nextPage: () => setPage((current) => current + 1),
      prevPage: () => setPage((current) => Math.max(1, current - 1)),
      reset: () => setPage(initialPage),
    }),
    [page, pageSize, initialPage],
  );

  return pagination;
}
