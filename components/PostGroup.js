import Post from '../components/Post';
import styles from '../styles/Post.module.css';
import animations from '../styles/animations.module.css';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function PostGroup({ title, posts, viewAllCTA, viewAllHref }) {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref);

	const [intersected, setIntersected] = useState(false);

	useEffect(function() {
		if (isIntersecting) {
			setIntersected(true);
		}
	}, [isIntersecting]);

	return (
		<>
			{posts.length ? (
				<section ref={ref} className={styles['posts-container']}>
					<div>
						{title || viewAllHref
							? (
								<header className={intersected ? `${animations.reveal} ${animations['reveal-loaded']}` : animations.reveal}>
									{title ? <h2>{title}</h2> : null}
									{viewAllHref && viewAllCTA ? <div><Link href={viewAllHref} passHref><a>{viewAllCTA}</a></Link></div> : null}
								</header>
							)
							: null
						}
						<div className={intersected
							? `${styles.posts} ${animations.chain} ${animations['chain-loaded']}`
							: `${styles.posts} ${animations.chain}`}>
							{posts.map((post, i) => <Post data={post} key={post.slug} style={{ transitionDuration: `${240 + 80 * i}ms` }}/>)}
						</div>
					</div>
				</section>
			) : null}
		</>
	)
}
