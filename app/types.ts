import { ProductTag } from '@/components/large/Slider/types';

export interface GetProductsResponse {
  data: Product[];
  pagination: Pagination;
}

export interface Product {
  _id: string;
  photos: string[];
  title: string;
  price: number;
  discounts: number;
  quantity: number;
  tag: ProductTag;
  new: boolean;
  popular: boolean;
  size: Size;
  createdAt: Date;
  updatedAt: Date;
  description: string;
}

export interface Size {
  value: number;
  unit: string;
}

export interface Pagination {
  total: number;
  pages: number;
  page: number;
}
