import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';

export const Arrow = ({ side, className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={cn(styles.button, className, {
        [styles.left]: side === 'left',
        [styles.right]: side === 'right',
      })}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 21" fill="none">
        <path d="M1 1L10 10.5L1 20" stroke="#3D3D3D" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  );
};
