import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import styles from '../styles/PostPage.module.css';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import panelStyles from '../styles/Panels.module.css';
import ImageBox from '../components/ImageBox';
import { useRef } from 'react';
import useLoadInAnimation from '../hooks/useLoadInAnimation';
import animations from '../styles/animations.module.css';

function TwoCol({ children }) {
	return (
		<section className={panelStyles.twocol}>
			{children}
		</section>
	)
}

function SmallCol({ children }) {
	return (
		<section className={panelStyles.smallcol}>
			{children}
		</section>
	)
}

function Collection({ items }) {
	return (
		<section className={styles.collection}>
			{items.map((item, i) => (
				<article key={i}>
					<h3>
						<a href={item.link} rel="noopener noreferer" target="_blank">
							{item.title}
						</a>
					</h3>
					<img src="https://via.placeholder.com/100x75" alt="" />
				</article>
			))}
		</section>
	)
}

export default function Page({ page }) {
	const ref = useRef(null);
	const content = useHydrate(page, {
		components: {
			TwoCol,
			ImageBox,
			SmallCol,
			Collection,
		}
	});

	const runAnimation = useLoadInAnimation(ref, content);

	return (
		<Layout>
			<Meta title={page.frontMatter.title}/>
			<main
				ref={ref}
				className={runAnimation
					? `${styles['post-page']} ${animations.reveal} ${animations['reveal-loaded']}`
					: `${styles['post-page']} ${animations.reveal}`}
				data-layout={page.frontMatter.layout}
			>
				<h1>{page.frontMatter.title}</h1>
				{content}
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {
	return {
		paths: await getMdxPaths('page'),
		fallback: false,
	}
}

export async function getStaticProps(context) {
	return {
		props: {
			page: await getMdxNode('page', context, {
				components: {
					TwoCol,
					ImageBox,
					SmallCol,
				}
			})
		}
	}
}
