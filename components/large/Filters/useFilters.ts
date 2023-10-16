'use client';

import { useState } from 'react';

export const useFilters = () => {
  const [titleOpen, setTitleOpen] = useState<boolean>(true);
  const [priceOpen, setPriceOpen] = useState<boolean>(true);
  const [newOpen, setNewOpen] = useState<boolean>(true);

  const options = [
    { key: 'asc', value: 'A-Z' },
    { key: 'desc', value: 'Z-A' },
  ];

  return {
    options,
    titleOpen,
    priceOpen,
    newOpen,
    setTitleOpen,
    setPriceOpen,
    setNewOpen,
  };
};
