import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/small/Button';
import { Search } from '@/components/small/Search';
import styles from './styles.module.css';
import { Props } from './types';
import CartIcon from './cart.svg';
import LikeIcon from './like.svg';
import AvatarIcon from './avatar.svg';

export const Header = ({ className, ...props }: Props) => {
  const cartSize = 1;

  return (
    <>
      <header className={cn(className, styles.header)} {...props}>
        <div className={styles.headerContent}>
          <div className={styles.block}>
            <Image
              className={styles.icon}
              src="/icons/location.svg"
              alt="location"
              width={20}
              height={20}
            />
            <p className={cn(styles.text, styles.link)}>Kyiv and region</p>
          </div>
          <div className={cn(styles.block, styles.menu)}>
            <Link href="/contacts" className={styles.text}>Contacts</Link>
            <Link href="/question" className={styles.text}>Questions</Link>
          </div>
          <div className={styles.block}>
            <Image
              className={styles.icon}
              src="/icons/phone.svg"
              alt="location"
              width={20}
              height={20}
            />
            <a className={styles.text} href="telto:380631451375">
              <span className={styles.bold}>+38 063 145 13 75 </span>
              <span>(from 5:00 to 21:00)</span>
            </a>
          </div>
        </div>
      </header>
      <div className={cn(styles.block, styles.bottomContent)}>
        <Image
          className={styles.logo}
          src="/icons/logo.svg"
          alt="logo"
          width={58}
          height={58}
        />
        <Button className={styles.button}>Catalog</Button>
        <Search className={styles.search} />
        <AvatarIcon className={cn(styles.icon, styles.pointer, styles.iconHover)} />
        <div>
          <LikeIcon className={cn(styles.icon, styles.pointer, styles.iconHover)} />
        </div>
        <div className={styles.cartWrapper}>
          {cartSize && (
            <div className={styles.cartSizeTag}>
              {cartSize > 9 ? '9+' : cartSize}
            </div>
          )}
          <CartIcon className={cn(styles.icon, styles.pointer, styles.iconHover)} />
        </div>
      </div>
    </>
  );
};
