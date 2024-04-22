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
