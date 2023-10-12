import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import styles from './styles.module.css';
import { Props } from './types';

export const Footer = ({ className, ...props }: Props) => {
  const bottomText = `© ${new Date().getFullYear()} Example - All rights reserved`;

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.links}>
        <div className={cn(styles.content, styles.linksContent)}>
          <div className={styles.block}>
            <div className={cn(styles.block, styles.contact)}>
              <Image
                className={styles.icon}
                src="/icons/phone.svg"
                alt="location"
                width={20}
                height={20}
              />
              <p className={styles.text}>
                <span className={styles.bold}>+38 063 145 13 75 </span>
                <span>(from 5:00 to 21:00)</span>
              </p>
            </div>
            <div className={styles.block}>
              <Image
                className={styles.icon}
                src="/icons/email.svg"
                alt="email"
                width={20}
                height={16}
              />
              <p className={cn(styles.text, styles.bold)}>Write us</p>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <Image
                className={cn(styles.icon, styles.pointer)}
                src="/icons/telegram.svg"
                alt="telegram"
                width={20}
                height={20}
              />
              <Image
                className={cn(styles.icon, styles.pointer)}
                src="/icons/github.svg"
                alt="telegram"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={cn(styles.mainContent)}>
          <div className={styles.textBlock}>
            <p className={styles.title}>Navigation</p>
            <p className={styles.info}>Questions</p>
            <p className={styles.info}>Contents</p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>For buyers</p>
            <p className={styles.info}>Catalog</p>
            <p className={styles.info}>Cart</p>
            <p className={styles.info}>Favorites products</p>
            <p className={styles.info}>Profile</p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>For partners</p>
            <p className={styles.info}>Pickup points</p>
            <p className={styles.info}>Customer Service</p>
            <p className={styles.info}>Wholesale</p>
            <p className={styles.info}>Main office</p>
            <p className={styles.info}>Press service</p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>Services</p>
            <p className={styles.info}>Delivery</p>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>Contact us</p>
            <p className={styles.info}>Contacts</p>
          </div>
        </div>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.content}>
          <p>{bottomText}</p>
          <p>By continuing to work with the site, you consent to the site&apos;s use of cookies and the processing of personal data for the purpose of site operation, retargeting, statistical research, service improvement and provision of relevant advertising information based on your preferences and interests.</p>
        </div>
      </div>
    </footer>
  );
};
