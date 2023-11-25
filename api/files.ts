import { client } from './index';
import { url } from '@/helpers/api';

export const uploadFile = async (body: FormData) => {
	const { data } = await client.post<{ path: string }>(url.files.upload, body);
	return data;
};
