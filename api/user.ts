import { url } from '@/helpers/api';
import { client } from './index';

export const getMe = async () => {
	const { data } = await client.get(url.account.user.getMe);
	return data;
};
