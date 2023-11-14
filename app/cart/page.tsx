'use client';

import React, { useState } from 'react';

import { CartItem } from '@/components/large/CartItem';
import { PurchaseDescription } from '@/components/large/PurchaseDescription';
import styles from './styles.module.css';

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Cart</h1>
        <p className={styles.productsQuantity}>5 products</p>
      </div>
      <main className={styles.main}>
        <div className={styles.products}>
          <CartItem
            size="30m"
            id="123"
            img="/uploads/2023-14-10/02:41:45.655-Node.js_logo_2015.svg.png"
            qtyInStock={10}
            quantity={quantity}
            title="Title 1234"
            price={100}
            className={styles.product}
          />
          <CartItem
            size="30m"
            id="123"
            img="/uploads/2023-14-10/02:41:45.655-Node.js_logo_2015.svg.png"
            qtyInStock={10}
            quantity={quantity}
            title="Title 1234"
            price={100}
            className={styles.product}
          />
          <CartItem
            size="30m"
            id="123"
            img="/uploads/2023-14-10/02:41:45.655-Node.js_logo_2015.svg.png"
            qtyInStock={10}
            quantity={quantity}
            title="Title 1234"
            price={100}
            className={styles.product}
          />
        </div>
        <PurchaseDescription
          totalProducts={20}
          totalPrice={1000}
          discount={{
            sum: 300,
            percent: 30,
          }}
        />
      </main>
    </div>
  );
};

export default Cart;
