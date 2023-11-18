import React from 'react';

import { getDollarPrice } from '@/helpers';
import { Tag } from '@/components/small/Tag';
import { Button } from '@/components/small/Button';
import { Props } from './types';
import styles from './styles.module.css';

export const PurchaseDescription = ({
  totalProducts,
  totalPrice,
  discount,
}: Props) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.boldText}>Total price:</p>
          <p className={styles.price}>{getDollarPrice(totalPrice.toFixed(0))}</p>
          {!!discount.sum && <p className={styles.discount}>{getDollarPrice(discount.sum.toFixed(2))}</p>}
          {!!discount.sum && <Tag className={styles.discountTag} color="#FF2727" height={28}>{`-${discount.percent.toFixed(2)}%`}</Tag>}
        </div>
        <p className={styles.subtitle}>Your order</p>
        <div className={styles.rowInfo}>
          <p className={styles.smallText}>Quantity of products</p>
          <p className={styles.boldText}>{totalProducts}</p>
        </div>
        <div className={styles.rowInfo}>
          <p className={styles.smallText}>Price</p>
          <p className={styles.boldText}>{getDollarPrice(totalPrice)}</p>
        </div>
      </div>
      {!!totalProducts && (
        <div className={styles.footer}>
          <Button className={styles.button}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};
