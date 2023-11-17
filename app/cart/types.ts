import { Product } from '@/api/product';

export interface ProductData {
  quantity: number;
  price: number;
  discountPercent: number;
}

export interface PurchaseData {
  totalProducts: number;
  totalPrice: number;
  discount: {
    sum: number;
    percent: number;
  };
}

export interface CartState {
  productsData: Record<string, ProductData>;

  getCart: () => Promise<void>;
  addProduct: (product: Product, quantity: number) => void;
  deleteProduct: (productId: string, quantity: number) => void;
}
