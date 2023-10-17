'use client';

import axios from 'axios';
import { useState } from 'react';
import { Filters } from '@/components/large/Filters/types';
import { url } from '@/helpers/api';
import { useQuery } from 'react-query';
import { GetProductsResponse } from '../types';

const initialFilters: Filters = {
  orderKey: 'title',
  orderValue: 'asc',
};

const getProducts = async (filters: Filters, page: number) => {
  const { data } = await axios.post<GetProductsResponse>(url.product.all, {
    page,
    limit: 12,
    sort: [
      {
        key: filters.orderKey,
        value: filters.orderValue,
      },
    ],
  });

  return data;
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
