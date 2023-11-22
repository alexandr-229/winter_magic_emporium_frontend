'use client';

import { useLayoutEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { Logger } from '@/helpers/logger';
import { TabAlias } from './types';
import { tabsData } from './data';

export const useProfileData = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabAlias>(TabAlias.ORDER_HISTORY);

  useLayoutEffect(() => {
    const tabData = tabsData.find((tab) => tab.url === pathname);

    if (tabData) {
      setActiveTab(tabData.alias);
    }
  }, [pathname]);

  const handleTabClick = (alias: TabAlias) => {
    switch (alias) {
      case TabAlias.ORDER_HISTORY:
      case TabAlias.FAVORITE_GOODS:
      case TabAlias.PERSONAL_DATA:
      case TabAlias.CHANGE_PASSWORD: {
        const tabData = tabsData.find((tab) => tab.alias === alias);

        if (tabData) {
          router.push(tabData.url);
        }

        break;
      }
      case TabAlias.LOGOUT: {
        // Logout
        break;
      }
      default: {
        Logger.log(`Unknown tab alias: ${alias}`);
      }
    }
  };

  return {
    activeTab,
    handleTabClick,
  };
};
