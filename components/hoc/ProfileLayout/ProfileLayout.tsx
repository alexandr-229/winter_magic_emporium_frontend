import React from 'react';

import { ProfileHeader } from '@/components/large/ProfileHeader';
import { ProfileTabs } from '@/components/large/ProfileTabs';
import { ProfileLayoutProps } from './ProfileLayout.types';

export const ProfileLayout = ({ children, ...props }: ProfileLayoutProps) => {
  return (
    <div {...props}>
      <ProfileHeader />
      <ProfileTabs />
      {children}
    </div>
  );
};
