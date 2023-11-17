import { useCart } from '@/store/cart';
import { useMemo } from 'react';
import { PurchaseData } from './types';

export const useCartPage = () => {
  const { productsData } = useCart();

  const purchaseData = useMemo(() => {
    const result = Object.values(productsData).reduce<PurchaseData>((acc, productItem) => {
      acc.totalProducts += productItem.quantity;
      acc.totalPrice += productItem.quantity * productItem.price;
      acc.discount.sum += productItem.quantity * (productItem.price * productItem.discountPercent / 100);
      acc.discount.percent = acc.discount.sum / (acc.discount.sum + acc.totalPrice);

      return acc;
    }, {
      totalProducts: 0,
      totalPrice: 0,
      discount: {
        sum: 0,
        percent: 0,
      },
    });

    return result;
  }, [productsData]);

  return {
    purchaseData,
  };
};
