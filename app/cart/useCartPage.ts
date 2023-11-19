import { useQuery, useQueryClient } from 'react-query';
import { useCart } from '@/store/cart';
import { getCart } from '@/api/cart';
import { PurchaseData } from './types';

export const useCartPage = () => {
  const { productsData, addProduct, deleteProduct } = useCart();
  const { data, isLoading, isError } = useQuery('cart', getCart);
  const queryClient = useQueryClient();

  const purchaseData = (() => {
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
  })();

  const changeQuantity = (quantity: number, productId: string) => {
    const product = data?.products.find((productItem) => productItem.product._id === productId)?.product;

    if (!product) {
      return;
    }

    const lastQuantity = productsData[productId]?.quantity || 0;
    const action = lastQuantity <= quantity ? 'add' : 'remove';

    if (action === 'add') {
      addProduct(product, quantity - lastQuantity);
    } else {
      deleteProduct(productId, lastQuantity - quantity);

      if (quantity === 0) {
        queryClient.invalidateQueries(['cart']);
      }
    }
  };

  const deleteProductFromCart = (productId: string) => {
    const lastQuantity = productsData[productId]?.quantity || 0;

    deleteProduct(productId, lastQuantity);
    queryClient.invalidateQueries(['cart']);
  };

  return {
    data,
    isError,
    isLoading,
    purchaseData,
    changeQuantity,
    deleteProductFromCart,
  };
};
