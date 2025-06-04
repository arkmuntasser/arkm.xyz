import { getAllNodes } from 'next-mdx';
import Layout from '../../../../src/components/Layout';
import Meta from '../../../../src/components/Meta';
import PostGroup from '../../../../src/components/PostGroup';

export default async function Page(props) {
  const params = await props.params;
  let posts = await getAllNodes('post');
  posts = posts.sort((a, b) => {
    const aDate = new Date(a.frontMatter.date);
    const bDate = new Date(b.frontMatter.date);
    return bDate.valueOf() - aDate.valueOf();
  }).filter(post => post.frontMatter?.category?.includes(params.slug));

  return (
    <Layout>
      <Meta title={`Category: ${params.slug}`} />
      <main>
        <h1>Category: {params.slug}</h1>
        <PostGroup
          title={`Posts in ${params.slug}`}
          posts={posts}
        />
      </main>
    </Layout>
  );
}

export async function generateStaticParams() {
  const cats = await getAllNodes('category');
  return cats.map(cat => ({ slug: cat.slug }));
}
