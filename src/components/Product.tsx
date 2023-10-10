import Image from 'next/image';
import Link from 'next/link';

interface IProductProps {
	id?: number;
	image: string;
	name: string;
	price: string;
	oldPrice?: string;
}

const Product = ({ image, name, price, oldPrice }: IProductProps) => {
	return (
		<div className="product">
			<Link
				href="/"
				className="image"
			>
				<Image
					width={500}
					height={500}
					src={image}
					alt="product-item"
				/>
			</Link>
			<Link
				href="/"
				className="desc"
			>
				<p className="name _text-capitalize">{name}</p>
				<span className="new-price">
					${price} <del className="old-price">${oldPrice}</del>
				</span>
			</Link>
		</div>
	);
};

export default Product;
