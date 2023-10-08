import Button from '@/compound/button/Button';
import Image from 'next/image';
import BannerSrc from '../../assets/images/banner/banner1.avif';

const Content = () => {
	return (
		<section className="section-content">
			<Image
				className="image"
				width={1200}
				height={400}
				src={BannerSrc}
				alt="Banner"
				loading="lazy"
			/>

			<p className="title _text-center">You know it. You love it. You got to have it.</p>
			<div className="links container">
				<Button
					color="primary"
					className="_text-capitalize _text-center"
					type="button"
				>
					Shop Men
				</Button>
				<Button
					color="primary"
					className="_text-capitalize _text-center"
					type="button"
				>
					Shop women
				</Button>
			</div>
		</section>
	);
};

export default Content;
