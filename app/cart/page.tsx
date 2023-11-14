'use client';

import React, { useState } from 'react';
import { CartItem } from '@/components/large/CartItem';

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <CartItem
        size="30m"
        id="123"
        img="/uploads/2023-14-10/02:41:45.655-Node.js_logo_2015.svg.png"
        qtyInStock={10}
        quantity={quantity}
        title="Title 1234"
        price={100}
      />
    </div>
  );
};

export default Cart;
