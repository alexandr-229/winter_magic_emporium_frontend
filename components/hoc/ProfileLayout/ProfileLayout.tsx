import React from 'react';

import { ProfileHeader } from '@/components/large/ProfileHeader';
import { ProfileLayoutProps } from './ProfileLayout.types';

export const ProfileLayout = ({ children, ...props }: ProfileLayoutProps) => {
  return (
    <div {...props}>
      <ProfileHeader />
      {children}
    </div>
  );
};
