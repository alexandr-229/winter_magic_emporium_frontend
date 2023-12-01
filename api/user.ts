import { url } from '@/helpers/api';
import { client } from './index';
import { Product } from './product';

export enum OrderStatus {
	Delivered = 'Delivered',
	Processing = 'Processing',
	Completed = 'Completed',
}

export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    phone: string;
    level: number;
    photo?: string;
}

export interface Order {
    _id: string;
    products: Product[];
    createdAt: Date | string;
    index: number;
    sum: number;
    status: OrderStatus;
    paid: boolean;
}

export const getMe = async () => {
	const { data } = await client.get<User>(url.account.user.getMe);
	return data;
};

export const changeFavorite = async (productId: string, action: 'Add' | 'Delete') => {
    const { data } = await client.post<{ message: 'OK' }>(url.account.user.changeFavorite, {
        productId,
        action,
    });
    return data;
};

export const changeProfile = async (user: Partial<User>) => {
    const { data } = await client.put<{ message: 'OK' }>(url.account.user.changeProfile, user);
    return data;
};

export const getOrderHistory = async () => {
    const { data } = await client.get<Order[]>(url.account.user.getOrderHistory);
    return data;
};

export const getFavoriteProducts = async () => {
    const { data } = await client.get<Product[]>(url.account.user.getFavoriteProducts);
    return data;
};
