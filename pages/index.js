import Head from 'next/head';
import Link from 'next/link';
import { getAllNodes } from 'next-mdx';
import { format } from 'date-fns';

import postStyles from '../styles/Post.module.css';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>ARKM - Welcome to die!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

				{posts.length ? (
					<section>
						<h2>Posts</h2>
						<div className={postStyles.posts}>
							{posts.map((post) => (
								<article className={postStyles.post} key={post.slug}>
									<header>
										<Link href={post.url} passHref>
											<a>
												<h3>{post.frontMatter.title}</h3>
											</a>
										</Link>
										<time dateTime={post.frontMatter.date}>{format(new Date(post.frontMatter.date), 'MM.dd.yyyy')}</time>
									</header>
									<p>{post.frontMatter.excerpt}</p>
								</article>
							))}
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
