import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  code: string;
  codeLength: number;
  setCode: (code: string) => void;
}

export interface CodeInputRefData {
  setError: (error: boolean) => void;
}
