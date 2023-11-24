'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Button } from '@/components/small/Button';
import { Loader } from '@/components/small/Loader';

import styles from './styles.module.css';
import { Props } from './types';

export const Content = ({ className, ...props }: Props) => {
  const [drag, setDrag] = useState(false);
  const [loading, setLading] = useState(false);

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {loading ? (
        <>
          <Loader size={50} width={5} color="#000" />
          <p>Uploading...</p>
        </>
      ) : (
        <div
          onMouseEnter={() => setDrag(true)}
          onMouseLeave={() => setDrag(false)}
          className={cn(styles.draggableContent, {
            [styles.drag]: drag,
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
          <Button className={styles.button} onClick={() => setLading(true)}>Select</Button>
        </div>
      )}
    </div>
  );
};
