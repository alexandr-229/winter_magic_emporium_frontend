import React, { useEffect, useRef } from 'react';

import { useAvatarModal } from '@/store/avatar-modal';

import styles from './styles.module.css';
import { Wrapper } from '../Wrapper';
import { WrapperModalRef } from '../Wrapper/types';
import { Header } from './header';
import { Content } from './content';

const { setDialog } = useAvatarModal.getStore();

export const AvatarModal = () => {
  const dialogRef = useRef<WrapperModalRef>(null);

  useEffect(() => {
    const dialog = dialogRef.current?.getWrapperRef();

    if (dialog?.current) {
      setDialog(dialog.current);
    }
  }, []);

  return (
    <Wrapper ref={dialogRef}>
      <div className={styles.modal}>
        <Header />
        <Content />
      </div>
    </Wrapper>
  );
};
