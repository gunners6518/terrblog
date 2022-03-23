import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby"

const TagList = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div>
      <Helmet title={data.site.siteMetadata.title} />
      <div className="m-4">
        <div className="tag rounded-lg bg-gray-100 dark:bg-slate-700 m-2">
          <div className="bg-zinc-300 dark:bg-slate-900">
            <p className="text-stone-800 dark:text-gray-300 font-bold p-1">
              カテゴリー
            </p>
          </div>
          <ul className="py-1">
            {data.allMarkdownRemark.group.map(tag => (
              <li className="m-2 " key={tag.fieldValue}>
                <Link className="" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  <p className="text-stone-800 dark:text-gray-300 font-bold">
                    {tag.fieldValue} ({tag.totalCount})
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

TagList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagList
