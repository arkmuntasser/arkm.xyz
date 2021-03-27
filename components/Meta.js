import Head from 'next/head';

export default function Meta({ title, children }) {
	return (
		<Head>
			<title>ARKM - {title}</title>
			<link rel="icon" href="/favicon.ico" />
			{children}
		</Head>
	)
}
