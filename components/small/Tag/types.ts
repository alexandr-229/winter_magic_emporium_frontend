import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: string;
  width?: number | 'auto';
  height: number;
  textStyle?: 'italic' | 'normal';
  icon?: {
    src: string;
    width: number;
    height: number;
  };
}
