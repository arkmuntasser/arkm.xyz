import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { useInView } from 'react-intersection-observer'
import '../styles/portfolio.css'

function Portfolio() {
	const [ref, inView, entry] = useInView({
		threshold: 0.35,
  })

	return (
		<StaticQuery
			query={graphql`
				query {
					file(
						relativePath: { eq: "portfolio/simpleview.png" },
						sourceInstanceName: { eq: "assets" }
					) {
						id,
						childImageSharp {
							fluid(maxWidth: 1600) {
								...GatsbyImageSharpFluid_noBase64
							}
						}
					}
				}
			`}
			render={(data) => {
				return (
					<div className={`portfolio ${inView ? 'visible' : ''}`} ref={ref}>
						<div className="inner">
							<Img
								fluid={data.file.childImageSharp.fluid}
								objectFit="cover"
								objectPosition="50% 50%"
								alt="Simpleview"
							/>
						</div>
					</div>
				)
			}}
		/>
	)
}

export default Portfolio;
