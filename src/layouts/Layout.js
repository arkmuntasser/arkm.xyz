import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import '../styles/bootstrap-reboot.min.css';
import '../styles/global.css';
import '../styles/layout.css';
// import Portfolio from '../components/Portfolio';

function Layout(props) {
	const { location, title, children } = props;
	const { pathname } = location;
	const rootPath = `${__PATH_PREFIX__}/`;

	return (
		<div className="layout">
			<Header title={title} location={location} />
			<div className="container">
				{children}
				<Projects />
			</div>
			{/* {pathname === rootPath && (
				<Portfolio />
			)} */}
			<Footer />
		</div>
	)
}

export default Layout;
