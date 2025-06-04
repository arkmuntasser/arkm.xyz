import styles from '../styles/Footer.module.css';
import { FiGithub, FiTwitter } from 'react-icons/fi';
import { RiBlueskyLine } from "react-icons/ri";
import Logo from './Logo';

export default function Footer() {
  return (
		<footer className={styles.footer}>
			<hr data-symbol="⊛"/>
			<div>
				<p>Codes on <a href="https://github.com/arkmuntasser" target="_blank" rel="noopener noreferrer"><span style={{backgroundColor: '#000'}}><FiGithub/></span> GitHub</a>. Shitposts on <a href="https://bsky.app/profile/arkmuntasser.com" target="_blank" rel="noopener noreferrer"><span style={{backgroundImage: 'linear-gradient(135deg, rgb(90, 113, 250), rgb(0, 133, 255))'}}><RiBlueskyLine/></span> Bluesky</a>.</p>
				<p><Logo size="sm"/> &copy; 2010 - {new Date().getFullYear()}</p>
			</div>
		</footer>
  )
}
