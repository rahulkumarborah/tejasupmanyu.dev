/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { CSSProperties } from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio/bio"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import {
  postHeaderStyles,
  postDateStyles,
  postContentStyles,
  postTimeToReadStyles,
  navigationListStyle,
} from "./styles"
import "./syntax.css"
import { MiniHeader } from "../components/header/header"

interface Props {
  data: {
    markdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  pageContext: any
}

const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  if (typeof window !== `undefined`) {
    return (
      <Layout location={window.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1 sx={postHeaderStyles}>{post.frontmatter.title}</h1>
        <Flex>
          <span sx={postDateStyles}>{post.frontmatter.date} | </span>
          <span sx={postTimeToReadStyles}>{post.timeToRead} minute read</span>
        </Flex>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          sx={postContentStyles}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div sx={{ marginBottom: 3 }}>
          <MiniHeader title={siteTitle.toLowerCase()} />
        </div>
        <Bio />
        <ul sx={navigationListStyle as CSSProperties}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  } else {
    return null
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
