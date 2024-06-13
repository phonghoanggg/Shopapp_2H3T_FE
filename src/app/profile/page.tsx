import { Metadata } from 'next';
import React from 'react';
import PageProfile from '../../containers/profile/index';

export const metadata: Metadata = {
	title: 'Shop All For Women Online | SonTruong VN',
	description: 'Clothing for Men | Women | Kids',
};

export default function ProductDetail() {
	return <PageProfile />;
}
