'use client';

import React from 'react';

import { CartItem } from '@/components/large/CartItem';
import { PurchaseDescription } from '@/components/large/PurchaseDescription';
import { Loader } from '@/components/small/Loader';
import { useCart } from '@/store/cart';
import { useCartPage } from './useCartPage';
import styles from './styles.module.css';

const Cart = () => {
  const {
    data,
    isLoading,
    purchaseData,
    changeQuantity,
    deleteProductFromCart,
  } = useCartPage();
  const { productsData } = useCart();

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <Loader width={7} size={70} />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Cart</h1>
        <p className={styles.productsQuantity}>
          {`${purchaseData.totalProducts} ${purchaseData.totalProducts > 1 ? 'products' : 'product'}`}
        </p>
      </div>
      <main className={styles.main}>
        <div className={styles.products}>
          {data?.products.map((productItem) => (
            <CartItem
              size={`${productItem.product.size.value} ${productItem.product.size.unit}`}
              id={productItem.product._id}
              img={productItem.product.photos[0]}
              qtyInStock={productItem.product.quantity}
              quantity={productsData[productItem.product._id]?.quantity || 0}
              title={productItem.product.title}
              price={productItem.product.price}
              className={styles.product}
              setQuantity={(quantity) => changeQuantity(quantity, productItem.product._id)}
              onDelete={() => deleteProductFromCart(productItem.product._id)}
            />
          ))}
        </div>
        <PurchaseDescription
          totalProducts={purchaseData.totalProducts}
          totalPrice={purchaseData.totalPrice}
          discount={purchaseData.discount}
        />
      </main>
    </div>
  );
};

export default Cart;
