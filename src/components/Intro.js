import React from 'react';
import { Twitter as TwitterIcon, Github as GithubIcon } from '../components/Icons';
import '../styles/intro.css';

function Intro() {
	return (
		<section className="intro">
			<h1 className="title">
				<span>Welcome</span>
			</h1>
			<p>
				I’m Amir R Muntasser; I’m a <strong>web developer</strong> from <strong>Tucson, Arizona</strong>.
				I appreciate and enjoy working at all levels of the stack, but my heart belongs to the frontend.
			</p>
			<div className="social-links">
				<a
					className="social-link"
					href="https://twitter.com/arkmuntasser"
					target="_blank"
					rel="noopener noreferrer"
				>
					<TwitterIcon />
					Twitter
				</a>
				<a
					className="social-link"
					href="https://github.com/arkmuntasser"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon />
					GitHub
				</a>
			</div>
		</section>
	)
}

export default Intro;
