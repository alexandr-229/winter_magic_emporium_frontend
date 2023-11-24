import React from 'react';
import cn from 'classnames';

import { ProfileHeader } from '@/components/large/ProfileHeader';
import { ProfileTabs } from '@/components/large/ProfileTabs';
import { AvatarModal } from '@/components/modals/avatar';

import styles from './profile-layout.module.css';
import { ProfileLayoutProps } from './ProfileLayout.types';

export const ProfileLayout = ({ children, className, ...props }: ProfileLayoutProps) => {
  return (
    <>
      <div {...props} className={cn(styles.wrapper, className)}>
        <ProfileHeader />
        <main className={styles.main}>
          <ProfileTabs className={styles.tabs} />
          {children}
        </main>
      </div>
      <AvatarModal />
    </>
  );
};
