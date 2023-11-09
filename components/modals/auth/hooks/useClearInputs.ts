import { useEffect } from 'react';

import { Subscriber } from '@/helpers/store';
import { authModalStore } from '../store';
import { AuthModalStore, SetInput } from '../types';

export const useClearInputs = (setInputs: SetInput[]) => {
  useEffect(() => {
    const handler = (store: AuthModalStore) => {
      if (!store.open) {
        for (const setInput of setInputs) {
          setInput('');
        }
      }
    };

    const subscriber = new Subscriber(handler);
    authModalStore.subscribe(subscriber);

    return () => {
      authModalStore.unsubscribe(subscriber.id);
    };
  }, []);
};
