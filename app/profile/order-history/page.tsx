'use client';

import React from 'react';

import { profilePage } from '@/components/hoc/ProfileLayout';
// import { useOrderHistory } from './useOrderHistory';

const OrderHistory = () => {
  // const {} = useOrderHistory();

  return (
    <div>
      <p>Order history</p>
    </div>
  );
};

export default profilePage(OrderHistory);
