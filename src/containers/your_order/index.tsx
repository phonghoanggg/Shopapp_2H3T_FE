'use client';
// base
import Link from 'next/link';
import { useState } from 'react';
// redux
import { useAppSelector } from '@/redux/hook';
// components
import CustomImage from '@/compound/customImage/CustomImage';
import ButtonLink from '@/compound/demo-button/button-link/ButtonLink';
import Button from '@/compound/demo-button/button/Button';
// useQuery
import { useDeleteOrder, useGetAllOrder } from '@/query/order/handleOrder';
import { selectInformationUserLoginEmail } from '@/redux/auth/selectors';
import { useQueryClient } from 'react-query';
// types
import { Order } from '@/utils/type';
// lodash
import { map } from 'lodash';

const YourOrder = () => {
	// Use useDispatch and useSelector to get dispatch and state from Redux
	const queryClient = useQueryClient();
	// Get list of infor user from Redux
	const inforUser = useAppSelector(selectInformationUserLoginEmail);
	// Get data use react-query
	const { data: DATA_ORDER, isLoading: LOADING_ORDER, error: ERROR_ORDER } = useGetAllOrder();
	const { mutate: MUTATE_ORDER, isLoading: LOADING_DELETE_ORDER, error: ERROR_DELETE_ORDER } = useDeleteOrder();
	const FILTER_ORDERS = DATA_ORDER && DATA_ORDER.filter((order: Order) => order.userId === inforUser._id);
	const [deletedOrderId, setDeletedOrderId] = useState(null);
	const handleDeleteOrder = (orderId: any) => {
		MUTATE_ORDER(orderId, {
			onSuccess: () => {
				setDeletedOrderId(orderId);
				queryClient.invalidateQueries('orders');
			},
		});
	};

	return (
		<main className="container">
			<div
				className="bag-cart-box"
				style={{ marginTop: '60px' }}
			>
				<div className="shopping-cart-title-box">
					<h4 className="title _text-uppercase">Your Order</h4>
					<div className="qty">
						{DATA_ORDER ? DATA_ORDER.length : 0} item{DATA_ORDER && DATA_ORDER.length !== 1 ? 's' : ''}
					</div>
				</div>
				{LOADING_ORDER || LOADING_DELETE_ORDER ? (
					<div className="site-loading">
						<div className="chaotic-orbit"></div>
					</div>
				) : ERROR_ORDER ? (
					<div>Error</div>
				) : (
					DATA_ORDER && (
						<>
							{DATA_ORDER.length === 0 ? (
								<div className="empty">
									<p>There are no items in your order.</p>
									<div>
										<ButtonLink color="three">Shop Men</ButtonLink>
										<ButtonLink color="three">Shop Women</ButtonLink>
									</div>
								</div>
							) : (
								<table>
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Address</th>
											<th>Phone</th>
											<th>Items</th>
											<th>Total</th>
											<th>Status</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{map(FILTER_ORDERS as Order[], (order: Order) => (
											<tr key={order._id}>
												<td>{order.userId.slice(0, 8)}</td>
												<td>{order.name}</td>
												<td>{order.address}</td>
												<td>0{order.phone}</td>
												<td>
													{order.cartItems.map((cartItem: any) => (
														<div
															key={cartItem.productId._id}
															className="order-item"
														>
															<div className="image">
																<CustomImage
																	width={150}
																	height={150}
																	alt="order image-item"
																	src={cartItem.productId?.images?.[0] ?? ''}
																/>
															</div>
															<div className="desc">
																<Link href={`/product/${cartItem.productId._id}`}>
																	{cartItem.productId.name}
																</Link>
																<p>Quantity: {cartItem.quantity}</p>
																<span>Size: {cartItem.size}</span>
															</div>
														</div>
													))}
												</td>
												<td>{order.total}</td>
												<td>{order.status}</td>
												<td>
													<Button
														type="button"
														className="btn"
														onClick={() => handleDeleteOrder(order._id)}
														disabled={LOADING_DELETE_ORDER && deletedOrderId === order._id}
													>
														{LOADING_DELETE_ORDER && deletedOrderId === order._id
															? 'Deleting...'
															: 'Delete'}
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</>
					)
				)}
			</div>
		</main>
	);
};

export default YourOrder;
