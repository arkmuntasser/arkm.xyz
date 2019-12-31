import React from 'react';
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
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
					Twitter
				</a>
				<a
					className="social-link"
					href="https://github.com/arkmuntasser"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
					GitHub
				</a>
			</div>
		</section>
	)
}

export default Intro;