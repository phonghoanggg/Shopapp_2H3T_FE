export const LoadingSkeletonCategory = () => {
	return (
		<div className="loading-skeleton">
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					key={index}
					className="category-item-skeleton"
				>
					<div className="card is-loading">
						<div className="image"></div>
						<div className="content">
							<h2></h2>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
