'use client';

import { useState } from 'react';
import { ActiveDescription } from './types';

export const useProductDescription = (sizes: string[]) => {
  const [activeDescription, setActiveDescription] = useState<ActiveDescription>(ActiveDescription.PAYMENT);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return {
    quantity,
    activeSize,
    activeDescription,
    setQuantity,
    setActiveSize,
    setActiveDescription,
  };
};
