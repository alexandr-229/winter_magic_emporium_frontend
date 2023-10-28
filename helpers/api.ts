export const url = {
	product: {
		all: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/all`,
		promotional: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/promotional`,
		new: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/new`,
		product: (id: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/${id}`,
		similar: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/similar`,
		popular: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/popular`,
	},
	account: {
		auth: {
			login: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
		},
		user: {
			getMe: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/me`,
		}
	}
};
