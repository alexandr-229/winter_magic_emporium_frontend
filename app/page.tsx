import Image from 'next/image';
import { Card } from '@/components/large/Card';
import { Button } from '@/components/small/Button';
import React from 'react';
import { Tag } from '@/components/small/Tag';
import { Banner } from '@/components/large/Banner';
import { Loader } from '@/components/small/Loader';
import { Category } from '@/components/large/Category';
import { CategoryEnum } from '@/components/large/Category/types';
import { Arrow } from '@/components/small/Arrow';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Banner />
      <Card
        img="https://boatmarket.lv/upload/shop_11/3/5/8/item_358/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-01-16%20%D0%B2%2012.26.21.png"
        title="Test product Test product Test product Test product Test product Test product Test product"
        description="Test description Test description Test description Test description Test description Test description Test description Test description"
        price={1000}
        isFavorite={false}
      />
      <Button className={styles.button}>
        Test button
        <Image
          src="/icons/phone.svg"
          alt="location"
          width={20}
          height={20}
        />
      </Button>
      <Tag
        textStyle="italic"
        height={32}
        width={62}
        color="#FF2727"
        icon={{
          src: '/icons/fire.svg',
          height: 14,
          width: 17,
        }}
      >
        Save
      </Tag>
      <Loader size={50} width={7} />
      <Category category={CategoryEnum.Gifts} />
      <Arrow side="left" />
    </main>
  );
}
