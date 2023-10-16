'use client';

import React from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { RadioSelect } from '@/components/small/RadioSelect';
import styles from './styles.module.css';
import { Props } from './types';
import { useFilters } from './useFilters';

export const Filters = ({ filters, onChangeFilters, ...props }: Props) => {
  const {
    options,
    titleOpen,
    priceOpen,
    newOpen,
    setTitleOpen,
    setPriceOpen,
    setNewOpen,
  } = useFilters();

  return (
    <div {...props}>
      <div className={styles.block}>
        <div className={styles.header} onClick={() => setTitleOpen(!titleOpen)}>
          <p className={styles.blockTitle}>Title</p>
          <Image
            className={cn(styles.arrow, {
              [styles.open]: titleOpen,
              [styles.closed]: !titleOpen,
            })}
            src="/icons/arrow-down.svg"
            alt={titleOpen ? 'close' : 'open'}
            width={20}
            height={20}
          />
        </div>
        <div
          className={cn(styles.body, {
            [styles.closed]: !titleOpen,
          })}
        >
          <RadioSelect
            options={options}
            onChangeActiveValue={(value) => onChangeFilters({ orderValue: value as 'asc' | 'desc', orderKey: 'title' })}
            valueActive={(value) => filters.orderKey === 'title' && filters.orderValue === value}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.header} onClick={() => setPriceOpen(!priceOpen)}>
          <p className={styles.blockTitle}>Price</p>
          <Image
            className={cn(styles.arrow, {
              [styles.open]: priceOpen,
              [styles.closed]: !priceOpen,
            })}
            src="/icons/arrow-down.svg"
            alt={priceOpen ? 'close' : 'open'}
            width={20}
            height={20}
          />
        </div>
        <div
          className={cn(styles.body, {
            [styles.closed]: !priceOpen,
          })}
        >
          <RadioSelect
            options={options}
            onChangeActiveValue={(value) => onChangeFilters({ orderValue: value as 'asc' | 'desc', orderKey: 'price' })}
            valueActive={(value) => filters.orderKey === 'price' && filters.orderValue === value}
          />
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.header} onClick={() => setNewOpen(!newOpen)}>
          <p className={styles.blockTitle}>New</p>
          <Image
            className={cn(styles.arrow, {
              [styles.open]: newOpen,
              [styles.closed]: !newOpen,
            })}
            src="/icons/arrow-down.svg"
            alt={newOpen ? 'close' : 'open'}
            width={20}
            height={20}
          />
        </div>
        <div
          className={cn(styles.body, {
            [styles.closed]: !newOpen,
          })}
        >
          <RadioSelect
            options={options}
            onChangeActiveValue={(value) => onChangeFilters({ orderValue: value as 'asc' | 'desc', orderKey: 'new' })}
            valueActive={(value) => filters.orderKey === 'new' && filters.orderValue === value}
          />
        </div>
      </div>
    </div>
  );
};
