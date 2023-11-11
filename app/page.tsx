'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/large/Card';
import { Tag } from '@/components/small/Tag';
import { Banner } from '@/components/large/Banner';
import { Category } from '@/components/large/Category';
import { CategoryEnum } from '@/components/large/Category/types';
import { Loader } from '@/components/small/Loader';
import styles from './page.module.css';
import { useHomePage } from './useHomePage';

export default function Home() {
  const {
    newError,
    newLoading,
    newProducts,
    promotionalError,
    promotionalLoading,
    promotionalProducts,
  } = useHomePage();

  return (
    <main>
      <div className={styles.content}>
        <Banner className={styles.banner} />
        <div className={styles.categories}>
          <Category category={CategoryEnum.Decoration} />
          <Category category={CategoryEnum.Gifts} />
          <Category category={CategoryEnum.Costumes} />
          <Category category={CategoryEnum.Cooking} />
        </div>
        <div className={styles.cardsBlock}>
          <div className={styles.blockHeader}>
            <p className={styles.blockTitle}>Promotions</p>
            <Tag
              width={62}
              height={32}
              color="#FF2727"
              icon={{
                src: '/icons/fire.svg',
                height: 17,
                width: 17,
              }}
            >
              Sale
            </Tag>
          </div>
          <div className={styles.blockBody}>
            {promotionalLoading && (
              <div className={styles.loaderWrapper}>
                <Loader size={60} width={9} />
              </div>
            )}
            {promotionalError && (
              <div className={styles.loaderWrapper}>
                <Image
                  className={styles.errorIcon}
                  src="/icons/error.svg"
                  alt="error"
                  width={30}
                  height={30}
                />
                <p className={styles.errorMessage}>Something went wrong</p>
              </div>
            )}
            {promotionalProducts && promotionalProducts.map((product) => (
              <Card
                id={product._id}
                className={styles.cardItem}
                key={product._id}
                img={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.photos[0]}`}
                title={product.title}
                description={`${product.title} ${product.size.value} ${product.size.unit}`}
                price={product.price}
                isFavorite={product.isFavorite}
              />
            ))}
          </div>
        </div>
        <div className={styles.cardsBlock}>
          <div className={styles.blockHeader}>
            <p className={styles.blockTitle}>New items</p>
            <Tag
              className={styles.tag}
              width={62}
              height={32}
              color="#FF2727"
              icon={{
                src: '/icons/fire.svg',
                height: 17,
                width: 17,
              }}
            >
              New
            </Tag>
            <Link href="/catalog" className={styles.link}>See all the products</Link>
          </div>
          <div className={styles.blockBody}>
            {newLoading && (
              <div className={styles.loaderWrapper}>
                <Loader size={60} width={9} />
              </div>
            )}
            {newError && (
              <div className={styles.loaderWrapper}>
                <Image
                  className={styles.errorIcon}
                  src="/icons/error.svg"
                  alt="error"
                  width={30}
                  height={30}
                />
                <p className={styles.errorMessage}>Something went wrong</p>
              </div>
            )}
            {newProducts && newProducts.map((product) => (
              <Card
                id={product._id}
                className={styles.cardItem}
                key={product._id}
                img={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.photos[0]}`}
                title={product.title}
                description={`${product.title} ${product.size.value} ${product.size.unit}`}
                price={product.price}
                isFavorite={product.isFavorite}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
