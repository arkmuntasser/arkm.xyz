const fs = require('fs')
const RSS = require('rss')
const { getAllNodes } = require('next-mdx');

function generateRSS(posts, filter = 'all') {
	const siteUrl = 'https://arkm.xyz';
	const feed = new RSS({
		title: `Amir R Muntasser's ${filter === 'all' ? 'Firehose' : filter === 'posts' ? 'Blog Posts' : 'Weaknotes'}`,
		site_url: `${siteUrl}${filter === 'all' ? '' : filter === 'posts' ? '/blog' : '/weaknotes'}`,
	});

  posts
	.filter(post => {
		if (filter === 'all') return true;
		else if (filter === 'posts') return post.frontMatter.weeknotes === false;
		else return post.frontMatter.weeknotes === true;
	})
	.forEach(post => {
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
	const nodes = await getAllNodes('post');

	const rssPathAll = 'public/rss-all.xml';
	const rssAll = generateRSS(nodes);
	fs.writeFileSync(rssPathAll, rssAll);
	console.info(`Saved RSS feed to ${rssPathAll}`);

	const rssPathPosts = 'public/rss-posts.xml';
	const rssPosts = generateRSS(nodes, 'posts');
	fs.writeFileSync(rssPathPosts, rssPosts);
	console.info(`Saved RSS feed to ${rssPathPosts}`);

	const rssPathWeaknotes = 'public/rss-weaknotes.xml';
	const rssWeaknotes = generateRSS(nodes, 'weaknotes');
	fs.writeFileSync(rssPathWeaknotes, rssWeaknotes);
	console.info(`Saved RSS feed to ${rssPathWeaknotes}`);
}

init();
