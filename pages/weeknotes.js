import { getAllNodes } from 'next-mdx';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PostGroup from '../components/PostGroup';
import Section from '../components/Section';

export default function Weeknotes({ posts, cats }) {
  return (
		<Layout>
			<Meta title="Weeknotes"/>
			<main>
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}>Weeknotes</h1>
				</Section>
				<PostGroup
					posts={posts}
				/>
			</main>
		</Layout>
  )
}

export async function getStaticProps() {
  let posts = await getAllNodes('post');

	posts = posts.sort((a,b) => {
		const aDate = new Date(a.frontMatter.date);
		const bDate = new Date(b.frontMatter.date);

		return bDate.valueOf() - aDate.valueOf();
	}).filter(post => post.frontMatter.weeknotes === true);

  return {
    props: {
      posts,
    },
  }
}
