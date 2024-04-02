import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { selectIsToggleModalSale } from '@/redux/modal/selector';
import { closeModalSale } from '@/redux/modal/slice';
import _, { map } from 'lodash';
import { useEffect, useRef } from 'react';
import { GrFormClose, VscBell } from '../../compound/icons/index';
import { PRODUCT_LIST } from '../../containers/home/constants';
import ProductSale from './ProductSale';

const Sale = () => {
	// slice 8 products
	const PRODUCT_SALE = _.sampleSize(PRODUCT_LIST, 8);
	// redux
	const dispatch = useAppDispatch();
	const IsToggleModalSale = useAppSelector(selectIsToggleModalSale);
	// ref saleInner
	const saleInnerRef = useRef<HTMLDivElement | null>(null);
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
			{/* description */}
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
				{/* product list sale */}
				<div className="sale-product-list _custom-scrollbar">
					{map(PRODUCT_SALE, (item) => (
						<ProductSale
							key={item.id}
							size="M"
							image={item.image}
							name={item.name}
							price={item.price}
							oldPrice={item.oldPrice}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Sale;
