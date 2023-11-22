import React from 'react';
import cn from 'classnames';

import { GoldIcon } from '@/assets/icons/gold';
import styles from './styles.module.css';
import { UserLevelProps } from './types';

export const UserLevel = ({ className, level, ...props }: UserLevelProps) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      <GoldIcon />
      <p className={styles.title}>Gold</p>
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressBar} style={{ width: `${level}%` }} />
        <p>{`${level}/100`}</p>
      </div>
    </div>
  );
};
