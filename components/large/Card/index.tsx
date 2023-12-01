import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components/small/Button';
import { getDollarPrice } from '@/helpers';
import { useUser } from '@/store/user';
import { useAuthModal } from '@/store/auth-modal';
import { ModalAlias } from '@/components/modals/auth/types';
import styles from './styles.module.css';
import { Props } from './types';

const { onOpenAuthModal } = useAuthModal.getStore();

export const Card = ({
  id,
  img,
  title,
  description,
  price,
  isFavorite,
  className,
  onAddToCart,
  ...props
}: Props) => {
  const { user } = useUser();

  const handleAddToCart = () => {
    if (!user) {
      onOpenAuthModal(ModalAlias.LOGIN);
      return;
    }

    onAddToCart();
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <Link href={`/product/${id}`}>
        <div className={styles.imgWrapper}>
          <img
            src={img}
            alt="product"
            className={styles.img}
          />
        </div>
      </Link>
      <Link href={`/product/${id}`} className={styles.link}>
        <p className={cn(styles.text, styles.title)}>{title}</p>
      </Link>
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
        <Button className={styles.button} onClick={handleAddToCart}>To cart</Button>
      </div>
    </div>
  );
};
