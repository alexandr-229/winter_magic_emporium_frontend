import { Product } from '@/app/types';
import { url } from '@/helpers/api';
import axios from 'axios';

export const getProduct = async (id: string) => {
  const { data } = await axios.get<Product | null>(url.product.product(id));
  return data;
};

export const getPopularProducts = async () => {
  const { data } = await axios.get<Product[]>(url.product.popular);
  return data;
};

export const getSimilarProducts = async (price: number, sizeUnit: string, sizeValue: number) => {
  const body = {
    price,
    sizeUnit,
    sizeValue,
  };

  const { data } = await axios.post<Product[]>(url.product.similar, body);
  return data;
};
