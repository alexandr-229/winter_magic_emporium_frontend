import React, { FC } from 'react';

import { ProfileLayout } from './ProfileLayout';

export const profilePage = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return (props: T) => (
    <ProfileLayout>
      <Component {...props} />
    </ProfileLayout>
  );
};
