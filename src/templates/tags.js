import PropTypes from "prop-types"
import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import moment from "moment"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} rightSide={<Bio />}>
      <Seo title={siteTitle} />
      <div className="grid grid-cols-6 gap-4">
        <h1 className="text-stone-800 dark:text-gray-300 text-xl font-bold">
          {tag}
        </h1>
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

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
