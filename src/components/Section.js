import styles from '../styles/Section.module.css';
import animations from '../styles/animations.module.css';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useEffect, useRef, useState } from 'react';

export default function Section({children, layout = 'normal'}) {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref);

	const [intersected, setIntersected] = useState(false);

	useEffect(function() {
		if (isIntersecting) {
			setIntersected(true);
		}
	}, [isIntersecting]);

	return (
		<section ref={ref} className={intersected ? `${styles.section} ${animations.reveal} ${animations['reveal-loaded']}` : `${styles.section} ${animations.reveal}`} data-layout={layout}>
			{children}
		</section>
	)
}
