export const MENU_LIST = [
	{
		label: 'Men',
		route: { pathname: '/product' },
	},
	{
		label: 'Women',
		route: { pathname: '/product' },
	},
	{
		label: 'Kids',
		route: { pathname: '/product' },
	},
	{
		label: 'Sale',
		route: { pathname: '/product' },
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

// sale top menu
export const SALE = [
	{
		id: 1,
		label: 'Free shipping',
	},
	{
		id: 2,
		label: 'Up to 70% off sale styles. Auto-applied at checkout. ',
	},
	{
		id: 3,
		label: 'Free Shipping & Returns on Every Order ',
	},
	{
		id: 4,
		label: 'Up to 40% Off Sitewide. Prices as Marked. ',
	},
	{
		id: 5,
		label: "The Best Of SonTruong's® - Now On Our App ",
	},
] as const;
