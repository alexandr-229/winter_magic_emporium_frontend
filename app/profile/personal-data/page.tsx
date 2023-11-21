import { profilePage } from '@/components/hoc/ProfileLayout';
import React from 'react';

const PersonalData = () => {
  return (
    <div>
      <p>Personal data</p>
    </div>
  );
};

export default profilePage(PersonalData);
