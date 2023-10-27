'use client';

import { useState } from 'react';
import { ActiveDescription } from './types';

export const useProductDescription = (sizes: string[], totalQuantity: number) => {
  const [activeDescription, setActiveDescription] = useState<ActiveDescription>(ActiveDescription.PAYMENT);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => (quantity < totalQuantity ? setQuantity(quantity + 1) : null);

  const decrementQuantity = () => (quantity > 1 ? setQuantity(quantity - 1) : null);

  return {
    quantity,
    activeSize,
    activeDescription,
    setActiveSize,
    decrementQuantity,
    incrementQuantity,
    setActiveDescription,
  };
};
