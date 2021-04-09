const fs = require('fs')
const RSS = require('rss')
const { getAllNodes } = require('next-mdx');

function generateRSS(posts) {
	const siteUrl = 'https://arkm.xyz';
  const feed = new RSS({
    title: 'Amir R Muntasser\'s Blog',
    site_url: siteUrl,
  });

  posts.forEach(post => {
    feed.item({
      title: post.frontMatter.title,
      guid: post.url,
      url: siteUrl + post.url,
      date: post.frontMatter.date,
    });
  });

  return feed.xml({ indent: true })
}

async function init() {
	const posts = await getAllNodes('post');
	const rssPath = 'public/rss.xml'
	const rss = generateRSS(posts);
	fs.writeFileSync(rssPath, rss);
  console.info(`Saved RSS feed to ${rssPath}`);
}

init();
