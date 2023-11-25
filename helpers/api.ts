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
			register: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
			activate: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/activate`,
			google: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/oauth`,
			refresh: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`,
			changePassword: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/password`,
			logout: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`,
		},
		user: {
			getMe: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/me`,
			changeFavorite: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/favorites`,
			changeProfile: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`,
		}
	},
	cart: {
		getCart: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/`,
		addProduct: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/product/`,
		deleteProduct: (id: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/${id}/`,
		editQuantity: (id: string) => `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cart/${id}/`,
	},
	payment: {
		pay:  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/pay/`,
	},
	files: {
		upload: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files/upload/`,
	}
};
