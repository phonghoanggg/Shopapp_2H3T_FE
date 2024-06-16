import { useProductsQuery } from '@/query/products/getDataProducts';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectIsToggleModalSale } from '@/redux/modal/selector';
import { closeModalSale } from '@/redux/modal/slice';
import { Product } from '@/utils/type';
import { map, sampleSize } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import { GrFormClose, VscBell } from '../../compound/icons/index';
import ProductSale from './ProductSale';

const Sale = () => {
	const { data: DATA_PRODUCTS } = useProductsQuery();
	const [randomProducts, setRandomProducts] = useState<Product[]>([]);
	const dispatch = useAppDispatch();
	const IsToggleModalSale = useAppSelector(selectIsToggleModalSale);
	const saleInnerRef = useRef<HTMLDivElement | null>(null);

	const getRandomProducts = (products: Product[]) => {
		return sampleSize(products, 8);
	};

	useEffect(() => {
		if (DATA_PRODUCTS) {
			setRandomProducts(getRandomProducts(DATA_PRODUCTS));
		}

		const intervalId = setInterval(() => {
			if (DATA_PRODUCTS) {
				setRandomProducts(getRandomProducts(DATA_PRODUCTS));
			}
		}, 3600000); // 1 hour

		return () => clearInterval(intervalId);
	}, [DATA_PRODUCTS]);

	const closeModalIfOutsideClick = (event: MouseEvent) => {
		if (saleInnerRef.current && !saleInnerRef.current.contains(event.target as Node)) {
			dispatch(closeModalSale());
		}
	};

	useEffect(() => {
		if (IsToggleModalSale) {
			document.addEventListener('click', closeModalIfOutsideClick);
		} else {
			document.removeEventListener('click', closeModalIfOutsideClick);
		}

		return () => {
			document.removeEventListener('click', closeModalIfOutsideClick);
		};
	}, [IsToggleModalSale]);

	return (
		<section className="main-sale">
			<div
				className={`sale-wrapper ${IsToggleModalSale ? '_show' : ''}`}
				ref={saleInnerRef}
			>
				<div></div>
				<div className="sale-top">
					<div className="title-box">
						<div className="title">
							<VscBell size={18} />
							Something you viewed is on sale!
						</div>
						<GrFormClose
							className="icon"
							onClick={() => dispatch(closeModalSale())}
						/>
					</div>
				</div>
				<div className="sale-product-list _custom-scrollbar">
					{map(randomProducts, (item: Product) => (
						<ProductSale
							key={item._id}
							id={item._id}
							images={item.images && item.images.length > 0 ? item.images : ['']}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sale;
