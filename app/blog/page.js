import { getAllNodes } from 'next-mdx';
import Chips from '../../src/components/Chips';
import Layout from '../../src/components/Layout';
import Meta from '../../src/components/Meta';
import PostGroup from '../../src/components/PostGroup';
import Section from '../../src/components/Section';

export default async function Page() {
  let posts = await getAllNodes('post');
  const cats = await getAllNodes('category');

  posts = posts.sort((a, b) => {
    const aDate = new Date(a.frontMatter.date);
    const bDate = new Date(b.frontMatter.date);
    return bDate.valueOf() - aDate.valueOf();
  }).filter(post => post.frontMatter.weeknotes === false);

  return (
    <Layout>
      <Meta title="The Blog" />
      <main>
        <Section>
          <h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}>The Blog</h1>
          <p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>
            This is where you can find a collection of all my writings. Topics will range from development, to politics, to social justice issues. Whatever is on my mind, really. Have yourself a read and hopefully you get something out of it, but these posts are for me.
          </p>
          <p style={{ transitionDuration: `${400 + 80 * 3}ms` }}>
            <a href="/rss-posts.xml">Subscribe to the blog-only RSS feed</a>
          </p>
        </Section>
        <Section layout="small">
          <h2 style={{ transitionDuration: `${400 + 80 * 4}ms` }}>Categories</h2>
          <Chips items={cats} />
        </Section>
        <PostGroup
          title="All Posts"
          posts={posts}
        />
      </main>
    </Layout>
  );
}
