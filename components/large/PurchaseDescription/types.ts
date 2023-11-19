import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onPay: () => void;

  loading: boolean;
  totalPrice: number;
  totalProducts: number;
  discount: {
    sum: number;
    percent: number;
  };
}
