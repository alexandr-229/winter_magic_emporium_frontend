import { Product } from '@/app/types';

export const useProduct = () => {
  const products: Product[] = [
    {
      _id: '1',
      photos: ['/uploads/2023-14-10/02:38:38.843-test-product.png'],
      title: 'Product',
      price: 100,
      discounts: 10,
      quantity: 1000,
      tag: '',
      new: false,
      popular: true,
      size: {
        value: 100,
        unit: 'm',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '2',
      photos: ['/uploads/2023-14-10/02:38:38.843-test-product.png'],
      title: 'Product',
      price: 100,
      discounts: 10,
      quantity: 1000,
      tag: '',
      new: false,
      popular: true,
      size: {
        value: 100,
        unit: 'm',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '3',
      photos: ['/uploads/2023-14-10/02:38:38.843-test-product.png'],
      title: 'Product',
      price: 100,
      discounts: 10,
      quantity: 1000,
      tag: '',
      new: false,
      popular: true,
      size: {
        value: 100,
        unit: 'm',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '4',
      photos: ['/uploads/2023-14-10/02:38:38.843-test-product.png'],
      title: 'Product',
      price: 100,
      discounts: 10,
      quantity: 1000,
      tag: '',
      new: false,
      popular: true,
      size: {
        value: 100,
        unit: 'm',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: '5',
      photos: ['/uploads/2023-14-10/02:38:38.843-test-product.png'],
      title: 'Product',
      price: 100,
      discounts: 10,
      quantity: 1000,
      tag: '',
      new: false,
      popular: true,
      size: {
        value: 100,
        unit: 'm',
      },
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return {
    products,
  };
};
