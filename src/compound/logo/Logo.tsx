import { ROUTER } from '@/utils/routes/routes';
import Link from 'next/link';

const Logo = () => {
	return (
		<>
			<Link href={ROUTER.HOME}>
				<div className="logo">Hana&#39;s</div>
			</Link>
		</>
	);
};

export default Logo;
