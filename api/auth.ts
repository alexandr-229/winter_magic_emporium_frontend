import { url } from '@/helpers/api';
import axios from 'axios';

export interface TokenResponse {
	accessToken: string;
	id: string;
}

export const login = async (email: string, password: string) => {
	const { data } = await axios.post<TokenResponse>(url.account.auth.login, { email, password });

	return data;
};
