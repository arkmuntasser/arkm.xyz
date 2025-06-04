import { getAllNodes } from 'next-mdx';
import Layout from '../../../../src/components/Layout';
import Meta from '../../../../src/components/Meta';
import PostGroup from '../../../../src/components/PostGroup';
import Section from '../../../../src/components/Section';

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
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}><small>Category:</small><br/>{params.slug}</h1>
				</Section>

				{posts?.length
					? <PostGroup posts={posts}/>
					: <p>No posts found.</p>
				}
      </main>
    </Layout>
  );
}

export async function generateStaticParams() {
  const cats = await getAllNodes('category');
  return cats.map(cat => ({ slug: cat.slug }));
}
