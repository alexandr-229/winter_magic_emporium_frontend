'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { Input } from '@/components/small/Input';
import { Button } from '@/components/small/Button';
import styles from './styles.module.css';
import { usePersonalData } from './usePersonalData';
import { SET_LAST_NAME, SET_NAME, SET_PHONE } from './consts';

const PersonalData = () => {
  const {
    refs,
    state,
    loading,
    dispatch,
    onSubmit,
  } = usePersonalData();

  return (
    <>
      <ToastContainer />
      <div>
        <h2 className={styles.title}>Personal data</h2>
        <div className={styles.inputs}>
          <Input
            placeholder="Enter your name"
            className={styles.input}
            value={state.name}
            ref={refs.name}
            onChange={(event) => dispatch({ type: SET_NAME, payload: event.target.value })}
          />
          <Input
            placeholder="Enter your last name"
            className={styles.input}
            value={state.lastName}
            ref={refs.lastName}
            onChange={(event) => dispatch({ type: SET_LAST_NAME, payload: event.target.value })}
          />
          <Input
            placeholder="+38 (096) ___ __ __"
            className={styles.input}
            value={state.phone}
            ref={refs.phone}
            onChange={(event) => dispatch({ type: SET_PHONE, payload: event.target.value })}
          />
        </div>
        <Button className={styles.save} onClick={onSubmit} loading={loading}>Save</Button>
      </div>
    </>
  );
};

export default profilePage(PersonalData);
