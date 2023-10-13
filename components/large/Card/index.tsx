import React from 'react';
import cn from 'classnames';
import { Button } from '@/components/small/Button';
import { getDollarPrice } from '@/helpers';
import { Props } from './types';
import styles from './styles.module.css';

export const Card = ({
  img,
  title,
  description,
  price,
  isFavorite,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img
          src={img}
          alt="product"
          className={styles.img}
        />
      </div>
      <p className={cn(styles.text, styles.title)}>{title}</p>
      <p className={cn(styles.text, styles.description)}>{description}</p>
      <div className={styles.bottomContent}>
        <div
          className={cn({
            [styles.favorite]: isFavorite,
          })}
        >
          <div className={cn({ [styles.favoriteContent]: isFavorite })}>
            <p
              className={cn(styles.text, styles.price, {
                [styles.priceFavorite]: isFavorite,
              })}
            >
              {getDollarPrice(price)}
            </p>
          </div>
        </div>
        <Button className={styles.button}>To cart</Button>
      </div>
    </div>
  );
};
