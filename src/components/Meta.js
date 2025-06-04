import Head from 'next/head';

export default function Meta({ title, children }) {
	return (
		<Head>
			<title>{`arkm - ${title}`}</title>
			<link rel="icon" href="/heart.svg"/>
			<link rel="mask-icon" href="/heart.svg" color="#ff0055"/>
			<meta name="theme-color" content="#fff" media="(prefers-color-scheme: light)"/>
			<meta name="theme-color" content="#000" media="(prefers-color-scheme: dark)"/>
			{children}
		</Head>
	)
}
