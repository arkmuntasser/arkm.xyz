import { getAllNodes } from 'next-mdx';
import Chips from '../components/Chips';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PostGroup from '../components/PostGroup';
import Section from '../components/Section';

export default function Blog({ posts, cats }) {
  return (
		<Layout>
			<Meta title="The Blog"/>
			<main>
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}>The Blog</h1>
					<p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>
						This is where you can find a collection of all my writings. Topics will range from development, to politics, to social justice issues. Whatever is on my mind, really. Have yourself a read and hopefully you get something out of it, but these posts are for me.
					</p>
				</Section>
				<Section layout="small">
					<h2 style={{ transitionDuration: `${400 + 80 * 3}ms` }}>Categories</h2>
					<Chips items={cats}/>
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
	const cats = await getAllNodes('category');
	posts.sort((a,b) => {
		const aDate = new Date(a.frontMatter.date);
		const bDate = new Date(b.frontMatter.date);

		return bDate.valueOf() - aDate.valueOf();
	})

  return {
    props: {
      posts,
			cats,
    },
  }
}
