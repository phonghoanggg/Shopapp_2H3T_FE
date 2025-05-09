import ButtonLink from '@/compound/demo-button/button-link/ButtonLink';

const Content = () => {
	return (
		<section className="section-content">
			<div className="section-content-wrapper">
				<video
					className="video"
					autoPlay
					muted
					loop
					playsInline
				>
					<source
						src="https://sustainability.dolcegabbana.com/wp-content/uploads/2024/12/dolce-and-gabbana-sustainability-home-page-video-banner-desk.mp4"
						type="video/webm"
					/>
					Your browser does not support the video tag.
				</video>
				<div className="text-wrap">
					<h1 className='text-top'>Our Sustainability Journey</h1>
					<h2 className='text-bot'>A commitment to crafting a more responsible future </h2>
				</div>
			</div>
			<p className="title _text-center">You know it. You love it. You got to have it.</p>
			<div className="links container">
				<ButtonLink className="site-button _text-capitalize _text-center">Shop Men</ButtonLink>
				<ButtonLink className="site-button _text-capitalize _text-center">Shop women</ButtonLink>
			</div>
		</section>
	);
};

export default Content;
