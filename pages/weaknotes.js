import { getAllNodes } from 'next-mdx';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import PostGroup from '../components/PostGroup';
import Section from '../components/Section';

export default function Weaknotes({ posts }) {
  return (
		<Layout>
			<Meta title="Weaknotes"/>
			<main>
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}>Weaknotes</h1>
					<p>
						I saw this developer I really respect, <a href="https://meowni.ca/weaknotes/" target="_blank" rel="noopener noreferrer">Monica Dinculescu</a>, started doing weeknotes and thought it was something I could get a lot of benefit from. I also appreciated the pun of 'weak'-notes vs weeknotes that she pointed out so I'm shamelessly copying it.
					</p>
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
