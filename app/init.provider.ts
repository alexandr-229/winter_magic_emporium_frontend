'use client';

import { ReactNode, useEffect } from 'react';
import { useUser } from '@/store/user';
import { useCart } from '@/store/cart';
import { Logger } from '@/helpers/logger';

const { getUser, setUser } = useUser.getStore();
const { getCart } = useCart.getStore();

export const InitProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const user = await getUser();
      setUser(user);

      await getCart();
    } catch (e) {
      Logger.error('Filed to fetch initial application data', { module: 'NextJS Application' });
      Logger.error(e, { module: 'NextJS Application' });
    }
  };

  return children;
};
