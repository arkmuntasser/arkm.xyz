import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../src/styles/PostPage.module.css';
import { format } from 'date-fns';
import { FiShare2 } from 'react-icons/fi';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Layout from '../../src/components/Layout';
import Meta from '../../src/components/Meta';
import Chips from '../../src/components/Chips';
import animations from '../../src/styles/animations.module.css';
import { useRef } from 'react';
import useLoadInAnimation from '../../src/hooks/useLoadInAnimation';
import ImageBox from '../../src/components/ImageBox';

function Code({ children, title, ...props }) {
	return (
		<div className={styles['code-sample']}>
			{title ? <div className="code-sample-title">{title}</div> : null}
			<SyntaxHighlighter {...props} showLineNumbers={false} style={codeStyle}>
				{children}
			</SyntaxHighlighter>
		</div>
	);
}

function ShareButton({ text, url, via }) {
	return (
		<a
			className={styles.share}
			href={`https://twitter.com/share?text=${text}&url=${url}&via=${via}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			Share
			<FiShare2 />
		</a>
	)
}

export default function PostPage({ post }) {
	const ref = useRef(null);
	const content = useHydrate(post, {
		components: {
			Code,
			TwitterTweetEmbed,
			ImageBox,
		}
	});

	const runAnimation = useLoadInAnimation(ref, content);
	const [year, month, day] = post.frontMatter.date.split('-');
	const date = new Date(parseInt(year), (parseInt(month) - 1), parseInt(day));
	const correctedDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

	return (
		<Layout>
			<Meta title={post.frontMatter.title}/>
			<main
				ref={ref}
				className={runAnimation
					? `${styles['post-page']} ${animations.reveal} ${animations['reveal-loaded']}`
					: `${styles['post-page']} ${animations.reveal}`}
			>
				<header>
					<div>
						<time dateTime={post.frontMatter.date}>{format(correctedDate, 'MM.dd.yyyy')}</time>
						<ShareButton text={post.frontMatter.title} url={`https://arkm.xyz/posts/${post.slug}`} via="arkmuntasser" />
					</div>
					<h1>{post.frontMatter.title}</h1>
				</header>

				{content}

				{post.relationships.category ? (
					<footer>
						<Chips items={post.relationships.category}/>
					</footer>
				) : null}
			</main>
		</Layout>
	)
}

export async function getStaticPaths() {
	return {
		paths: await getMdxPaths('post'),
		fallback: false,
	}
}

export async function getStaticProps(context) {
	return {
		props: {
			post: await getMdxNode('post', context, {
				components: {
					Code,
					TwitterTweetEmbed,
					ImageBox,
				}
			})
		}
	}
}
