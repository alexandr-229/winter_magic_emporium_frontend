import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';

export const Loader = ({
  className,
  size,
  width,
  ...props
}: Props) => {
  return (
    <div
      className={cn(styles.loader, className)}
      style={{
        width: size,
        height: size,
        borderTopWidth: width || 5,
        borderWidth: width || 5,
      }}
      {...props}
    />
  );
};
