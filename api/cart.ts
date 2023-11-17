import { url } from '@/helpers/api';
import { client } from './index';
import { Product } from './product';

interface Cart {
	_id: string;
	user: string;
	products: {
		product: Product;
		quantity: number;
	}[];
}

export const getCart = async () => {
	const { data } = await client.get<Cart>(url.cart.getCart);
	return data;
}

export const addProduct = async (productId: string, quantity: number) => {
	const { data } = await client.post<Cart>(url.cart.addProduct, { productId, quantity });
	return data;
};

export const deleteProduct = async (productId: string) => {
	const { data } = await client.delete(url.cart.deleteProduct(productId));
	return data;
};

export const editQuantity = async (productId: string, quantity: number) => {
	const { data } = await client.put(url.cart.editQuantity(productId), { quantity });
	return data;
};
