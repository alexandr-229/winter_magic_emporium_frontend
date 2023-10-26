'use client';

import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Tag } from '@/components/small/Tag';
import { Arrow } from '@/components/small/Arrow';
import styles from './styles.module.css';
import { Props } from './types';
import { useSlider } from './useSlider';
import LikeIcon from './like.svg';

export const Slider = ({
  photos,
  isFavorite,
  tag,
  className,
  ...props
}: Props) => {
  const {
    tagInfo,
    activePhoto,
    showLeftArrow,
    showRightArrow,
    setActivePhoto,
    nextClickHandle,
    prevClickHandle,
    getLeft,
  } = useSlider(photos, tag);

  return (
    <div
      {...props}
      className={cn(styles.wrapper, className)}
    >
      <div
        {...props}
        className={cn(styles.sliderWrapper, className)}
      >
        {photos.map((scr, index) => (
          <img
            src={scr}
            alt="Product"
            className={styles.photo}
            style={{
              left: getLeft(index),
            }}
          />
        ))}
        {showLeftArrow && (
          <Arrow
            side="left"
            className={cn(styles.arrow, styles.left)}
            onClick={prevClickHandle}
          />
        )}
        {showRightArrow && (
          <Arrow
            side="right"
            className={cn(styles.arrow, styles.right)}
            onClick={nextClickHandle}
          />
        )}
        <Image
          className={styles.rotateImg}
          src="/icons/photo_tag.svg"
          alt="Img"
          width={52}
          height={52}
        />
        <div className={styles.favoriteTag}>
          <LikeIcon
            className={cn(styles.likeIcon, {
              [styles.favorite]: isFavorite,
            })}
          />
        </div>
        <Tag
          className={styles.tag}
          color={tagInfo.color}
          width={tagInfo.width}
          height={33}
        >
          {tagInfo.text}
        </Tag>
      </div>
      <div className={styles.dots}>
        {photos.map((src, index) => (
          <div
            key={src}
            onClick={() => setActivePhoto(index)}
            className={cn(styles.dot, {
              [styles.active]: activePhoto === index,
            })}
          />
        ))}
      </div>
    </div>
  );
};
