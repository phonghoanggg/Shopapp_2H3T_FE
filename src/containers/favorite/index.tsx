'use client';

import { useDeleteFavorite, useGetFavoriteByUser } from '@/query/favorite/handleApiFavorite';
import { selectInformationUserLoginEmail } from '@/redux/auth/selectors';
import { useAppSelector } from '@/redux/hook';
import { map } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useQueryClient } from 'react-query';
import { FaHeart, GrFormClose } from '../../compound/icons/index';
import { MENU_FAVORITE } from './constants';

const PageFavorite = () => {
	const queryClient = useQueryClient();
	const inforUser = useAppSelector(selectInformationUserLoginEmail);
	const userId = inforUser?._id || null;
	const {
		data: DATA_PRODUCT_FAVORITE_BY_USER,
		isLoading: LOADING_PRODUCT_FAVORITE_BY_USER,
		error: ERROR_PRODUCT_FAVORITE_BY_USER,
	} = useGetFavoriteByUser(userId as string);

	const { mutate: DELETE_FAVORITE_BY_USER_MUTATION, isLoading: DELETE_FAVORITE_BY_USER_LOADING } =
		useDeleteFavorite(userId);

	const handleDeleteFavorite = (productId: string) => {
		DELETE_FAVORITE_BY_USER_MUTATION(productId, {
			onSuccess: () => {
				queryClient.invalidateQueries(['favorite', userId]);
			},
		});
	};
	console.log(DATA_PRODUCT_FAVORITE_BY_USER);
	return (
		<main className="site-products-pag container">
			{/*navigation favorite */}
			<div className="favorite-account">
				<ul className="account-navigation">
					{map(MENU_FAVORITE, ({ label, route }) => (
						<li
							key={label}
							className="nav-list-item
"
						>
							<Link
								href={route}
								className="link"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				{/* favorite products list */}
				<div className="favorites-list-wrapper ">
					<div className="favorite-title">
						<div className="text">FAVORITES</div>
						<p className="value">4 items</p>
					</div>
					{LOADING_PRODUCT_FAVORITE_BY_USER || DELETE_FAVORITE_BY_USER_LOADING ? (
						<p>Loading...</p>
					) : (
						<div className="favorite-product-list">
							{/* render product favorite by user here */}
							{map(DATA_PRODUCT_FAVORITE_BY_USER, (item) => (
								<div className="favorite-item">
									<div className="product-image">
										<div className="slide-ratio">
											<Link
												className="cell-image-link"
												href="/"
											>
												<Image
													src={item?.productId?.images[0]}
													alt="image-product"
													width={600}
													height={500}
												/>
											</Link>
											<button
												type="button"
												className="favorite-button"
												onClick={() => handleDeleteFavorite(item.productId._id)}
											>
												<FaHeart className="icon" />
											</button>
										</div>
									</div>
									<div className="product-info">
										<div className="item-name">
											{item.productId.name} <GrFormClose className="icon" />
										</div>
										<div className="item-color">Pictorial - Light Wash - Stretch</div>
										<div className="item-size">30W X 30L</div>
										<div className="item-price">${item.productId.price}</div>
										<div className="promo-badge">Buy 2+, Get 30% Off: Applied at Checkout</div>
										<button className="add-to-bag-button">Add to Bag</button>
									</div>
								</div>
							))}
							{/* render product favorite by user here */}
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default PageFavorite;
