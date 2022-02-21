import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import moment from "moment"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle} rightSide={<Bio />}>
        <Seo title="" />
        <p className="dark:text-gray-400">
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} rightSide={<Bio />}>
      <Seo title="" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <div className="rounded-lg bg-gray-100 dark:bg-slate-700 p-6">
                <article itemScope itemType="http://schema.org/Article">
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span
                          itemProp="headline"
                          className="text-stone-800 dark:text-gray-300 text-xl font-bold"
                        >
                          {title}
                        </span>
                      </Link>
                    </h2>
                    <small className="text-stone-800 dark:text-gray-300">
                      {moment(post.frontmatter.date).format(`YYYY年MM月DD日`)}
                    </small>
                    <section>
                      <p
                        className="text-stone-800 dark:text-gray-300 mt-2"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <div className="mt-2">
                      <Link
                        to={post.fields.slug}
                        className="text-stone-800 dark:text-gray-300 underline"
                      >
                        全文を見る
                      </Link>
                    </div>
                  </header>
                </article>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
        }
      }
    }
  }
`
