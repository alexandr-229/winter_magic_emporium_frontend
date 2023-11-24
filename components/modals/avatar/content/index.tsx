'use client';

import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Button } from '@/components/small/Button';
import { Loader } from '@/components/small/Loader';

import styles from './styles.module.css';
import { Props } from './types';
import { useAvatar } from '../useAvatar';

export const Content = ({ className, ...props }: Props) => {
  const {
    loading,
    isDragging,
    handleOnDrop,
    setIsDragging,
  } = useAvatar();

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {loading ? (
        <>
          <Loader size={50} width={5} color="#000" />
          <p>Uploading...</p>
        </>
      ) : (
        <div
          onDrop={handleOnDrop}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
          onDragOver={(event) => event.preventDefault()}
          className={cn(styles.draggableContent, {
            [styles.drag]: isDragging,
          })}
        >
          <Image
            width={60}
            height={60}
            src="/icons/image.svg"
            alt="Select your photo"
          />
          <h3 className={styles.text}>Drag an image here</h3>
          <p className={styles.text}>JPG, PNG · Maximum size 5Mb</p>
          <Button className={styles.button}>Select</Button>
        </div>
      )}
    </div>
  );
};
