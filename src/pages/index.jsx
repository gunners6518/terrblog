import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
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
      <Seo title={siteTitle} />
      <div className="grid grid-cols-6 gap-4">
        <ol className="col-start-1 col-end-5" style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <li key={post.fields.slug}>
                <div className="rounded-lg bg-gray-100 dark:bg-slate-700 p-6 m-4">
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
                      <small className="text-stone-800 dark:text-gray-300">
                        {post.frontmatter.tags.map(item => {
                          return (
                            <span
                              key={item}
                              className="font-bold px-2 py-1 ml-2 rounded-full text-gray-500 bg-gray-200 align-center w-max cursor-pointer"
                            >
                              # {item}
                            </span>
                          )
                        })}
                      </small>
                      <section>
                        <p
                          className="text-stone-800 dark:text-gray-300 mt-2"
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
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
        <div className="col-end-7 col-span-2">
          <Sidebar />
        </div>
      </div>
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
          tags
        }
      }
    }
  }
`
