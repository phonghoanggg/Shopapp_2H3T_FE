import { ROUTER } from '@/utils/routes/routes';
import { ImageUrl } from '@/utils/type';
import Image from 'next/image';
import Link from 'next/link';
interface IProductProps {
	id?: string;
	images: ImageUrl[];
	name: string;
	price: number;
	discount?: number;
	newprice?: string;
	brand?: string;
	button?: string;
	slug?: string;
}
type ProductType = { 
	product: IProductProps;
}

const Product = ({ product }: ProductType) => {
	// Convert images to an array if it's a string
	const imageArray = product.images.map((item) => item.url)

	// When the figure has a quantity greater than 2, take the first element
	const imageUrl =
		imageArray && imageArray.length > 0
			? imageArray[0]
			: 'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/hinh-nen-trang-ban-do-the-gioi_104325245.jpg';

	console.log("product333",product)
	return (
		<div
			className="product"
			key={product.id}
		>
			<Link
				href={`/${ROUTER.PRODUCT_DETAIL}/${[product.slug]}`}
				as={`/${ROUTER.PRODUCT_DETAIL}/${product.slug}`}
				className="image"
			>
				<Image
					className="image-item"
					width={500}
					height={200}
					src={imageUrl}
					alt="image-item"
					loading="lazy"
				/>
				<button
					type="button"
					className="btn"
				>
					{product.button}
				</button>
			</Link>
			<div className="desc">
				<p className="brand _text-capitalize">{product.brand}</p>
				<Link
					href={`${ROUTER.PRODUCT_DETAIL}/${product.id}`}
					className="name"
				>
					{product.name}
				</Link>
				<p className="new-price">
					${product.price} <del className="old-price">${product.newprice}</del>
				</p>
				{/* <p className="sale">{product.newprice}</p> */}
			</div>
		</div>
	);
};

export default Product;
