import Footer from './Footer';
import styles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';

export default function Layout({ children }) {
	return (
		<div className={styles.layout}>
			<header className={headerStyles.header}>
				<div>
					<Logo/>
					<nav>
						<Link href="/about" passHref><a>About</a></Link>
						<Link href="/blog" passHref><a>Blog</a></Link>
						<Link href="/uses" passHref><a>Uses</a></Link>
					</nav>
				</div>
			</header>
			{children}
			<Footer/>
		</div>
	)
}
