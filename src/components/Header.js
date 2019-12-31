import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

function Heading({ location, children }) {
	const { pathname } = location;
	const rootPath = `${__PATH_PREFIX__}/`;

	return pathname === rootPath
		? (<h1 className="logo">{children}</h1>)
		: (<h3 className="logo">{children}</h3>)
}

function Header({ title, location }) {
	return (
		<header className="site-header">
			<Link to={'/'}>
				<Heading location={location}>
					{title}<span className="tld">.xyz</span>
				</Heading>
			</Link>
		</header>
	)
}

export default Header;