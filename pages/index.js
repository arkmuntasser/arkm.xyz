import Head from 'next/head';
import { getAllNodes } from 'next-mdx';
import PostGroup from '../components/PostGroup';


export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>ARKM - Welcome to die!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
				<PostGroup title="Recent Posts" posts={posts}/>
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
