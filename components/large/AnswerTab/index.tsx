import React from 'react';
import cn from 'classnames';

import { Button } from '@/components/small/Button';
import { Props } from './types';
import styles from './styles.module.css';

export const AnswerTab = ({
  text,
  active,
  className,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      className={cn(styles.tab, className, {
        [styles.active]: active,
      })}
    >
      <p>{text}</p>
    </Button>
  );
};
