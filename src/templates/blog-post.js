import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import moment from "moment"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="grid grid-cols-6 gap-4">
        <article
          className="blog-post col-start-1 col-end-5 rounded-lg bg-gray-100 dark:bg-slate-700 p-6"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1
              itemProp="headline"
              className="text-stone-800 dark:text-gray-300 text-2xl font-bold"
            >
              {post.frontmatter.title}
            </h1>
            <div className="mb-4">
              <small className="text-stone-800 dark:text-gray-300">
                {moment(post.frontmatter.date).format(`YYYY年MM月DD日`)}
              </small>
              <small className="text-stone-800 dark:text-gray-300">
                {post.frontmatter.tags.map(item => {
                  return (
                    <span className="font-bold px-3 py-1 ml-2 rounded-full text-gray-500 bg-gray-200 align-center w-max cursor-pointer">
                      # {item}
                    </span>
                  )
                })}
              </small>
            </div>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="markdown"
          />
          <hr />
        </article>
        <div className="col-end-7 col-span-2">
          <Sidebar />
        </div>
      </div>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
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
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
