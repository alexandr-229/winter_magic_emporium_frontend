import React, { useRef, useEffect } from 'react';
import { Wrapper } from '../Wrapper';
import { authModalStore } from './store';
import { WrapperModalRef } from '../Wrapper/types';

const { setDialog } = authModalStore.getStore();

export const AuthModal = () => {
  const dialogRef = useRef<WrapperModalRef>(null);

  useEffect(() => {
    const dialog = dialogRef.current?.getWrapperRef().current;

    if (dialog) {
      setDialog(dialog);
    }
  }, []);

  return (
    <Wrapper ref={dialogRef}>
      <div />
    </Wrapper>
  );
};
