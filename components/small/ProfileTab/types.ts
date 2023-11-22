import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ProfileTabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  isActive: boolean;
  text: string;
  Icon: FC;
}
