import React from 'react';
import cn from 'classnames';

import { ProfileHeader } from '@/components/large/ProfileHeader';
import { ProfileTabs } from '@/components/large/ProfileTabs';
import { ProfileLayoutProps } from './ProfileLayout.types';
import styles from './profile-layout.module.css';

export const ProfileLayout = ({ children, className, ...props }: ProfileLayoutProps) => {
  return (
    <div {...props} className={cn(styles.wrapper, className)}>
      <ProfileHeader />
      <main className={styles.main}>
        <ProfileTabs className={styles.tabs} />
        {children}
      </main>
    </div>
  );
};
