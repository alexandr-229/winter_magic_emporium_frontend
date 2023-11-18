import { useCart } from '@/store/cart';
import { useMemo } from 'react';
import { PurchaseData } from './types';

export const useCartPage = () => {
  const { productsData } = useCart();

  const purchaseData = useMemo(() => {
    const result = Object.values(productsData).reduce<PurchaseData>((acc, productItem) => {
      const discountSum = productItem.price * productItem.discountPercent / 100;

      acc.totalProducts += productItem.quantity;
      acc.totalPrice += productItem.quantity * productItem.price;
      acc.discount.sum += productItem.quantity * (discountSum + productItem.price);

      return acc;
    }, {
      totalProducts: 0,
      totalPrice: 0,
      discount: {
        sum: 0,
        percent: 0,
      },
    });

    result.discount.percent = Math.max((result.discount.sum * 100 / result.totalPrice) - 100, 0);

    return result;
  }, [productsData]);

  return {
    purchaseData,
  };
};
