import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import styles from '../styles/Logo.module.css';

export default function Logo({ size = 'base' }) {
	return (
		<Link href="/" className={size === 'base' ? `${styles.logo}` : `${styles.logo} ${styles['logo-sm']}`}>
			arkm
			<sup><FiHeart/></sup>
		</Link>
	)
}
