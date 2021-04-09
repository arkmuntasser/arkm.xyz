import styles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
				</nav>
			</div>
		</header>
	)
}
