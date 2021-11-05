import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import styles from '../src/styles/PostPage.module.css';
import Layout from '../src/components/Layout';
import Meta from '../src/components/Meta';
import panelStyles from '../src/styles/Panels.module.css';
import ImageBox from '../src/components/ImageBox';
import { useEffect, useRef, useState } from 'react';
import useLoadInAnimation from '../src/hooks/useLoadInAnimation';
import animations from '../src/styles/animations.module.css';
import Image from 'next/image';
import useIntersectionObserver from '@react-hook/intersection-observer';

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
	const ref = useRef(null);
	const { isIntersecting } = useIntersectionObserver(ref);

	const [intersected, setIntersected] = useState(false);

	useEffect(function() {
		if (isIntersecting) {
			setIntersected(true);
		}
	}, [isIntersecting]);

	return (
		<section ref={ref} className={intersected
			? `${styles.collection} ${animations.chain} ${animations['chain-loaded']}`
			: `${styles.collection} ${animations.chain}`}>
			{items.map((item, i) => (
				<article key={i} style={{ transitionDuration: `${240 + 80 * i}ms` }}>
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
					Collection,
				}
			})
		}
	}
}
