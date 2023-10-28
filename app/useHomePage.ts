'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { url } from '@/helpers/api';
import { TokenResponse, googleOauth } from '@/api/auth';
import { authModalStore } from '@/components/modals/auth/store';
import { ModalAlias } from '@/components/modals/auth/types';
import { GetProductsResponse, Product } from './types';

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

const { onOpenAuthModal, onCloseAuthModal } = authModalStore.getStore();

export const useHomePage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onSuccess = ({ accessToken }: TokenResponse) => {
    localStorage.setItem('access_token', accessToken);
  };

  const onMutate = () => {
    router.push(pathname);

    onCloseAuthModal();
  };

  const { mutate } = useMutation(
    (code: string) => googleOauth(code),
    { onSuccess, onMutate },
  );

  useEffect(() => {
    const googleCode = searchParams.get('code');

    if (googleCode) {
      onOpenAuthModal(ModalAlias.GOOGLE_LOADING);
      mutate(googleCode);
    }
  }, []);

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

  return {
    newError,
    newProducts,
    newLoading,
    promotionalError,
    promotionalProducts,
    promotionalLoading,
  };
};
