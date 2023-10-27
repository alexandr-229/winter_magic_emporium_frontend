import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';
import styles from './styles.module.css';
import { authModalStore } from '../store';

const { onCloseAuthModal } = authModalStore.getStore();

export const Registration = () => {
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
      <div className={styles.inputs}>
        <Input placeholder="Enter your first name" className={styles.input} />
        <Input placeholder="Enter your last name" className={styles.input} />
        <Input placeholder="Enter your email" className={styles.input} />
        <Input placeholder="Enter your phone number" className={styles.input} />
        <Input placeholder="Create your password" className={styles.input} type="password" />
      </div>
      <p className={styles.smallText}>
        Already have an account?
        {' '}
        <span className={styles.underline}>Log In</span>
      </p>
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
