'use client';
// components
import { VideoSection } from '@/components/VideoSection';
// lodash
import { map } from 'lodash';
// contains
import { VIDEO_SECTIONS } from './constants';

const Discovers = () => {
	return (
		<section className="site-discover container">
			{map(VIDEO_SECTIONS, (section, index) => (
				<VideoSection
					key={index}
					{...section}
				/>
			))}
		</section>
	);
};

export default Discovers;
