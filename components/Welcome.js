import styles from '../styles/Welcome.module.css';

export default function Welcome() {
	return (
		<section className={styles.welcome}>
			<div>
				<div>
					<h1>Hello!</h1>
				</div>
				<p>
					I’m Amir R Muntasser and I’m a <b>web developer</b>, <b>wizard</b>, and <b>shoe enthusiast</b> from Tucson, Arizona. I am the <b>Director of CMS Development</b> at <a href="https://simpleviewinc.com" rel="noreffer noopener" target="_blank">Simpleview</a>.
				</p>
				<p>
					Who would have thought that a young, Arab boy from the Southwest would one day grow up to be a winner of one the covetted <b>Vuenicorns</b> from the very first <b>VueConf Toronto</b> by building a shitty <a href="https://codepen.io/arkmuntasser/pen/QJvPeB" rel="noreffer noopener" target="_blank">clone of Simon</a>? No one, because that would have been absolutely wild for anyone to concieve and yet here we are and that's what happened.
				</p>
				<p>
					I don't even write code anymore, but I think about it a lot&hellip;
				</p>
			</div>
		</section>
	)
}
