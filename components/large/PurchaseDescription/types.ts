import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  totalPrice: number;
  totalProducts: number;
  discount: {
    sum: number;
    percent: number;
  };
}
