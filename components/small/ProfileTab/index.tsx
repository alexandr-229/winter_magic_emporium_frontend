import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';
import { ProfileTabProps } from './types';

export const ProfileTab = ({
  className,
  isActive,
  text,
  Icon,
  ...props
}: ProfileTabProps) => {
  return (
    <button
      type="button"
      className={cn(styles.tab, className, {
        [styles.active]: isActive,
      })}
      {...props}
    >
      <Icon />
      <p>{text}</p>
    </button>
  );
};
