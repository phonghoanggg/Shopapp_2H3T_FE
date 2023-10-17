import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

interface IProductProps {
	id?: number;
	image: string;
	name: string;
	price: number;
	oldPrice?: number;
	brand?: string;
	button?: string;
}

const Product = ({ id, image, name, price, oldPrice, brand, button }: IProductProps) => {
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
					src={image}
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
				<span className="name _text-capitalize">{name}</span>
				<span className="new-price">
					${price} <del className="old-price">${oldPrice}</del>
				</span>
				<span className="brand">{brand}</span>
			</Link>
		</div>
	);
};

export default Product;
