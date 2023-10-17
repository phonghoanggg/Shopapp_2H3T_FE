import PageOrder from '@/containers/order';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Order - SonTruong Us',
	description: 'Order',
};

export default function page() {
	return <PageOrder />;
}
