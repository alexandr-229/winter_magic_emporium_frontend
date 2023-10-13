import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import { Props } from './types';
import { data } from './data';

export const Category = ({ category, ...props }: Props) => {
  return (
    <div {...props}>
      <Image
        className={styles.img}
        src={data[category].img}
        alt={data[category].text}
        width={338}
        height={145}
      />
      <p className={styles.text}>{data[category].text}</p>
    </div>
  );
};
