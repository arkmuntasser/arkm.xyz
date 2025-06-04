import { getAllNodes } from 'next-mdx';
import PostGroup from '../src/components/PostGroup';
import Layout from '../src/components/Layout';
import Meta from '../src/components/Meta';
import Welcome from '../src/components/Welcome';

export default async function Page() {
  let posts = await getAllNodes('post');
  posts = posts.sort((a, b) => {
    const aDate = new Date(a.frontMatter.date);
    const bDate = new Date(b.frontMatter.date);
    return bDate.valueOf() - aDate.valueOf();
  }).filter(post => post.frontMatter.weeknotes === false);

  return (
    <Layout>
      <Meta title="Welcome!" />
      <main>
        <Welcome />
        <PostGroup
          title="Recent Posts"
          posts={posts.slice(0, 9)}
          viewAllCTA="See All Posts"
          viewAllHref="/blog"
        />
      </main>
    </Layout>
  );
}
