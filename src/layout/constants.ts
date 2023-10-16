export const MENU_LIST = [
	{
		label: 'Men',
		route: { pathname: '/products', query: { gender: 'men' } },
	},
	{
		label: 'Women',
		route: { pathname: '/products', query: { gender: 'women' } },
	},
	{
		label: 'Kids',
		route: { pathname: '/products', query: { gender: 'kids' } },
	},
	{
		label: 'Sale',
		route: { pathname: '/products', query: { discount: true } },
	},
] as const;

export const FOOTER_LIST = [
	{
		label: 'Special Discounts',
		link: [
			{
				pathname: 'Teacher Discount',
			},
			{
				pathname: 'Military Discount',
			},
			{
				pathname: 'Medical & First Responder',
			},
			{
				pathname: 'Student Discount',
			},
			{
				pathname: 'Red Tab™ Member Program',
			},
		],
	},
	{
		label: 'Support',
		link: [
			{
				pathname: 'Help',
			},
			{
				pathname: 'Returns & Exchanges',
			},
			{
				pathname: 'Shipping',
			},
			{
				pathname: 'Track Order',
			},
			{
				pathname: 'Payments Accepted',
			},
			{
				pathname: 'Gift Cards',
			},
			{
				pathname: 'Unsubscribe',
			},
		],
	},
	{
		label: 'Company',
		link: [
			{
				pathname: 'About Us',
			},
			{
				pathname: 'Our Values',
			},
			{
				pathname: 'Sustainability',
			},
			{
				pathname: 'Careers',
			},
			{
				pathname: 'Affiliate Program',
			},
			{
				pathname: 'Submit Your Idea',
			},
		],
	},
	{
		label: 'Store',
		link: [
			{
				pathname: 'Find a Store',
			},
			{
				pathname: 'Levis® Tailor Shop',
			},
			{
				pathname: 'Medical & First Responder',
			},
			{
				pathname: 'Student Discount',
			},
			{
				pathname: 'Red Tab™ Member Program',
			},
		],
	},
	{
		label: 'Our Brands',
		link: [
			{
				pathname: 'SonTruongs®',
			},
			{
				pathname: 'Dockers®',
			},
			{
				pathname: 'Denizen®',
			},
			{
				pathname: 'Signature by Levi Strauss & Co.™',
			},
			{
				pathname: 'Red Tab™ Member Program',
			},

			{
				pathname: 'Beyond Yoga',
			},
		],
	},
];
