import { Product } from '@/api/product';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  loading: boolean;
  error: boolean;
  products: Product[];
}
