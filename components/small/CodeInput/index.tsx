import React, {
  useState,
  forwardRef,
  ChangeEvent,
  ForwardedRef,
  KeyboardEvent,
  useImperativeHandle,
  useEffect,
  useRef,
} from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { CodeInputRefData, Props } from './types';

export const CodeInput = forwardRef((
  {
    className,
    codeLength,
    code,
    setCode,
    ...props
  }: Props,
  ref: ForwardedRef<CodeInputRefData>,
) => {
  const [error, setError] = useState<boolean>(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useImperativeHandle(ref, () => ({ setError }));

  useEffect(() => {
    setError(false);
  }, [code]);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      const newCode = code.slice(0, code.length - 1);
      const inputIndex = Math.max(newCode.length, 0);

      setCode(newCode);
      inputs.current[inputIndex]?.focus();

      return;
    }

    if (code.length >= codeLength) {
      return;
    }

    const value = Number(event.target.value);

    if (Number.isNaN(value) || value === Infinity) {
      return;
    }

    const newCode = `${code}${value}`;
    const inputIndex = Math.min(codeLength, newCode.length);

    setCode(newCode);
    inputs.current[inputIndex]?.focus();
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key !== 'Backspace' || code[index]) {
      return;
    }

    const inputIndex = Math.max(index - 1, 0);
    inputs.current[inputIndex]?.focus();
  };

  return (
    <div className={cn(styles.wrapper, className)} {...props}>
      {new Array(codeLength).fill(0).map((_, index) => (
        <input
          onChange={handleOnChange}
          onKeyDown={(event) => handleOnKeyDown(event, index)}
          ref={(ref: HTMLInputElement | null) => inputs.current[index] = ref}
          className={cn(styles.codeItem, {
            [styles.error]: error,
          })}
          maxLength={1}
          value={code[index] || ''}
        />
      ))}
    </div>
  );
});
