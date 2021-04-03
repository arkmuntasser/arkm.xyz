import styles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				<nav>
					<Link href="/blog" passHref><a>Blog</a></Link>
					<Link href="/about" passHref><a>About</a></Link>
					<Link href="/uses" passHref><a>Uses</a></Link>
					<Link href="/collections" passHref><a>Collections</a></Link>
				</nav>
			</div>
		</header>
	)
}
