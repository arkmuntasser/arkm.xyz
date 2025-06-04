'use client'

import { useHydrate } from 'next-mdx/client';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import ImageBox from './ImageBox';
import Embed from './Embed';

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

const mdxComponents = {
  Code,
  TwitterTweetEmbed,
  ImageBox,
  Embed,
};

export default function Content({ post }) {
	const content = useHydrate(post, { components: mdxComponents });

	return (
		<div>
			{content}
		</div>
	);
}
