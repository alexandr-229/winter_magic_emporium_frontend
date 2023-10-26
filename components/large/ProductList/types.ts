import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/app/types';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  loading: boolean;
  error: boolean;
  products: Product[];
}
