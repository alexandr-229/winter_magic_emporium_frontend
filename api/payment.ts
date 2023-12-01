import { url } from '@/helpers/api';
import { client } from './index';

export const pay = async () => {
	const { data } = await client.get(url.payment.pay);
	return data;
};
