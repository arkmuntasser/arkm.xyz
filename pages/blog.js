import { getAllNodes } from 'next-mdx';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PostGroup from '../components/PostGroup';
import Section from '../components/Section';

export default function Blog({ posts }) {
  return (
		<Layout>
			<Meta title="The Blog"/>
			<main>
				<Section>
					<h1>The Blog</h1>
					<p>Irregularly updated, but always a treat!</p>
				</Section>
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
