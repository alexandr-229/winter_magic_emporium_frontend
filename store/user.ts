import { User, getMe } from '@/api/user';
import { Store } from '@/helpers/store';

interface UserStore {
	user: User | null;

	setUser: (user: User | null) => void;
	getUser: () => Promise<User | null>;
}

export const userStore = new Store<UserStore>((_, set) => ({
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
