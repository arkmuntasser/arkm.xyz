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
					<p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>Behold! My blog.</p>
					<p style={{ transitionDuration: `${400 + 80 * 3}ms` }}>I typically write, when I write, about tech stuff, but I might blog about anything. Including, but not limited to social justice issues, movies, games, whatever. I'm not a professional writer; first draft, best draft.</p>
				</Section>
				<Section layout="small">
					<h2 style={{ transitionDuration: `${400 + 80 * 4}ms` }}>Categories</h2>
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
