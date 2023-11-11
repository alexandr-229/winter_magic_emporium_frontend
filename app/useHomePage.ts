'use client';

import { useQuery } from 'react-query';
import { getNewProducts, getPromotionalProducts } from '@/api/product';
import { useGoogleAuth } from './useGoogleAuth';

export const useHomePage = () => {
  const {
    data: promotionalProducts,
    isLoading: promotionalLoading,
    isError: promotionalError,
  } = useQuery('promotional', getPromotionalProducts, {
    retry: 1,
  });
  const {
    data: newProducts,
    isLoading: newLoading,
    isError: newError,
  } = useQuery('new', getNewProducts, {
    retry: 1,
  });

  useGoogleAuth();

  return {
    newError,
    newProducts,
    newLoading,
    promotionalError,
    promotionalProducts,
    promotionalLoading,
  };
};
