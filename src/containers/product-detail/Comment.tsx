import { RiVerifiedBadgeFill } from '../../compound/icons/index';

const Comment = () => {
	return (
		<section className="comment-wrapper container">
			<h6 className="title">Reviews</h6>
			<p className="qty-comment">1 – 8 of 1691 Reviews</p>
			<div className="write-review _border-bottom">
				<label
					htmlFor="comment"
					className="label"
				>
					Write review
				</label>
				<textarea
					name="comment"
					id="comment"
					className="field"
				/>
			</div>

			{/* commented lists */}

			<div className="comment-lists">
				<div className="comment-item _border-bottom">
					<h6 className="title">78 Yrs. and lookin good</h6>
					<p className="name">
						Truong Duc Hung Son
						<RiVerifiedBadgeFill className="icon" />
					</p>
					<p className="date">10 days ago</p>
					<p className="content">
						Finally Iv found jeans that fit my husband. These slim-fix-flex jeans fit. At 78 yrs. old he has
						a tummy so needs waist but hes slim in the fanny and upper leg. These jeans fit his physique.
					</p>
				</div>
				<div className="comment-item _border-bottom">
					<h6 className="title">78 Yrs. and lookin good</h6>
					<p className="name">
						Truong Duc Hung Son
						<RiVerifiedBadgeFill className="icon" />
					</p>
					<p className="date">10 days ago</p>
					<p className="content">
						Finally Iv found jeans that fit my husband. These slim-fix-flex jeans fit. At 78 yrs. old he has
						a tummy so needs waist but hes slim in the fanny and upper leg. These jeans fit his physique.
					</p>
				</div>
				<div className="comment-item _border-bottom">
					<h6 className="title">78 Yrs. and lookin good</h6>
					<p className="name">
						Truong Duc Hung Son
						<RiVerifiedBadgeFill className="icon" />
					</p>
					<p className="date">10 days ago</p>
					<p className="content">
						Finally Iv found jeans that fit my husband. These slim-fix-flex jeans fit. At 78 yrs. old he has
						a tummy so needs waist but hes slim in the fanny and upper leg. These jeans fit his physique.
					</p>
				</div>
				<div className="comment-item _border-bottom">
					<h6 className="title">78 Yrs. and lookin good</h6>
					<p className="name">
						Truong Duc Hung Son
						<RiVerifiedBadgeFill className="icon" />
					</p>
					<p className="date">10 days ago</p>
					<p className="content">
						Finally Iv found jeans that fit my husband. These slim-fix-flex jeans fit. At 78 yrs. old he has
						a tummy so needs waist but hes slim in the fanny and upper leg. These jeans fit his physique.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Comment;
