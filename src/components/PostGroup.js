import Post from '../components/Post';
import styles from '../styles/Post.module.css';
import Link from 'next/link';

export default function PostGroup({ title, posts, viewAllCTA, viewAllHref, type = 'post' }) {
	return (
		<section className={styles['posts-container']}>
			<div>
				{title || viewAllHref
					? (
						<header>
							{title ? <h2>{title}</h2> : null}
							{viewAllHref && viewAllCTA ? <div><Link href={viewAllHref}>{viewAllCTA}</Link></div> : null}
						</header>
					)
					: null
				}
				<div className={styles.posts} data-layout={type}>
					{posts.length
						? posts.map((post, i) => (<Post
								data={post}
								type={type}
								key={post.slug}
							/>))
						: <p>There are no posts available at this time.</p>}
				</div>
			</div>
		</section>
	)
}
