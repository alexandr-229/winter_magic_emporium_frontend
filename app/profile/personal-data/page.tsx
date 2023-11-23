'use client';

import React from 'react';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';
import styles from './styles.module.css';

const PersonalData = () => {
  return (
    <div>
      <h2 className={styles.title}>Personal data</h2>
      <div className={styles.inputs}>
        <Input placeholder="Enter your name" className={styles.input} />
        <Input placeholder="Enter your last name" className={styles.input} />
        <Input placeholder="+38 (096) ___ __ __" className={styles.input} />
        <Input placeholder="E-mail" className={styles.input} />
      </div>
      <Button className={styles.save}>Save</Button>
    </div>
  );
};

export default profilePage(PersonalData);
