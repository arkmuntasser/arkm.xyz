import Head from 'next/head';

export default function Meta({ title, children }) {
	return (
		<Head>
			<title>ARKM - {title}</title>
			<link rel="icon" href="/heart.svg"/>
			<link rel="mask-icon" href="/heart.svg" color="#ff0055"/>
			{children}
		</Head>
	)
}
