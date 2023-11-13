import { User, getMe } from '@/api/user';
import { createStore } from '@/helpers/store';

interface UserStore {
	user: User | null;

	setUser: (user: User | null) => void;
	getUser: () => Promise<User | null>;
}

export const useUser = createStore<UserStore>((_, set) => ({
	user: null,
	setUser: (user: User | null) => {
		set({ user });
	},
	getUser: async () => {
		try {
			const response = await getMe();
			return response;
		} catch (e) {
			console.log('Failed to fetch user');
			console.log(e);
			return null;
		}
	},
}));
