'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';

import styles from './styles.module.css';
import { useChangePassword } from './useChangePassword';

const OrderHistory = () => {
  const {
    isLoading,
    oldPassword,
    newPassword,
    confirmPassword,
    oldPasswordRef,
    newPasswordRef,
    confirmNewPasswordRef,
    setOldPassword,
    setNewPassword,
    setConfirmPassword,
    onSubmit,
  } = useChangePassword();

  return (
    <>
      <ToastContainer />
      <div>
        <h3 className={styles.title}>Change password</h3>
        <div className={styles.inputs}>
          <Input
            type="password"
            value={oldPassword}
            ref={oldPasswordRef}
            className={styles.input}
            placeholder="Enter old password"
            onChange={(event) => setOldPassword(event.target.value)}
          />
          <Input
            type="password"
            value={newPassword}
            ref={newPasswordRef}
            className={styles.input}
            placeholder="Enter new password"
            onChange={(event) => setNewPassword(event.target.value)}
          />
          <Input
            type="password"
            value={confirmPassword}
            className={styles.input}
            ref={confirmNewPasswordRef}
            placeholder="Confirm new password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <Button
          className={styles.button}
          loading={isLoading}
          onClick={onSubmit}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default profilePage(OrderHistory);
