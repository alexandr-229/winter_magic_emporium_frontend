import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props } from './types';

export const RadioSelect = ({
  options,
  valueActive,
  onChangeActiveValue,
  className,
  ...props
}: Props) => {
  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {options.map((option) => (
        <div key={option.key} className={styles.option} onClick={() => onChangeActiveValue(option.key)}>
          <div
            className={cn(styles.radioWrapper, {
              [styles.active]: valueActive(option.key),
            })}
          >
            {valueActive(option.key) && (
              <div className={styles.radioActive} />
            )}
          </div>
          <p className={styles.optionText}>{option.value}</p>
        </div>
      ))}
    </div>
  );
};
