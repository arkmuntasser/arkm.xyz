import { getAllNodes } from 'next-mdx';
import PostGroup from '../src/components/PostGroup';
import Layout from '../src/components/Layout';
import Meta from '../src/components/Meta';
import Welcome from '../src/components/Welcome';

export default function Home({ posts }) {
  return (
		<Layout>
			<Meta title="Welcome!"/>
			<main>
				<Welcome/>
				<PostGroup
					title="Recent Posts"
					posts={posts}
					viewAllCTA="See All Posts"
					viewAllHref="/blog"
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
	}).filter(post => post.frontMatter.weeknotes === false);

  return {
    props: {
      posts: posts.slice(0, 9),
    },
  }
}
