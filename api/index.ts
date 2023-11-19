import { url } from '@/helpers/api';
import axios from 'axios';

export const client = axios.create({
	withCredentials: true,
});

const LOCAL_STORAGE_TOKEN_KEY = 'access_token';

client.interceptors.request.use((config) => {
	const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

client.interceptors.response.use((config) => config, async (error) => {
	if (error?.response?.status === 401) {
		const originalRequest = error.config;
		const { data } = await axios.post(url.account.auth.refresh, {}, { withCredentials: true });
		if (data.accessToken) {
			localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, data.accessToken);
			return client.request(originalRequest);
		}
	}
});
