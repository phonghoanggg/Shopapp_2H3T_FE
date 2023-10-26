import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

interface IProductProps {
	id?: number;
	image: string;
	name: string;
	price: number;
	oldPrice?: number;
	sale?: string;
	brand?: string;
	button?: string;
}

const Product = ({ id, image, name, price, oldPrice, sale, button, brand }: IProductProps) => {
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
				<span className="brand _text-capitalize">{brand}</span>
				<h6 className="name _text-capitalize">{name}</h6>
				<p className="new-price">
					${price} <del className="old-price">${oldPrice}</del>
				</p>
				<span className="sale">{sale}</span>
			</Link>
		</div>
	);
};

export default Product;
