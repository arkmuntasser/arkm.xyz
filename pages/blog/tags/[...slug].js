import { getAllNodes, getMdxPaths, getNode } from 'next-mdx';
import PostGroup from '../../../components/PostGroup';

export default function TagPage({ tag, posts }) {
	return (
		<div>
			<h1>{tag.frontMatter.name}</h1>
			{posts?.length
				? <PostGroup title={tag.frontMatter.name} posts={posts}/>
				: <p>No posts found.</p>
			}
		</div>
	)
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('category'),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const tag = await getNode('category', context);
	console.log

  if (!tag) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllNodes('post')

  return {
    props: {
      tag,
      posts: posts.filter((post) =>
        post?.relationships?.category.some(cat => cat?.slug === tag.slug)
      ),
    },
  }
}
