import { client } from './index';
import { url } from '@/helpers/api';

export interface TokenResponse {
	accessToken: string;
	id: string;
}

export const login = async (email: string, password: string) => {
	const { data } = await client.post<TokenResponse>(url.account.auth.login, { email, password });

	return data;
};

export const register = async (email: string, password: string, name: string, lastName: string, phone: string) => {
	const body = { email, password, name, lastName, phone };
	const { data } = await client.post<TokenResponse>(url.account.auth.register, body);

	return data;
};

export const activate = async (email: string, code: number) => {
	const { data } = await client.post<TokenResponse>(url.account.auth.activate, { email, code });

	return data;
}

export const googleOauth = async (code: string) => {
	const { data } = await client.get<TokenResponse>(url.account.auth.google, { params: { code } });

	return data;
}

export const changePassword = async (oldPassword: string, newPassword: string) => {
	const { data } = await client.put(url.account.auth.changePassword, { oldPassword, newPassword });

	return data;
}

export const logout = async () => {
	const { data } = await client.post(url.account.auth.logout);

	return data;
}
