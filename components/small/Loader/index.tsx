import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';

export const Loader = ({
  className,
  size,
  width,
  color,
  backgroundColor,
  ...props
}: Props) => {
  return (
    <div
      className={cn(styles.loader, className)}
      style={{
        width: size,
        height: size,
        borderWidth: width || 5,
        borderTopWidth: `${width || 5}px !important`,
        borderTopColor: color || '#FFD704',
        borderLeftColor: backgroundColor || 'rgba(255, 255, 255, 0.3)',
        borderRightColor: backgroundColor || 'rgba(255, 255, 255, 0.3)',
        borderBottomColor: backgroundColor || 'rgba(255, 255, 255, 0.3)',
      }}
      {...props}
    />
  );
};
