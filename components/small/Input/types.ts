import { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from 'react';

export interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  validate?: (event: ChangeEvent<HTMLInputElement>) => boolean;
}

export interface InputRefData {
  setError: (value: boolean) => void;
}
