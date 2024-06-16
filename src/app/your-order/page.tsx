import YourOrder from '@/containers/your_order';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Your Order - SonTruong Us',
	description: 'Order',
};

export default function page() {
	return <YourOrder />;
}
