import styles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiRss } from 'react-icons/fi';

export default function Header() {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				<nav>
					<Link href="/blog" passHref><a data-current={router.asPath === '/blog'}>Blog</a></Link>
					<Link href="/about" passHref><a data-current={router.asPath === '/about'}>About</a></Link>
					<Link href="/uses" passHref><a data-current={router.asPath === '/uses'}>Uses</a></Link>
					<Link href="/collections" passHref><a data-current={router.asPath === '/collections'}>Collections</a></Link>
					<a href="/rss.xml" aria-label="RSS Feed"><FiRss/></a>
				</nav>
			</div>
		</header>
	)
}
