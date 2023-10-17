import PageCart from '@/containers/cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cart - SonTruong Us',
	description: 'Cart',
};

export default function page() {
	return <PageCart />;
}
