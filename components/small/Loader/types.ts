import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size: number;
  color?: string;
  backgroundColor?: string;
  width?: number;
}
