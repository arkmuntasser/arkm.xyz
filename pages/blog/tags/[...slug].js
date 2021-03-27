import { getAllNodes, getMdxPaths, getNode } from 'next-mdx';
import Layout from '../../../components/Layout';
import Meta from '../../../components/Meta';
import PostGroup from '../../../components/PostGroup';
import Section from '../../../components/Section';

export default function TagPage({ tag, posts }) {
	return (
		<Layout>
			<Meta title={`Posts tagged '${tag.frontMatter.name}'`}/>
			<main>
				<Section>
					<h1>{tag.frontMatter.name}</h1>
					<p>Lorem ipsum dolor sit amet.</p>
				</Section>

				{posts?.length
					? <PostGroup posts={posts}/>
					: <p>No posts found.</p>
				}
			</main>
		</Layout>
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
