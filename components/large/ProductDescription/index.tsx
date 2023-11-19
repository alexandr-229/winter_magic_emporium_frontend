'use client';

import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { getDollarPrice } from '@/helpers';
import { QuantityEditor } from '@/components/small/QuantityEditor';
import { Tag } from '@/components/small/Tag';
import { Button } from '@/components/small/Button';
import styles from './styles.module.css';
import { ActiveDescription, Props } from './types';
import { useProductDescription } from './useProductDescription';
import CartIcon from '../Header/cart.svg';
import PaymentIcon from './payment.svg';
import DescriptionIcon from './description.svg';
import CharacteristicsIcon from './characteristics.svg';

export const ProductDescription = ({
  onAddToCart,
  className,
  pricePerItem,
  discountPercent,
  totalQuantity,
  sizes,
  description,
  size,
  ...props
}: Props) => {
  const {
    quantity,
    activeSize,
    activeDescription,
    setQuantity,
    setActiveSize,
    setActiveDescription,
  } = useProductDescription(sizes);

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div
        className={cn(styles.priceWrapper, {
          [styles.withDiscount]: !!discountPercent,
        })}
      >
        <p className={cn(styles.text, styles.price)}>
          {getDollarPrice(pricePerItem)}
          <span className={cn(styles.text, styles.quantity)}> / PC</span>
        </p>
        {!!discountPercent && (
          <>
            <p
              className={cn(styles.text, styles.oldPrice)}
            >
              {getDollarPrice(Math.round(pricePerItem + (pricePerItem * discountPercent / 100)))}
            </p>
            <Tag
              className={cn(styles.discountTag, styles.text)}
              color="#FF2727"
              width={discountPercent.toString().length === 3 ? 60 : 50}
              height={24}
            >
              {`-${discountPercent}%`}
            </Tag>
          </>
        )}
        <p className={cn(styles.text, styles.totalQuantity)}>
          <span className={styles.totalQuantityTitle}>In stock: </span>
          <span className={styles.totalQuantityValue}>
            {totalQuantity}
            pc.
          </span>
        </p>
      </div>
      <div className={styles.sizesBlock}>
        <p className={cn(styles.text, styles.blockTitle)}>Select size</p>
        <div className={styles.sizes}>
          {sizes.map((size) => (
            <Tag
              height={38}
              width={90}
              color={activeSize === size ? '#FFD704' : '#F0F0F0'}
              onClick={() => setActiveSize(size)}
              className={cn(styles.text, styles.sizeItem)}
            >
              {size}
            </Tag>
          ))}
        </div>
      </div>
      <div className={styles.quantityBlock}>
        <p className={cn(styles.text, styles.blockTitle)}>Select quantity</p>
        <QuantityEditor quantity={quantity} setQuantity={setQuantity} minmax={[1, totalQuantity]} className={styles.selectQuantity} />
        <Button className={styles.cartButton} onClick={() => onAddToCart(quantity)}>
          <p className={styles.text}>To cart</p>
          <CartIcon className={styles.cartIcon} />
        </Button>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionMenu}>
          <div
            className={cn(styles.descriptionMenuItem, {
              [styles.active]: activeDescription === ActiveDescription.PAYMENT,
            })}
            onClick={() => setActiveDescription(ActiveDescription.PAYMENT)}
          >
            <PaymentIcon style={{ transform: 'scale(1.1)' }} />
            <p className={styles.text}>Payment and delivery</p>
            <div className={styles.descriptionMenuItemLine} />
          </div>
          <div
            className={cn(styles.descriptionMenuItem, {
              [styles.active]: activeDescription === ActiveDescription.DESCRIPTION,
            })}
            onClick={() => setActiveDescription(ActiveDescription.DESCRIPTION)}
          >
            <DescriptionIcon />
            <p className={styles.text}>Description</p>
            <div className={styles.descriptionMenuItemLine} />
          </div>
          <div
            className={cn(styles.descriptionMenuItem, {
              [styles.active]: activeDescription === ActiveDescription.CHARACTERISTICS,
            })}
            onClick={() => setActiveDescription(ActiveDescription.CHARACTERISTICS)}
          >
            <CharacteristicsIcon />
            <p className={styles.text}>Characteristics</p>
            <div className={styles.descriptionMenuItemLine} />
          </div>
        </div>
        {activeDescription === ActiveDescription.PAYMENT && (
          <div className={styles.paymentBlock}>
            <Image
              src="/icons/visa-mastercard.svg"
              alt="visa mastercard"
              width={40}
              height={40}
            />
            <Image
              src="/icons/paypal.svg"
              alt="paypal"
              width={40}
              height={40}
            />
          </div>
        )}
        {activeDescription === ActiveDescription.DESCRIPTION && (
          <p className={cn(styles.text, styles.description)}>{description}</p>
        )}
        {activeDescription === ActiveDescription.CHARACTERISTICS && (
          <div className={styles.characteristics}>
            <div className={styles.characteristicItem}>
              <p className={cn(styles.text, styles.characteristicItemTitle)}>Height:</p>
              <p className={cn(styles.text, styles.characteristicItemValue)}>{size.height}</p>
            </div>
            <div className={styles.characteristicItem}>
              <p className={cn(styles.text, styles.characteristicItemTitle)}>Width:</p>
              <p className={cn(styles.text, styles.characteristicItemValue)}>{size.width}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
