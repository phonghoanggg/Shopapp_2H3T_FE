import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface VideoSectionProps {
	videoSrc: string;
	title: string;
	content: string;
}

export const VideoSection = ({ videoSrc, title, content }: VideoSectionProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}, []);

	return (
		<div className="discover-wrapper">
			<div className="video">
				<video
					controls
					width={500}
					height={500}
					autoPlay
					loop
					ref={videoRef}
					muted
					playsInline
				>
					<source
						src={videoSrc}
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="desc">
				<h4 className="title _text-uppercase">{title}</h4>
				<p className="content">{content}</p>
				<div className="links">
					<Link href="/">Shop Now</Link>
					<Link href="/">Discover more</Link>
				</div>
			</div>
		</div>
	);
};
