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
			<div className="image">
				<Image
					className="image-item"
					width={500}
					height={500}
					src={image}
					alt="image-item"
					loading="lazy"
				/>
				<Link
					href="#"
					className="btn"
				>
					{button}
				</Link>
			</div>
			<Link
				href="/"
				className="desc"
			>
				<p className="name _text-capitalize">{name}</p>
				<span className="new-price">
					${price} <del className="old-price">${oldPrice}</del>
				</span>
				<span className="brand">{brand}</span>
			</Link>
		</div>
	);
};

export default Product;
