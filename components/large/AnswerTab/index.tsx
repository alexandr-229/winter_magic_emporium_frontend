import React, { MouseEvent } from 'react';
import cn from 'classnames';

import { Button } from '@/components/small/Button';
import { Props } from './types';
import styles from './styles.module.css';

export const AnswerTab = ({
  text,
  active,
  className,
  onClick,
  onActivate,
  ...props
}: Props) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      return onClick(event);
    }

    onActivate();
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      className={cn(styles.tab, className, {
        [styles.active]: active,
      })}
    >
      <p>{text}</p>
    </Button>
  );
};
