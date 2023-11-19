import { url } from '@/helpers/api';
import { client } from './index';

export const pay = async (email: string) => {
	const { data } = await client.post(url.payment.pay, { email });
	return data;
};
