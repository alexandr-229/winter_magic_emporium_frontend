'use client';

import { useState } from 'react';
import { Filters } from '@/components/large/Filters/types';
import { useQuery } from 'react-query';
import { getProducts } from '@/api/product';

const initialFilters: Filters = {
  orderKey: 'title',
  orderValue: 'asc',
};

export const useCatalog = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [page, setPage] = useState<number>(0);
  const {
    data,
    isLoading: loading,
    isError: error,
  } = useQuery(['products', filters, page], () => getProducts(filters, page + 1), { keepPreviousData: true });

  return {
    page,
    filters,
    loading,
    error,
    products: data?.data || [],
    totalPages: data?.pagination.pages || 1,
    setPage,
    setFilters,
  };
};
