import { map } from 'lodash';
import Link from 'next/link';
import React from 'react';
import { MENU_FAVORITE } from './constants';

export default function PageProfile() {
	return (
		<main className="site-profile container">
			<div className="favorite-account">
				<ul className="account-navigation">
					{map(MENU_FAVORITE, ({ label, route }) => (
						<li
							key={label}
							className="nav-list-item"
						>
							<Link
								href={route}
								className="link"
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>From</div>
		</main>
	);
}
