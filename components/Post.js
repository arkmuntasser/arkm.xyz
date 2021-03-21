import Link from 'next/link';
import { format } from 'date-fns';
import styles from '../styles/Post.module.css';

export default function Post({ data }) {
  return (
		<article className={styles.post}>
			<header>
				<time dateTime={data.frontMatter.date}>{format(new Date(data.frontMatter.date), 'MM.dd.yyyy')}</time>
				<Link href={data.url} passHref>
					<a>
						<h3 className="title">{data.frontMatter.title}</h3>
					</a>
				</Link>
			</header>
			<p>{data.frontMatter.excerpt}</p>
		</article>
  )
}
