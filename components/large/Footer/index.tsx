import React from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { Props } from './types';
import TelegramIcon from './telegram.svg';
import GitHubIcon from './github.svg';

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
              <a className={styles.text} href="telto:380631451375">
                <span className={styles.bold}>+38 063 145 13 75 </span>
                <span>(from 5:00 to 21:00)</span>
              </a>
            </div>
            <div className={styles.block}>
              <Image
                className={styles.icon}
                src="/icons/email.svg"
                alt="email"
                width={20}
                height={16}
              />
              <a className={cn(styles.text, styles.bold)} href="mailto:ivanpolarus2009@gmail.com">Write us</a>
            </div>
          </div>
          <div>
            <div className={styles.block}>
              <Link href="https://t.me/SashaPoliarush" target="_blank">
                <TelegramIcon className={cn(styles.icon, styles.pointer, styles.hoverIcon)} />
              </Link>
              <a href="https://github.com/alexandr-229" target="_blank">
                <GitHubIcon className={cn(styles.icon, styles.pointer, styles.large, styles.hoverIcon)} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={cn(styles.mainContent)}>
          <div className={styles.textBlock}>
            <p className={styles.title}>Navigation</p>
            <Link href="/question" className={styles.info}>Questions</Link>
            <Link href="/contacts" className={styles.info}>Contents</Link>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>For buyers</p>
            <Link href="/catalog" className={styles.info}>Catalog</Link>
            <Link href="/cart" className={styles.info}>Cart</Link>
            <Link href="/favorite" className={styles.info}>Favorites products</Link>
            <Link href="/profile" className={styles.info}>Profile</Link>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>For partners</p>
            <Link href="/" className={styles.info}>Pickup points</Link>
            <Link href="/" className={styles.info}>Customer Service</Link>
            <Link href="/" className={styles.info}>Wholesale</Link>
            <Link href="/" className={styles.info}>Main office</Link>
            <Link href="/" className={styles.info}>Press service</Link>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>Services</p>
            <Link href="/" className={styles.info}>Delivery</Link>
          </div>
          <div className={styles.textBlock}>
            <p className={styles.title}>Contact us</p>
            <Link href="/contacts" className={styles.info}>Contacts</Link>
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
