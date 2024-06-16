import PageProfile from '@/containers/profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Shop All For Women Online | SonTruong VN',
	description: 'Clothing for Men | Women | Kids',
};

export default function ProductDetail() {
	return <PageProfile />;
}
