import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { getAllNodes } from 'next-mdx';

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

				{posts.length ? (
					<section>
						<h2>Posts</h2>
						{posts.map((post) => (
							<article key={post.slug}>
								<Link href={post.url} passHref>
									<a>
										<h3>{post.frontMatter.title}</h3>
									</a>
								</Link>
							</article>
						))}
					</section>
				) : null}

      </main>
    </div>
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
