'use client'

import styles from '../styles/Header.module.css';
import animations from '../styles/animations.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FiRss } from 'react-icons/fi';
import { useState } from 'react';
import useMedia from '../hooks/useMedia';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isWide = useMedia('(min-width: 40em)');

	return (
		<header className={styles.header}>
			<div>
				<Logo/>
				{!isWide ? <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="menu">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button> : null}
				<nav
					id="menu"
					className={ (isWide || menuOpen) ? `${animations.popup} ${animations['popup-loaded']}` : animations.popup}
				>
					<Link href="/blog">Blog</Link>
					<Link href="/weaknotes">Weaknotes</Link>
					<Link href="/uses">Uses</Link>
					<Link href="/collections">Collections</Link>
					<Link href="/about">About</Link>
					<a href="/rss-all.xml" aria-label="RSS Feed"><FiRss/></a>
				</nav>
			</div>
		</header>
	)
}
