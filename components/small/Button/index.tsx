import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';

export const Button = ({ className, children, ...props }: Props) => {
  return (
    <button className={cn(styles.button, className)} {...props} type="button">
      {children}
    </button>
  );
};
