import Post from '../components/Post';
import styles from '../styles/Post.module.css';
import animations from '../styles/animations.module.css';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useRef } from 'react';
import Link from 'next/link';

export default function PostGroup({ title, posts, viewAllCTA, viewAllHref }) {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref)

	return (
		<>
			{posts.length ? (
				<section ref={ref} className={styles['posts-container']}>
					<div>
						{title || viewAllHref
							? (
								<header>
									{title ? <h2>{title}</h2> : null}
									{viewAllHref && viewAllCTA ?<Link href={viewAllHref} passHref><a>{viewAllCTA}</a></Link> : null}
								</header>
							)
							: null
						}
						<div className={isIntersecting
							? `${styles.posts} ${animations.chain} ${animations['chain-loaded']}`
							: `${styles.posts} ${animations.chain}`}>
							{posts.map((post, i) => <Post data={post} key={post.slug} style={{ transitionDelay: `${80 * i}ms` }}/>)}
						</div>
					</div>
				</section>
			) : null}
		</>
	)
}
