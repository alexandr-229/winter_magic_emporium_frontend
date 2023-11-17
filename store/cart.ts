import { createStore } from '@/helpers/store';
import { getCart } from '@/api/cart';
import { Product } from '@/api/product';
import { ProductData, CartState } from '../app/cart/types';

export const useCart = createStore<CartState>((get, set) => ({
  productsData: {},

  getCart: async () => {
    const response = await getCart();
    const productsData: Record<string, ProductData> = {};

    response.products.forEach((productItem) => {
      if (productsData[productItem.product._id]) {
        productsData[productItem.product._id].quantity += productItem.quantity;
      } else {
        productsData[productItem.product._id] = {
          quantity: productItem.quantity,
          price: productItem.product.price,
          discountPercent: productItem.product.discounts,
        };
      }
    });

    set({ productsData });
  },
  addProduct: (product: Product, quantity: number) => {
    const { productsData } = get();

    if (productsData[product._id]) {
      productsData[product._id].quantity += quantity;
    } else {
      productsData[product._id] = {
        quantity,
        price: product.price,
        discountPercent: product.discounts,
      };
    }

    set({ productsData });
  },
  deleteProduct: (productId: string, quantity: number) => {
    const { productsData } = get();

    if (!productsData[productId]) {
      return;
    }

    productsData[productId].quantity -= quantity;

    if (productsData[productId].quantity < 1) {
      delete productsData[productId];
    }

    set({ productsData });
  },
}));
