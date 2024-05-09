import { Key } from 'react';

export type Product = {
	id: Key | null | undefined;
	totalProducts?: any;
	_id?: string;
	name?: string;
	description?: string;
	price?: number;
	discount?: number;
	category?: string;
	images?: string[];
	stock?: number;
	size?: string[] | string;
	ratings?: number[];
	quantity?: number;
	discountPrice?: number;
};
export type Category = {
	_id: string;
	image: string;
	name: string;
};

export type ProductDetail = {
	_id: string;
	name: string;
	description: string;
	price: number;
	discount: number;
	category: {
		_id: string;
		name: string;
		image: string;
		createdAt: string;
		updatedAt: string;
		__v: number;
	};
	images: string[];
	stock: number;
	size: string[];
	ratings: any[];
};

export type Order = {
	filter(arg0: (order: Order) => boolean): unknown;
	length: number;
	_id: string;
	userId: string;
	name: string;
	address: string;
	phone: number;
	cartItems: CartItem[];
	total: number;
	status: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
};

export type CartItem = {
	productId: Product;
	quantity: number;
	_id: string;
};
