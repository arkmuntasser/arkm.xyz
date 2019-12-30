import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/bootstrap-reboot.min.css';
import '../styles/global.css';
import '../styles/layout.css';

function Layout(props) {
	const { location, title, children } = props;

	return (
		<div className="layout">
			<Header title={title} location={location} />
			<div className="container">
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout;
