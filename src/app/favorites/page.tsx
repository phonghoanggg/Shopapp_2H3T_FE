import PageFavorite from '@/containers/favorite';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Favorite - SonTruong Us',
	description: 'Favorite',
};

export default function page() {
	return <PageFavorite />;
}
