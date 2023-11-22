'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { push } = useRouter();

  useEffect(() => {
    push('/profile/personal-data');
  }, []);

  return (
    <div />
  );
};

export default Profile;
