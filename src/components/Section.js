import styles from '../styles/Section.module.css';

export default function Section({children, layout = 'normal'}) {
	return (
		<section className={styles.section} data-layout={layout}>
			{children}
		</section>
	)
}
