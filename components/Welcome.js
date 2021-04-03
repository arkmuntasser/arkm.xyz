import useIntersectionObserver from '@react-hook/intersection-observer';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Welcome.module.css';
import animations from '../styles/animations.module.css';

export default function Welcome() {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref);
	const [intersected, setIntersected] = useState(false);

	useEffect(function() {
		if (isIntersecting) {
			setIntersected(true);
		}
	}, [isIntersecting]);

	return (
		<section className={styles.welcome} ref={ref}>
			<div className={intersected ? `${animations.reveal} ${animations['reveal-loaded']}` : animations.reveal}>
				<div style={{ transitionDuration: `${400 + 80 * 1}ms` }}>
					<h1>Hello!</h1>
				</div>
				<p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>
					I’m Amir R Muntasser and I’m a <b>web developer</b>, <b>wizard</b>, and <b>shoe enthusiast</b> from Tucson, Arizona. I am the <b>Director of CMS Development</b> at <a href="https://simpleviewinc.com" rel="noreffer noopener" target="_blank">Simpleview</a>.
				</p>
				<p style={{ transitionDuration: `${400 + 80 * 3}ms` }}>
					Who would have thought that a young, Arab boy from the Southwest would one day grow up to be a winner of one the covetted <b>Vuenicorns</b> from the very first <b>VueConf Toronto</b> by building a shitty <a href="https://codepen.io/arkmuntasser/pen/QJvPeB" rel="noreffer noopener" target="_blank">clone of Simon</a>? No one, because that would have been absolutely wild for anyone to concieve and yet here we are and that's what happened.
				</p>
				<p style={{ transitionDuration: `${400 + 80 * 4}ms` }}>
					I don't even write code anymore, but I think about it a lot&hellip;
				</p>
			</div>
		</section>
	)
}
