import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../styles/PostPage.module.css';
import { format } from 'date-fns';

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

export default function PostPage({ post }) {
	const content = useHydrate(post, {
		components: {
			Code,
		}
	});

	return (
		<div className={styles['post-page']}>
			<header>
				<time dateTime={post.frontMatter.date}>{format(new Date(post.frontMatter.date), 'MM.dd.yyyy')}</time>
				<h1>{post.frontMatter.title}</h1>
			</header>

			{content}

			<footer></footer>
		</div>
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
			post: await getMdxNode('post', context)
		}
	}
}
