import { CombinedState } from '@reduxjs/toolkit';
import _, { map } from 'lodash';
import { useRef } from 'react';
import { GrFormClose, VscBell } from '../../compound/icons/index';
import { PRODUCT_LIST } from '../../containers/home/constants';
import ProductSale from './productSale';

const Sale = () => {
	// slice 8 products
	const PRODUCT_SALE = _.sampleSize(PRODUCT_LIST, 8);
	// redux
	const saleInnerRef = useRef<HTMLDivElement | null>(null);

	return (
		<section className="main-sale">
			{/* description */}
			<div
				className={`sale-wrapper `}
				ref={saleInnerRef}
			>
				<div></div>
				<div className="sale-top">
					<div className="title-box">
						<div className="title">
							<VscBell size={18} />
							Something you viewed is on sale!
						</div>
						<GrFormClose className="icon" />
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
function isOpenModalSale(
	state: CombinedState<{
		cart: { isOpen: boolean; cartItems: never[] };
		modal: { isOpenModalRegister: boolean; isOpenModalLogin: boolean; isOpenModalSale: boolean };
	}>,
): unknown {
	throw new Error('Function not implemented.');
}
