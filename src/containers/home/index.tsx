import SectionProducts from '@/components/SectionProducts';
import BannerSection from './BannerSection';
import Carousel from './Carousel';
import Content from './Content';
import Discovers from './Discovers';
import { PRODUCT_LIST } from './constains';

export default function Home() {
	return (
		<main className="home-page">
			<BannerSection
				footer="Discount auto-applied at checkout. Online & in select stores."
				className="bg-light-orang"
				title="30-70% OFF + FREE SHIPPING"
				subtitle="THE FRIENDS & FAMILY EVENT"
				description="Friendship, family and fantastic deals—your circle deserves it all. Online & in select stores. Prices as marked."
			/>
			<Content />
			<BannerSection
				title="EXTRA 50% OFF SALE"
				subtitle="SALE ON SALE"
				description="These savings burn fast and burn bright. Get them now before they’re gone."
				footer="Auto-applied at checkout. Online only."
			/>
			<SectionProducts
				title="STYLES YOU MAY LIKE"
				productList={PRODUCT_LIST}
			/>
			<Discovers />
			<SectionProducts
				title="BESTSELLERS WE RECOMMEND"
				productList={PRODUCT_LIST}
			/>
			<Carousel />
		</main>
	);
}
