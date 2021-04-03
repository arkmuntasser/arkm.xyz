import styles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';

export default function() {
	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				<nav>
					<Link href="/blog" passHref><a>Blog</a></Link>
					<Link href="/about" passHref><a>About</a></Link>
					<Link href="/uses" passHref><a>Uses</a></Link>
					<Link href="/shoes" passHref><a>Shoes</a></Link>
				</nav>
			</div>
		</header>
	)
}
