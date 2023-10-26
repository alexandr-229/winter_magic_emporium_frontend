import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ActiveDescription {
  PAYMENT = 'Payment',
  DESCRIPTION = 'Description',
  CHARACTERISTICS = 'Characteristics',
}

export interface Size {
  height: string;
  width: string;
}

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pricePerItem: number;
  discountPercent?: number;
  totalQuantity: number;
  sizes: string[];
  description: string;
  size: Size;
}
