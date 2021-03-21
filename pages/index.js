import Head from 'next/head';
import { getAllNodes } from 'next-mdx';
import Post from '../components/Post';

import postStyles from '../styles/Post.module.css';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>ARKM - Welcome to die!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
				{posts.length ? (
					<section className={postStyles['posts-container']}>
						<h2>Recent Posts</h2>
						<div className={postStyles.posts}>
							{posts.map((post) => <Post data={post} key={post.slug}/>)}
						</div>
					</section>
				) : null}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllNodes('post')

  return {
    props: {
      posts,
    },
  }
}
