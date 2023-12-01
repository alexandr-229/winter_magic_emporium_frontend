'use client';

import { useQuery } from 'react-query';

import { getFavoriteProducts } from '@/api/user';

export const useFavoriteGoods = () => {
  const { data, isLoading, isError } = useQuery('favorite', getFavoriteProducts);

  return {
    data,
    isError,
    isLoading,
  };
};
