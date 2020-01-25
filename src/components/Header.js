import React from 'react';
import { Link } from 'gatsby';
import { Unicorn as UnicornIcon } from '../components/Icons';
import '../styles/header.css';

function Heading({ title, location, children }) {
	const { pathname } = location;
	const rootPath = `${__PATH_PREFIX__}/`;

	return pathname === rootPath
		? (<h1 className="logo" aria-label={title}>{children}</h1>)
		: (<h3 className="logo" aria-label={title}>{children}</h3>)
}

function Header({ title, location }) {
	return (
		<header className="site-header">
			<Link to={'/'}>
				<Heading location={location} title={title}>
					<UnicornIcon />
				</Heading>
			</Link>
		</header>
	)
}

export default Header;
