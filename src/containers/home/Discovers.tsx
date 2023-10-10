'use client';

import Link from 'next/link';

const Discovers = () => {
	return (
		<section className="site-discover container">
			<div className="discover-wrapper ">
				<div className="video">
					<video
						controls
						width={500}
						height={500}
						autoPlay
						loop
						muted
						playsInline
					>
						<source
							src="https://lscoecomm.scene7.com/is/content/lscoecomm/23-September-US---501-Vogue-Content_SITE_V2-0x1080-4991k"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="desc">
					<h4 className="title _text-uppercase">YOUR 501® STORY</h4>
					<p className="content">
						We’ve partnered with PhotoVogue to celebrate 150 years of 501®—a canvas of self expression,
						beliefs and personalities.
					</p>
					<div className="links">
						<Link href="/">Shop Now</Link>
						<Link href="/">Discover more</Link>
					</div>
				</div>
			</div>
			<div className="discover-wrapper ">
				<div className="video">
					<video
						controls
						width={500}
						height={500}
						autoPlay
						loop
						muted
						playsInline
					>
						<source
							src="https://lscoecomm.scene7.com/is/content/lscoecomm/23-September-US---501-Vogue-Content_SITE_V2-0x1080-4991k"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="desc">
					<h4 className="title _text-uppercase">YOUR 501® STORY</h4>
					<p className="content">
						We’ve partnered with PhotoVogue to celebrate 150 years of 501®—a canvas of self expression,
						beliefs and personalities.
					</p>
					<div className="links">
						<Link href="/">Shop Now</Link>
						<Link href="/">Discover more</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discovers;
