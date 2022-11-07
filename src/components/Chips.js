import Link from 'next/link';
import styles from '../styles/Chips.module.css';

export default function Chips({ items }) {

	return (
		<div className={styles.chips}>
			{items.map((item, i) => <Link href={item.url} key={item.slug}>{item.frontMatter.name}</Link>)}
		</div>
	)
}
