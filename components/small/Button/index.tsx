import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';
import { Loader } from '../Loader';

export const Button = ({
  className,
  children,
  loading = false,
  ...props
}: Props) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.center]: !!loading,
      })}
      type="button"
      {...props}
    >
      {loading ? (
        <Loader
          size={14}
          width={3}
          color="black"
          backgroundColor="transparent"
        />
      ) : children}
    </button>
  );
};
