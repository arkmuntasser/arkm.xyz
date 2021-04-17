import styles from '../styles/Hero.module.css';

function Callouts() {
	const deets = [
		{
			title: new Date().getFullYear() - 2010,
			description: 'Years as a professional web developer'
		},
		{
			title: '36 M',
			description: 'Cans of Pepsi drank'
		},
		{
			title: '3',
			description: 'Cats. Mercutio, Lady, and Pizza'
		},
	];

	return (
		<aside>
			{deets.map(({ title, description }, i) => (
				<div key={i}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			))}
		</aside>
	)
}

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div>
				<h1>Welcome</h1>
				<p>I’m Amir R Muntasser; I’m a web developer from Tucson, Arizona. I appreciate and enjoy working at all levels of the stack, but my heart belongs to the frontend.</p>
			</div>
			<Callouts/>
		</section>
	)
}
