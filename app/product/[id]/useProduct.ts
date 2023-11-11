'use client';

import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { getProduct, getSimilarProducts, getPopularProducts } from '@/api/product';

export const useProduct = () => {
  const { id } = useParams();
  const productId = !id || Array.isArray(id) ? '' : id;
  const {
    data: product,
    isError: productError,
    isLoading: productLoading,
  } = useQuery(id, () => getProduct(productId));
  const {
    data: similarProducts,
    isError: similarProductsError,
    isLoading: similarProductsLoading,
  } = useQuery(
    ['similar', product?.price, product?.size.unit, product?.size.value],
    () => getSimilarProducts(product?.price || 0, product?.size.unit || '', product?.size.value || 0),
  );
  const {
    data: popularProducts,
    isError: popularProductsError,
    isLoading: popularProductsLoading,
  } = useQuery('popular', getPopularProducts);

  return {
    product,
    productError,
    productLoading,
    popularProducts,
    popularProductsError,
    popularProductsLoading,
    similarProducts,
    similarProductsError,
    similarProductsLoading,
  };
};
