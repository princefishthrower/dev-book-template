import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

export interface ISeoProps {
  title: string
  description?: string
}

function Seo(props: ISeoProps) {
  const { description, title } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta
        name="description"
        content={description || siteMetadata.description || ""}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || siteMetadata.description || ""}
      />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ""} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || siteMetadata.description || ""}
      />
    </Helmet>
  )
}

export default Seo