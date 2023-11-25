import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { useAvatarModal } from '@/store/avatar-modal';

import styles from './styles.module.css';
import { Props } from './types';

const { onCloseAvatarModal } = useAvatarModal.getStore();

export const Header = ({ className, ...props }: Props) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <p>Photo</p>
      <Image
        onClick={onCloseAvatarModal}
        className={styles.close}
        src="/icons/close.svg"
        alt="close"
        width={24}
        height={24}
      />
    </div>
  );
};
