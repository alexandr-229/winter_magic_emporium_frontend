import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';
import { Props } from './types';

export const QuantityEditor = ({
  setQuantity,
  className,
  quantity,
  minmax,
  ...props
}: Props) => {
  const decrementQuantity = () => {
    if (minmax && minmax[0] >= quantity) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    if (minmax && minmax[1] <= quantity) {
      return;
    }
    setQuantity(quantity + 1);
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <button
        type="button"
        aria-label=""
        className={styles.button}
        onClick={decrementQuantity}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="black">
          <rect x="6.5" y="17.5" width="25" height="3" rx="1" fill="black" />
        </svg>
      </button>
      <p className={cn(styles.text, styles.quantity)}>{quantity}</p>
      <button
        type="button"
        aria-label=""
        className={styles.button}
        onClick={incrementQuantity}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
          <rect x="6.5" y="17.5" width="25" height="3" rx="1" fill="black" />
          <rect x="17.5" y="6.5" width="3" height="25" rx="1" fill="black" />
        </svg>
      </button>
    </div>
  );
};
