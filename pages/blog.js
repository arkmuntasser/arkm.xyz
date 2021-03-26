import Head from 'next/head';
import { getAllNodes } from 'next-mdx';
import PostGroup from '../components/PostGroup';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>ARKM - Welcome to die!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<Layout>
				<main>
					<PostGroup
						title="All Posts"
						posts={posts}
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
	})

  return {
    props: {
      posts,
    },
  }
}
