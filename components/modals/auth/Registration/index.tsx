import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';
import styles from './styles.module.css';
import { authModalStore } from '../store';
import { ModalAlias, ModalProps } from '../types';
import { useRegistration } from './useRegistration';

const { onCloseAuthModal } = authModalStore.getStore();

export const Registration = ({ openModal }: ModalProps) => {
  const {
    name,
    email,
    phone,
    password,
    lastName,
    setName,
    onSubmit,
    setEmail,
    setPhone,
    setPassword,
    setLastName,
    nameInputRef,
    emailInputRef,
    phoneInputRef,
    lastNameInputRef,
    passwordInputRef,
  } = useRegistration(openModal);

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
          placeholder="Enter your first name"
          className={styles.input}
          value={name}
          onChange={(event) => setName(event.target.value)}
          ref={nameInputRef}
        />
        <Input
          placeholder="Enter your last name"
          className={styles.input}
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          ref={lastNameInputRef}
        />
        <Input
          placeholder="Enter your email"
          className={styles.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          ref={emailInputRef}
        />
        <Input
          placeholder="Enter your phone number"
          className={styles.input}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          ref={phoneInputRef}
        />
        <Input
          placeholder="Create your password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          ref={passwordInputRef}
        />
      </div>
      <p className={styles.smallText}>
        Already have an account?
        {' '}
        <span
          className={styles.underline}
          onClick={() => openModal(ModalAlias.LOGIN, {})}
        >
          Log In
        </span>
      </p>
      <Button className={styles.button} onClick={onSubmit}>
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
