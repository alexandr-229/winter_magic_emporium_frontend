'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';

import styles from './styles.module.css';

const OrderHistory = () => {
  return (
    <>
      <ToastContainer />
      <div>
        <h3 className={styles.title}>Change password</h3>
        <div className={styles.inputs}>
          <Input className={styles.input} placeholder="Enter old password" />
          <Input className={styles.input} placeholder="Enter new password" />
          <Input className={styles.input} placeholder="Confirm new password" />
        </div>
        <Button className={styles.button}>Save</Button>
      </div>
    </>
  );
};

export default profilePage(OrderHistory);
