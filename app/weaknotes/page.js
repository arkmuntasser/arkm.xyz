import { getAllNodes } from 'next-mdx';
import Layout from '../../src/components/Layout';
import Meta from '../../src/components/Meta';
import PostGroup from '../../src/components/PostGroup';

export default async function Page() {
  let posts = await getAllNodes('post');
  posts = posts.sort((a, b) => {
    const aDate = new Date(a.frontMatter.date);
    const bDate = new Date(b.frontMatter.date);
    return bDate.valueOf() - aDate.valueOf();
  }).filter(post => post.frontMatter.weeknotes === true);

  return (
    <Layout>
      <Meta title="Weeknotes" />
      <main>
        <h1>Weeknotes</h1>
        <PostGroup
          title="All Weeknotes"
          posts={posts}
        />
      </main>
    </Layout>
  );
}
