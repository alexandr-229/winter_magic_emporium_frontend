'use client';

import React from 'react';

import { ProfileTab } from '@/components/small/ProfileTab';
import { ProfileTabsProps } from './types';
import { useProfileData } from './useProfileTabs';
import { tabsData } from './data';
import styles from './styles.module.css';

export const ProfileTabs = (props: ProfileTabsProps) => {
  const { activeTab, handleTabClick } = useProfileData();

  return (
    <div {...props}>
      {tabsData.map((tabData) => (
        <ProfileTab
          onClick={() => handleTabClick(tabData.alias)}
          isActive={activeTab === tabData.alias}
          className={styles.tab}
          text={tabData.text}
          Icon={tabData.icon}
        />
      ))}
    </div>
  );
};
