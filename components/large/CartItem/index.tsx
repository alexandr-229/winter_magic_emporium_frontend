'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { QuantityEditor } from '@/components/small/QuantityEditor';
import { getDollarPriceForItem } from '@/helpers';
import { Props } from './types';
import styles from './styles.module.css';

export const CartItem = ({
  setQuantity,
  onDelete,
  qtyInStock,
  className,
  quantity,
  price,
  title,
  size,
  img,
  ...props
}: Props) => {
  return (
    <div
      className={cn(styles.wrapper, className)}
      {...props}
    >
      <Image
        onClick={onDelete}
        className={styles.close}
        src="/icons/close-white.svg"
        alt="close"
        width={24}
        height={24}
      />
      <div className={styles.photoWrapper}>
        <img
          className={styles.photo}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${img}`}
          alt={title}
        />
      </div>
      <div className={styles.mainBlock}>
        <p className={cn(styles.text, styles.title)}>{title}</p>
        <div className={styles.descriptionWrapper}>
          <p className={cn(styles.text, styles.description, styles.qtyInStock)}>
            In stock:
            {' '}
            <span className={styles.bold}>{qtyInStock}</span>
          </p>
          <p className={cn(styles.text, styles.description, styles.size)}>
            Size:
            {' '}
            <span className={styles.bold}>{size}</span>
          </p>
        </div>
        <QuantityEditor quantity={quantity} setQuantity={setQuantity} minmax={[0, qtyInStock]} className={styles.quantityEditor} />
      </div>
      <div>
        <p className={cn(styles.text, styles.price)}>{getDollarPriceForItem(price)}</p>
      </div>
    </div>
  );
};
