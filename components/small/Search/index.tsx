import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './styles.module.css';
import { Props } from './types';

export const Search = ({ className, ...props }: Props) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <input
        placeholder="What are you looking for?"
        className={styles.input}
        {...props}
      />
      <button className={styles.button} type="button">
        <Image
          src="/icons/search.svg"
          alt="search"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
};
