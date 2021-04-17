import Link from 'next/link';
import { format } from 'date-fns';
import styles from '../styles/Post.module.css';

export default function Post({ data, style, type }) {
	const [year, month, day] = data.frontMatter.date.split('-');
	const date = new Date(parseInt(year), (parseInt(month) - 1), parseInt(day));
	const correctedDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

  return (
		<article className={styles[type]} style={style}>
			<header>
				<time dateTime={data.frontMatter.date}>{format(correctedDate, 'MM.dd.yyyy')}</time>
				<Link href={data.url} passHref>
					<a>
						<h3 className="title">{data.frontMatter.title}</h3>
					</a>
				</Link>
			</header>
			{data.frontMatter.excerpt ? (
				<p>{data.frontMatter.excerpt}</p>
			) : null}
		</article>
  )
}
