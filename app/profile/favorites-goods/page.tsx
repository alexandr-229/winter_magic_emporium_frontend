'use client';

import React from 'react';

import { profilePage } from '@/components/hoc/ProfileLayout';
import { useFavoriteGoods } from './useFavoriteGoods';

const FavoriteGoods = () => {
  const { data, isError, isLoading } = useFavoriteGoods();

  return (
    <div>
      <p>Favorite</p>
    </div>
  );
};

export default profilePage(FavoriteGoods);
