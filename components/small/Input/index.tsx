import React, {
  ChangeEvent,
  useState,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { Props, InputRefData } from './types';

export const Input = forwardRef(({
  className,
  onChange,
  validate,
  ...props
}: Props, ref: ForwardedRef<InputRefData>) => {
  const [error, setError] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({ setError }));

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) {
      return;
    }

    if (validate && !validate(event)) {
      return setError(true);
    }

    onChange(event);
  };

  return (
    <input
      onChange={handleOnChange}
      className={cn(styles.input, className, {
        [styles.error]: error,
      })}
      {...props}
    />
  );
});
