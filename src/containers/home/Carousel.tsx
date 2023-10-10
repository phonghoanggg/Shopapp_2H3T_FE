import { map } from 'lodash';
import { default as Image } from 'next/image';
import Link from 'next/link';
import { CAROUSEL } from './constains';

interface ICarouselProps {
	id: number;
	image: string;
	category: string;
}

const Carousel = () => {
	return (
		<section className="site-carousel ">
			<h6 className="title container">SEE IT ALL</h6>
			<div className="carousel-list container">
				{map(CAROUSEL, ({ id, image, category }: ICarouselProps) => (
					<div
						className="item"
						key={`carousel-${id}`}
					>
						<Link
							href="/"
							className="image"
						>
							<Image
								className="item"
								width={600}
								height={500}
								alt="Carousel"
								src={image}
							/>
						</Link>
						<Link
							href="/"
							className="desc"
						>
							<span>Shop/</span>
							{category}
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default Carousel;
