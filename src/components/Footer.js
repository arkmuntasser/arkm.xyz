import React from 'react';
import { Link } from 'gatsby';
import Bio from '../components/Bio';
import '../styles/footer.css';

function Footer() {
	return (
		<footer className="site-footer">
			<div className="inner">
				<Bio />
				<div className="links">
					<a
						className="footer-link"
						href="https://twitter.com/arkmuntasser"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
					<a
						className="footer-link"
						href="https://github.com/arkmuntasser"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<Link className="footer-link" to="/rss.xml">
						RSS
					</Link>
					<Link className="footer-link" to="/about">
						About Me
					</Link>
					<Link className="footer-link" to="/changelog">
						Changelog
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
