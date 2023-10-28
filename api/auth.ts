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

export const register = async (email: string, password: string, name: string, lastName: string, phone: string) => {
	const body = { email, password, name, lastName, phone };
	const { data } = await axios.post<TokenResponse>(url.account.auth.register, body);

	return data;
};

export const activate = async (email: string, code: number) => {
	const { data } = await axios.post<TokenResponse>(url.account.auth.activate, { email, code });

	return data;
}

export const googleOauth = async (code: string) => {
	const { data } = await axios.get<TokenResponse>(url.account.auth.google, { params: { code } });

	return data;
}
