import { ROUTER } from '@/utils/routes/routes';
import Link from 'next/link';

const Logo = () => {
	return (
		<div>
			<Link href={ROUTER.HOME}>
				<div className="logo">SonTruong&#39;s</div>
			</Link>
		</div>
	);
};

export default Logo;
