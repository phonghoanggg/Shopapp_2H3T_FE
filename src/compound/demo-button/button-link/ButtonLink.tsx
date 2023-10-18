import Link from 'next/link';

interface IButtonLinkProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonLink = ({ children, className }: IButtonLinkProps) => {
	return (
		<Link
			href="/"
			className={`site-button-link ${className}`}
		>
			{children}
		</Link>
	);
};

export default ButtonLink;
