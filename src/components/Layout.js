import { Inter } from '@next/font/google';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css'

const inter = Inter({ weight: ['400', '700', '900'] });
const layoutClass = `${styles.layout} ${inter.className}`;

export default function Layout({ children }) {
	return (
		<div className={layoutClass}>
			<Header/>
			{children}
			<Footer/>
		</div>
	)
}
