import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ProductTag {
  Available = 'available',
  ToOrder = 'to_order',
  Discounts = 'discounts',
  NotAvailable = 'not_available',
}

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photos: string[];
  isFavorite: boolean;
  tag: ProductTag;
}

export type TagData = Record<ProductTag, {
  text: string;
  color: string;
  width: number;
}>;
