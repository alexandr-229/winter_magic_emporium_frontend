import React from 'react';
import cn from 'classnames';

import { OrderStatus } from '@/api/user';
import { getDollarPrice } from '@/helpers';
import { OrderItemProps } from './types';
import styles from './styles.module.css';

const formatDate = (date: Date | string) => new Date(date)
  .toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    formatMatcher: 'best fit',
  })
  .replace(/\//g, '.');

export const OrderItem = ({ order }: OrderItemProps) => {
  const colorClassName = cn({
    [styles.grey]: order.status === OrderStatus.Completed,
    [styles.green]: order.status === OrderStatus.Delivered,
    [styles.yellow]: order.status === OrderStatus.Processing,
  });

  const photos = order.products
    .map(({ photos }) => photos[0])
    .filter(Boolean)
    .slice(0, 3)
    .map((url) => `${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`);

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.line, colorClassName)} />
      <div>
        <div className={styles.titleWrapper}>
          <p className={cn(styles.status, colorClassName)}>{order.status}</p>
          <p className={styles.date}>{formatDate(order.createdAt)}</p>
        </div>
        <div className={styles.photos}>
          {photos.map((photo) => (
            <div className={styles.photoWrapper}>
              <img src={photo} alt="" className={styles.productPhoto} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightData}>
        <p className={styles.orderIndex}>
          <span className={styles.orderTitle}>Order №</span>
          {' '}
          <span>{order.index}</span>
        </p>
        <div className={styles.tags}>
          <div className={styles.tag}>
            <p>{getDollarPrice(order.sum)}</p>
          </div>
          <div className={styles.tag}>
            <p className={cn(styles.paidText, styles.lowOpacity)}>Paid</p>
          </div>
        </div>
      </div>
    </div>
  );
};
