import Link from 'next/link';
import styles from '../styles/Chips.module.css';
import animations from '../styles/animations.module.css';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useEffect, useRef, useState } from 'react';

export default function Chips({ items }) {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref);

	const [intersected, setIntersected] = useState(false);

	useEffect(function() {
		if (isIntersecting) {
			setIntersected(true);
		}
	}, [isIntersecting]);

	return (
		<div
			ref={ref}
			className={intersected
				? `${styles.chips} ${animations.chain} ${animations['chain-loaded']}`
				: `${styles.chips} ${animations.chain}`}
		>
			{items.map((item, i) => <Link href={item.url} passHref key={item.slug}><a style={{ transitionDuration: `${240 + 40 * i}ms` }}>{item.frontMatter.name}</a></Link>)}
		</div>
	)
}
