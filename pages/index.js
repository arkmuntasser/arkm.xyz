import { getAllNodes } from 'next-mdx';
import PostGroup from '../components/PostGroup';
import Layout from '../components/Layout';
import Meta from '../components/Meta';
import Welcome from '../components/Welcome';

export default function Home({ posts }) {
  return (
		<Layout>
			<Meta title="Welcome to die!"/>
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
