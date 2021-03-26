import Head from 'next/head';
import { getAllNodes } from 'next-mdx';
import PostGroup from '../components/PostGroup';
import Layout from '../components/Layout';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>ARKM - Welcome to die!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<Layout>
				<main>
					<PostGroup
						title="Recent Posts"
						posts={posts}
						viewAllCTA="See All Posts"
						viewAllHref="/blog"
					/>
				</main>
			</Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post');
	posts.sort((a,b) => {
		const aDate = new Date(a.frontMatter.date);
		const bDate = new Date(b.frontMatter.date);

		return bDate.valueOf() - aDate.valueOf();
	});

  return {
    props: {
      posts: posts.slice(0, 9),
    },
  }
}
