import { getAllNodes, getMdxPaths, getNode } from 'next-mdx';
import Layout from '../../../src/components/Layout';
import Meta from '../../../src/components/Meta';
import PostGroup from '../../../src/components/PostGroup';
import Section from '../../../src/components/Section';

export default function CatPage({ cat, posts }) {
	return (
		<Layout>
			<Meta title={`Posts in the '${cat.frontMatter.name}' category`}/>
			<main>
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}><small>Category:</small><br/>{cat.frontMatter.name}</h1>
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
  const cat = await getNode('category', context);

  if (!cat) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllNodes('post')

  return {
    props: {
      cat,
      posts: posts.filter(post => post.frontMatter.weeknotes === false).filter((post) =>
        post?.relationships?.category?.some(c => c?.slug === cat.slug)
      ),
    },
  }
}
