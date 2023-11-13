import { useEffect } from 'react';

import { useAuthModal } from '../store';
import { SetInput } from '../types';

export const useClearInputs = (setInputs: SetInput[]) => {
  const { open } = useAuthModal();

  useEffect(() => {
    if (open) return;

    for (const setInput of setInputs) {
      setInput('');
    }
  }, [open]);
};
