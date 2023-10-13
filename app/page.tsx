import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/large/Card';
import { Tag } from '@/components/small/Tag';
import { Banner } from '@/components/large/Banner';
import { Category } from '@/components/large/Category';
import { CategoryEnum } from '@/components/large/Category/types';
import styles from './page.module.css';
import { useHomePage } from './useHomePage';

export default function Home() {
  const { products } = useHomePage();

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
            {products.map((id) => (
              <Card
                id={id.toString()}
                className={styles.cardItem}
                key={id.toString()}
                img="/icons/test-product.png"
                title="Test product Test product Test product Test product Test product Test product Test product"
                description="Test description Test description Test description Test description Test description Test description Test description Test description"
                price={1000}
                isFavorite={false}
              />
            ))}
          </div>
        </div>
        <div className={styles.cardsBlock}>
          <div className={styles.blockHeader}>
            <p className={styles.blockTitle}>Promotions</p>
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
            {products.map((id) => (
              <Card
                id={id.toString()}
                className={styles.cardItem}
                key={id.toString()}
                img="/icons/test-product.png"
                title="Test product Test product Test product Test product Test product Test product Test product"
                description="Test description Test description Test description Test description Test description Test description Test description Test description"
                price={1000}
                isFavorite={false}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
