import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  quantity: number;
  minmax?: [number, number];
  setQuantity: (quantity: number) => void;
}
