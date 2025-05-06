import { ROUTER } from '@/utils/routes/routes';
import { ImageUrl } from '@/utils/type';
import Image from 'next/image';
import Link from 'next/link';

type ProductType = { 
	id: string;
	images: ImageUrl[];
	name: string;
	price: number;
	discount: number;
	newprice: number;
	brand: string;
	button?: string;
	slug: string;
}

const Product = (product : ProductType) => {
	// Convert images to an array if it's a stringß
	const imageArray = product && product?.images?.map((item) => item.url) || []
	console.log("imageArray1111",product,imageArray, typeof(product.newprice))
	// When the figure has a quantity greater than 2, take the first element
	const imageUrl =
		imageArray && imageArray.length > 0
			? imageArray[0]
			: 'https://img2.thuthuatphanmem.vn/uploads/2018/11/30/hinh-nen-trang-ban-do-the-gioi_104325245.jpg';

	console.log("product333",imageUrl)
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
					${product.newprice} <del className="old-price">${product.price}</del>
				</p>
				{/* <p className="sale">{product.newprice}</p> */}
			</div>
		</div>
	);
};

export default Product;
