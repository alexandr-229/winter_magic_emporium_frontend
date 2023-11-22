import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UserLevelProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  level: number;
}
