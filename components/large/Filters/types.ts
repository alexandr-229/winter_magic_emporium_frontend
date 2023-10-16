import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface Filters {
  orderKey: string;
  orderValue: 'asc' | 'desc';
}

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  filters: Filters;
  onChangeFilters: (filters: Filters) => void;
}
