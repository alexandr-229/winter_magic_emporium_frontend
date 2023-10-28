import axios from 'axios';

export const client = axios.create({
	withCredentials: true,
});

client.interceptors.request.use((config) => {
	const token = localStorage.getItem('access_token');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
})
