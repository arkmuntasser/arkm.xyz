import { getMdxNode, getMdxPaths } from 'next-mdx/server';
import { format } from 'date-fns';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styles from '../../../src/styles/PostPage.module.css';
import { FiShare2 } from 'react-icons/fi';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Layout from '../../../src/components/Layout';
import Meta from '../../../src/components/Meta';
import Chips from '../../../src/components/Chips';
import ImageBox from '../../../src/components/ImageBox';
import Embed from '../../../src/components/Embed';
import Content from '../../../src/components/Content';

function Code({ children, title, ...props }) {
  return (
    <div className={styles['code-sample']}>
      {title ? <div className="code-sample-title">{title}</div> : null}
      <SyntaxHighlighter {...props} showLineNumbers={false} style={codeStyle} wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}

function ShareButton({ text, url, via }) {
  return (
    <a
      className={styles.share}
      href={`https://twitter.com/share?text=${text}&url=${url}&via=${via}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share
      <FiShare2 />
    </a>
  );
}

const mdxComponents = {
  Code,
  TwitterTweetEmbed,
  ImageBox,
  Embed,
};

export default async function Page(props) {
  const params = await props.params;
	if (!params || !params.slug) return null;
	console.log('Loading post:', params.slug);
  const post = await getMdxNode('post', params.slug, { components: mdxComponents });
  if (!post) return null;
  const [year, month, day] = post.frontMatter.date.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  const correctedDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

  return (
    <Layout>
      <Meta title={post.frontMatter.title} />
      <main className={styles['post-page']}>
        <header>
          <div>
            <time dateTime={post.frontMatter.date}>{format(correctedDate, 'MM.dd.yyyy')}</time>
            <ShareButton text={post.frontMatter.title} url={`https://arkm.xyz/posts/${post.slug}`} via="arkmuntasser" />
          </div>
          <h1>{post.frontMatter.title}</h1>
        </header>
        {/* <div dangerouslySetInnerHTML={{__html: post.content}} /> */}
				<Content post={post} />
        {post.relationships?.category ? (
          <footer>
            <Chips items={post.relationships.category} />
          </footer>
        ) : null}
      </main>
    </Layout>
  );
}

export async function generateStaticParams() {
  const paths = await getMdxPaths('post');
	const rtn = paths.map((p) => {
		return { slug: p.params.slug[0] }
	});
  return rtn;
}
