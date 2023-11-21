import React from 'react';

import { ProfileLayoutProps } from './ProfileLayout.types';

export const ProfileLayout = ({ children, ...props }: ProfileLayoutProps) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};
