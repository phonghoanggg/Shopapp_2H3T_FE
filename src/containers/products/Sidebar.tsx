'use client';

import { useState } from 'react';
import { HiMinus, MdOutlineAdd } from '../../compound/icons/index';

const Sidebar = () => {
	const sizes: string[] = ['S', 'M', 'L', 'XL'];
	const [activeSize, setActiveSize] = useState<string | null>(null);
	const [showFilters, setShowFilters] = useState<boolean>(true);

	const handleSizeClick = (size: string) => {
		if (activeSize === size) {
			setActiveSize(null);
		} else {
			setActiveSize(size);
		}
	};

	const handleToggleFilter = () => {
		setShowFilters(!showFilters);
	};

	return (
		<aside className="sidebar-wrapper">
			<div className="sidebar-inner">
				<div
					className="sidebar-type"
					onClick={handleToggleFilter}
				>
					Size
					{showFilters ? <HiMinus size={20} /> : <MdOutlineAdd size={20} />}
				</div>
				{showFilters && (
					<div className="list-filter _text-uppercase">
						{sizes.map((size) => (
							<span
								key={size}
								className={activeSize === size ? '-active' : ''}
								onClick={() => handleSizeClick(size)}
							>
								{size}
							</span>
						))}
					</div>
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
