import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/small/Button';
import { Props } from './types';
import styles from './styles.module.css';

export const Banner = ({ className, ...props }: Props) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <div className={styles.infoWrapper}>
        <Image
          className={styles.icon}
          src="/icons/fire-large.svg"
          alt="fire"
          width={40}
          height={55}
        />
        <p className={styles.title}>Big discounts on all our products</p>
        <p className={styles.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem delectus nemo atque eum incidunt culpa quod vitae quis id placeat earum veniam enim, quisquam suscipit facilis ullam nulla! Mollitia, suscipit.
        </p>
        <Link href="/catalog" className={styles.link}>
          <Button className={styles.button}>
            Catalog
            <Image
              src="/icons/arrow-right.svg"
              alt="catalog"
              width={30}
              height={15}
            />
          </Button>
        </Link>
      </div>
      <div className={styles.line} />
      <Image
        src="/images/banner.png"
        alt="banner"
        width={450}
        height={250}
      />
    </div>
  );
};
