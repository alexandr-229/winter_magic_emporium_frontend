import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  title: string;
  description: string;
  price: number;
  isFavorite: boolean;
}
