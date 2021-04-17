import Link from "next/link";
import ImageBox from "../src/components/ImageBox";
import Layout from "../src/components/Layout";
import Meta from "../src/components/Meta";
import Section from "../src/components/Section";

export default function Custom404() {
  return (
		<Layout>
			<Meta title="404 - Page Not Found"/>
			<main>
				<Section>
					<h1 style={{ transitionDuration: `${400 + 80 * 1}ms` }}>There should have been a page here...</h1>
					<p style={{ transitionDuration: `${400 + 80 * 2}ms` }}>
						Try heading back to the <Link href="/" passHref><a>homepage</a></Link> maybe? Or maybe you were looking for my <Link href="/blog" passHref><a>blog</a></Link>? My <Link href="/weaknotes" passHref><a>weaknotes</a></Link>? I don't have anything else on in this site so if it's not one of those I'm afraid you're SOL.
					</p>
					<ImageBox
						src="/images/404.gif"
						width="426"
						height="213"
						alt="The meme of John Travolta in Pulp Fiction looking confused"
						style={{ transitionDuration: `${400 + 80 * 3}ms` }}
					/>
				</Section>
			</main>
		</Layout>
	)
}
