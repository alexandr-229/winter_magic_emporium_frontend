'use client';

import { useState } from 'react';
import { useUser } from '@/store/user';
import { useAuthModal } from '@/store/auth-modal';
import { ModalAlias } from '@/components/modals/auth/types';
import { ActiveDescription } from './types';

const { user } = useUser.getStore();
const { onOpenAuthModal } = useAuthModal.getStore();

export const useProductDescription = (sizes: string[], onAddToCart: (quantity: number) => void) => {
  const [activeDescription, setActiveDescription] = useState<ActiveDescription>(ActiveDescription.PAYMENT);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!user) {
      onOpenAuthModal(ModalAlias.LOGIN);
      return;
    }

    onAddToCart(quantity);
    setQuantity(1);
  };

  return {
    quantity,
    activeSize,
    activeDescription,
    setQuantity,
    setActiveSize,
    handleAddToCart,
    setActiveDescription,
  };
};
