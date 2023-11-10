'use client';

import axios from 'axios';
import { useQuery } from 'react-query';
import { url } from '@/helpers/api';
import { GetProductsResponse, Product } from './types';
import { useGoogleAuth } from './useGoogleAuth';

const getPromotionalProducts = async () => {
  const { data } = await axios.get<GetProductsResponse>(url.product.promotional, {
    params: {
      limit: 5,
    },
  });

  return data.data;
};

const getNewProducts = async () => {
  const { data } = await axios.get<Product[]>(url.product.new, {
    params: {
      limit: 5,
    },
  });

  return data;
};

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
