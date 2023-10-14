import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum CategoryEnum {
  Decoration = 'DECORATION',
  Gifts = 'GIFTS',
  Costumes = 'COSTUMES',
  Cooking = 'COOKING',
}

export type Data = Record<CategoryEnum, { img: string; text: string }>;

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category: CategoryEnum;
}
