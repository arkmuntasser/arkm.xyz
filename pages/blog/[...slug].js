import { useHydrate } from 'next-mdx/client';
import { getMdxNode, getMdxPaths } from 'next-mdx/server';

export default function PostPage({ post }) {
	const content = useHydrate(post);
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
