import { ROUTER } from '@/utils/routes/routes';
import Link from 'next/link';

interface IButtonLinkProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonLink = ({ children, className }: IButtonLinkProps) => {
	return (
		<Link
			href={ROUTER.PRODUCTS}
			className={`site-button-link ${className}`}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
