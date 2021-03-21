import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function Code({ children, ...props }) {
	return (
		<SyntaxHighlighter {...props} showLineNumbers={true} style={codeStyle}>
			{children}
		</SyntaxHighlighter>
	);
}

export default function PostPage({ post }) {
	const content = useHydrate(post, {
		components: {
			Code,
		}
	});
	// const [author] = post.relationships.author;

	return (
		<article>
			<h1>{post.frontMatter.title}</h1>
			<hr />
			{content}
		</article>
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
