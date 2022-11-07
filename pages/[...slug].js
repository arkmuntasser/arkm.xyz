import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import styles from '../src/styles/PostPage.module.css';
import Layout from '../src/components/Layout';
import Meta from '../src/components/Meta';
import panelStyles from '../src/styles/Panels.module.css';
import ImageBox from '../src/components/ImageBox';
import Image from 'next/image';

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
		<section>
			{items.map((item, i) => (
				<article key={i}>
					<h3>
						<a href={item.link} rel="noopener noreferer" target="_blank">
							{item.title}
						</a>
					</h3>
					{item.image ? <Image src={item.image} alt={''} layout="responsive" width="100" height="75" /> : false}
				</article>
			))}
		</section>
	)
}

export default function Page({ page }) {
	const content = useHydrate(page, {
		components: {
			TwoCol,
			ImageBox,
			SmallCol,
			Collection,
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
					Collection,
				}
			})
		}
	}
}
