'use client';

import { useQuery } from 'react-query';

import { getOrderHistory } from '@/api/user';

export const useOrderHistory = () => {
  const { data, isLoading, error } = useQuery('order-history', getOrderHistory);

  return {
    data,
    isLoading,
    error,
  };
};
