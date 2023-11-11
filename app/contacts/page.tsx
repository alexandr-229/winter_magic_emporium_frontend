import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import styles from './styles.module.css';
import GitHubIcon from './github.svg';
import TelegramIcon from './telegram.svg';

const Contacts = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.contact}>
        <Image
          className={styles.icon}
          src="/icons/phone-yellow.svg"
          alt="phone"
          width={20}
          height={20}
        />
        <p className={styles.contactText}>+38 063 145 13 75</p>
      </div>
      <div className={styles.contact}>
        <Image
          className={styles.icon}
          src="/icons/email-yellow.svg"
          alt="phone"
          width={20}
          height={20}
        />
        <p className={styles.contactText}>ivanpolarus@gmail.com</p>
      </div>
      <h3 className={styles.socialMediaTitle}>We are on social media networks</h3>
      <div className={styles.socialMedias}>
        <a href="https://t.me/SashaPoliarush" target="_blank">
          <TelegramIcon className={styles.socialMedia} />
        </a>
        <a href="https://github.com/alexandr-229" target="_blank">
          <GitHubIcon className={cn(styles.socialMedia, styles.large)} />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
