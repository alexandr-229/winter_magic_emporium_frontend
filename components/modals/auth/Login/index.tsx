import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';
import { Loader } from '@/components/small/Loader';
import styles from './styles.module.css';
import { authModalStore } from '../store';
import { ModalAlias, ModalProps } from '../types';
import { useLogin } from './useLogin';
import { googleOauth } from '../helpers';

const { onCloseAuthModal } = authModalStore.getStore();

export const Login = ({ openModal }: ModalProps) => {
  const {
    email,
    loading,
    password,
    emailInputRef,
    passwordInputRef,
    setEmail,
    onSubmit,
    setPassword,
  } = useLogin();

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
        <Input
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          ref={emailInputRef}
        />
        <Input
          placeholder="Enter your password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          ref={passwordInputRef}
        />
      </div>
      <p className={styles.smallText}>
        Don&apos;t have an account?
        {' '}
        <span
          className={styles.underline}
          onClick={() => openModal(ModalAlias.REGISTRATION, {})}
        >
          Sign Up
        </span>
      </p>
      <Button className={styles.button} onClick={onSubmit}>
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
