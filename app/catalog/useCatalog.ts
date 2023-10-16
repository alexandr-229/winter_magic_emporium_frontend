'use client';

import { Filters } from '@/components/large/Filters/types';
import { useState } from 'react';

const initialFilters: Filters = {
  orderKey: 'title',
  orderValue: 'asc',
};

export const useCatalog = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [page, setPage] = useState<number>(1);

  return {
    page,
    filters,
    setPage,
    setFilters,
  };
};
