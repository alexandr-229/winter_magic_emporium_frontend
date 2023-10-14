import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  side: 'left' | 'right';
}
