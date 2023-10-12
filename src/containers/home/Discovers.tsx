'use client';
// components
import { VideoSection } from '@/components/VideoSection';
// lodash
import { map } from 'lodash';
// contains
import { VIDEOSECTIONS } from './constains';

const Discovers = () => {
	return (
		<section className="site-discover container">
			{map(VIDEOSECTIONS, (section, index) => (
				<VideoSection
					key={index}
					{...section}
				/>
			))}
		</section>
	);
};

export default Discovers;
