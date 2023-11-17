import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/small/Button';
import { CodeInput } from '@/components/small/CodeInput';
import { Loader } from '@/components/small/Loader';
import styles from './styles.module.css';
import { useAuthModal } from '../../../../store/auth-modal';
import { useActivationCode } from './useActivationCode';
import { ModalProps } from '../types';
import { googleOauth } from '../helpers';

const { onCloseAuthModal } = useAuthModal.getStore();

export const ActivationCode = ({ extraArgs }: ModalProps) => {
  const {
    code,
    loading,
    setCode,
    codeInputRef,
    handleSubmit,
  } = useActivationCode(extraArgs);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.title}>Welcome</p>
        <Image
          onClick={onCloseAuthModal}
          className={styles.close}
          src="/icons/close.svg"
          alt="close"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.codeInputWrapper}>
        <CodeInput
          code={code}
          setCode={setCode}
          codeLength={4}
          className={styles.codeInput}
          ref={codeInputRef}
        />
      </div>
      <Button className={styles.button} onClick={handleSubmit}>
        {loading ? (
          <Loader
            size={14}
            width={3}
            color="black"
            backgroundColor="transparent"
          />
        ) : 'Continue'}
      </Button>
      <div className={styles.iconsWrapper}>
        <p className={styles.iconTitle}>or</p>
        <div className={styles.icons}>
          <div className={styles.icon} onClick={googleOauth}>
            <Image
              src="/icons/google.svg"
              alt="google"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
