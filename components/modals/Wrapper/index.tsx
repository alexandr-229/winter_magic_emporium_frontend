import React, {
  useRef,
  forwardRef,
  ForwardedRef,
  useImperativeHandle,
} from 'react';
import styles from './styles.module.css';
import { WrapperModalRef } from './types';

export const Wrapper = forwardRef((
  { children }: { children: JSX.Element },
  ref: ForwardedRef<WrapperModalRef>,
) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    getWrapperRef: () => dialogRef,
  }));

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      {children}
    </dialog>
  );
});
