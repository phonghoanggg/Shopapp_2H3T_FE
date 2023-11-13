import { ROUTER } from '@/utils/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

interface IProductSaleModalProps {
	image: string;
	id?: number;
	name: string;
	size?: string;
	price: number;
	oldPrice?: number;
}

const ProductSale = ({ image, name, size, price, oldPrice, id }: IProductSaleModalProps) => {
	return (
		<div
			className="product-sale-item"
			key={id}
		>
			<Link
				href={ROUTER.PRODUCT_DETAIL}
				className="image"
			>
				<Image
					width={500}
					height={500}
					src={image}
					alt="Product sale"
				/>
			</Link>
			<div className="desc">
				<Link
					href={ROUTER.PRODUCT_DETAIL}
					className="name"
				>
					{name}
				</Link>
				<p className="size">{size}</p>
				<p className="price">
					${price} <del>${oldPrice}</del>
				</p>
			</div>
		</div>
	);
};

export default ProductSale;
