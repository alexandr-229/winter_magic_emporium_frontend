import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string;
  img: string;
  title: string;
  qtyInStock: number;
  quantity: number;
  price: number;
  size: string;
}
