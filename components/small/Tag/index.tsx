import React from 'react';
import cn from 'classnames';
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
  className,
  ...props
}: Props) => {
  return (
    <div
      className={cn(styles.tag, className)}
      style={{
        width,
        height,
        backgroundColor: color,
      }}
      {...props}
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
