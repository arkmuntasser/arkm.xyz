import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import styles from '../styles/PostPage.module.css';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import panelStyles from '../styles/Panels.module.css';
import ImageBox from '../components/ImageBox';

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

export default function Page({ page }) {
	const content = useHydrate(page, {
		components: {
			TwoCol,
			ImageBox,
			SmallCol,
		}
	});

	return (
		<Layout>
			<Meta title={page.frontMatter.title}/>
			<main className={styles['post-page']} data-layout={page.frontMatter.layout}>
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
