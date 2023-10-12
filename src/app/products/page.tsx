import PageProducts from '@/containers/products';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shop All For Women Online | SonTruong VN',
	description: 'Clothing for Men | Women | Kids',
};

export default function page() {
	return <PageProducts />;
}
