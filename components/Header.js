import styles from '../styles/Header.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiRss } from 'react-icons/fi';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

export default function Header() {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const wWidth = useWindowWidth();
	// const [showMenuButton, setShowMenuButton] = useState(wWidth <= 640px &&)

	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				{wWidth <= 640 ? <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button> : null}
				{wWidth > 640 || menuOpen ? (
					<nav>
						<Link href="/blog" passHref><a data-current={router.asPath === '/blog'}>Blog</a></Link>
						<Link href="/weeknotes" passHref><a data-current={router.asPath === '/weeknotes'}>Weeknotes</a></Link>
						<Link href="/uses" passHref><a data-current={router.asPath === '/uses'}>Uses</a></Link>
						<Link href="/collections" passHref><a data-current={router.asPath === '/collections'}>Collections</a></Link>
						<Link href="/about" passHref><a data-current={router.asPath === '/about'}>About</a></Link>
						<a href="/rss.xml" aria-label="RSS Feed"><FiRss/></a>
					</nav>
				) : null}
			</div>
		</header>
	)
}
