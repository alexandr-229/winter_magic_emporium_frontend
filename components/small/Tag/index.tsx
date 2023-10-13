import React from 'react';
import Image from 'next/image';
import { Props } from './types';
import styles from './styles.module.css';

export const Tag = ({
  width,
  height,
  color,
  children,
  textStyle = 'normal',
  icon,
}: Props) => {
  return (
    <div
      className={styles.tag}
      style={{
        width,
        height,
        backgroundColor: color,
      }}
    >
      <p
        className={styles.text}
        style={{ fontStyle: textStyle }}
      >
        {children}
      </p>
      {icon && (
        <Image
          src={icon.src}
          alt="icon"
          height={icon.height}
          width={icon.width}
        />
      )}
    </div>
  );
};
