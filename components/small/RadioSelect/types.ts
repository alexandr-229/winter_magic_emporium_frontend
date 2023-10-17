import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onChangeActiveValue: (value: string) => void;
  valueActive: (key: string) => boolean;
  options: {
    key: string;
    value: string;
  }[];
}
