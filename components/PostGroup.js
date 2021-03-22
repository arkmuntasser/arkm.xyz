import Post from '../components/Post';
import styles from '../styles/Post.module.css';
import animations from '../styles/animations.module.css';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { useRef } from 'react';

export default function PostGroup({ title, posts }) {
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref)

	return (
		<>
			{posts.length ? (
				<section ref={ref} className={styles['posts-container']}>
					<h2>{title}</h2>
					<div className={isIntersecting
						? `${styles.posts} ${animations.chain} ${animations['chain-loaded']}`
						: `${styles.posts} ${animations.chain}`}>
						{posts.map((post, i) => <Post data={post} key={post.slug} style={{ transitionDelay: `${80 * i}ms` }}/>)}
					</div>
				</section>
			) : null}
		</>
	)
}
