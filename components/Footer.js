import styles from '../styles/Footer.module.css';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import Logo from './Logo';

export default function Footer() {
  return (
		<footer className={styles.footer}>
			<hr data-symbol="⊛"/>
			<div>
				<p>Codes on <a href="https://github.com/arkmuntasser" target="_blank" rel="noopener noreferrer"><span style={{backgroundColor: '#000'}}><FiGithub/></span> GitHub</a>. Shitposts on <a href="https://twitter.com/arkmuntasser" target="_blank" rel="noopener noreferrer"><span style={{backgroundColor: '#1da1f2'}}><FiTwitter/></span> Twitter</a>.</p>
				<p><Logo size="sm"/> &copy; 2010 - {new Date().getFullYear()}</p>
			</div>
		</footer>
  )
}
