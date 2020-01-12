import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title
  if (typeof window !== `undefined`) {
    return (
      <Layout location={window.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn't exist...</p>
      </Layout>
    )
  }
  return null
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
