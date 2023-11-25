'use client';

import { useLayoutEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import { Logger } from '@/helpers/logger';
import { logout } from '@/api/auth';
import { useUser } from '@/store/user';

import { TabAlias } from './types';
import { tabsData } from './data';

const { setUser } = useUser.getStore();

export const useProfileData = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabAlias>(TabAlias.ORDER_HISTORY);

  const onSuccess = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    window.location.href = '/';
  };

  const onError = () => {
    toast('Failed to logout', { theme: 'colored', type: 'error' });
  };

  const { mutate } = useMutation(() => logout(), { onError, onSuccess });

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
        mutate();
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
