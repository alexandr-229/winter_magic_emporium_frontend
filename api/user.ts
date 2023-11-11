import { url } from '@/helpers/api';
import { client } from './index';

export interface User {
    id: string;
    email: string;
    name: string;
    lastName: string;
    phone: string;
    level: number;
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
