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
					<p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>
						This is where you can find a collection of all my writings. Topics will range from development, to politics, to social justice issues. Whatever is on my mind, really. Have yourself a read and hopefully you get something out of it, but these posts are for me.
					</p>
				</Section>
				<PostGroup
					title="The Notes"
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
