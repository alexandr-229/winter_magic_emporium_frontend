import { url } from '@/helpers/api';
import { client } from './index';
import { ProductTag } from '@/components/large/Slider/types';
import { Filters } from '@/components/large/Filters/types';

export interface GetProductsResponse {
	data: Product[];
	pagination: Pagination;
}
  
export interface Product {
	_id: string;
	photos: string[];
	title: string;
	price: number;
	discounts: number;
	quantity: number;
	tag: ProductTag;
	new: boolean;
	popular: boolean;
	size: Size;
	createdAt: Date;
	updatedAt: Date;
	description: string;
	isFavorite: boolean;
}
  
export interface Size {
	value: number;
	unit: string;
}
  
export interface Pagination {
	total: number;
	pages: number;
	page: number;
}

export const getPromotionalProducts = async () => {
	const { data } = await client.get<GetProductsResponse>(url.product.promotional, {
		params: {
			limit: 5,
		},
	});

	return data.data;
};

export const getNewProducts = async () => {
	const { data } = await client.get<Product[]>(url.product.new, {
		params: {
			limit: 5,
		},
	});

	return data;
};

export const getProduct = async (id: string) => {
	const { data } = await client.get<Product | null>(url.product.product(id));
	return data;
};

export const getPopularProducts = async () => {
	const { data } = await client.get<Product[]>(url.product.popular);
	return data;
};

export const getSimilarProducts = async (price: number, sizeUnit: string, sizeValue: number) => {
	const body = {
		price,
		sizeUnit,
		sizeValue,
	};

	const { data } = await client.post<Product[]>(url.product.similar, body);
	return data;
};

export const getProducts = async (filters: Filters, page: number) => {
	const { data } = await client.post<GetProductsResponse>(url.product.all, {
		page,
		limit: 12,
		sort: [
			{
				key: filters.orderKey,
				value: filters.orderValue,
			},
		],
	});

	return data;
};
