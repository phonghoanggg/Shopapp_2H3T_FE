import Link from 'next/link';
import { GrFormNext, GrFormPrevious } from '../../compound/icons/index';

const Pagination = () => {
	return (
		<div className="pagination-wrapper">
			<button className="button">
				<GrFormPrevious size={20} /> <p className="label">Prev</p>
			</button>
			<div className="pagination-list">
				<Link
					href="/"
					className="item -active"
				>
					1
				</Link>
				<Link
					href="/"
					className="item "
				>
					2
				</Link>
				<Link
					href="/"
					className="item "
				>
					3
				</Link>
				<Link
					href="/"
					className="item "
				>
					4
				</Link>
				<Link
					href="/"
					className="item "
				>
					5
				</Link>
			</div>
			<button
				type="button"
				className="button"
			>
				<span className="label">Next</span> <GrFormNext size={20} />
			</button>
		</div>
	);
};

export default Pagination;
