import { getAllNodes } from 'next-mdx';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PostGroup from '../components/PostGroup';

export default function Blog({ posts }) {
  return (
		<Layout>
			<Meta title="All blog posts"/>
			<main>
				<PostGroup
					title="All Posts"
					posts={posts}
				/>
			</main>
		</Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post');
	posts.sort((a,b) => {
		const aDate = new Date(a.frontMatter.date);
		const bDate = new Date(b.frontMatter.date);

		return bDate.valueOf() - aDate.valueOf();
	})

  return {
    props: {
      posts,
    },
  }
}
