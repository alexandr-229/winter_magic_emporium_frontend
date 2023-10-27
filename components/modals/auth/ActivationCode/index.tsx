import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/small/Button';
import { CodeInput } from '@/components/small/CodeInput';
import styles from './styles.module.css';
import { authModalStore } from '../store';

const { onCloseAuthModal } = authModalStore.getStore();

export const ActivationCode = () => {
  const [code, setCode] = useState<string>('');

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
        <CodeInput code={code} setCode={setCode} codeLength={4} className={styles.codeInput} />
      </div>
      <Button className={styles.button}>
        Continue
      </Button>
      <div className={styles.iconsWrapper}>
        <p className={styles.iconTitle}>or</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
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
