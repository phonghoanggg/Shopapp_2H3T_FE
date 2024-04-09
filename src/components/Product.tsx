import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

interface IProductProps {
	id?: number;
	images: string;
	name: string;
	price: number;
	discount?: number;
	sale?: string;
	brand?: string;
	button?: string;
}

const Product = ({ id, images, name, price, discount, sale, button, brand }: IProductProps) => {
	// When the figure has a quantity greater than 2, take the first element
	const imageUrl = images && images.length > 0 ? images[0] : '';
	// Calculate discounted price
	const discountedPrice = discount ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);

	return (
		<div
			className="product"
			key={id}
		>
			<Link
				href={ROUTER.PRODUCT_DETAIL}
				className="image"
			>
				<Image
					className="image-item"
					width={500}
					height={500}
					src={imageUrl}
					alt="image-item"
					loading="lazy"
				/>
				<button
					type="button"
					className="btn"
				>
					{button}
				</button>
			</Link>
			<Link
				href={ROUTER.PRODUCT_DETAIL}
				className="desc"
			>
				<span className="brand _text-capitalize">{brand}</span>
				<h6 className="name">{name}</h6>
				<p className="new-price">
					${discountedPrice} <del className="old-price">${price}</del>
				</p>
				<span className="sale">{sale}</span>
			</Link>
		</div>
	);
};

export default Product;
