// import React from "react"
// import kebabCase from "lodash/kebabCase"

// import { Link, StaticQuery, graphql } from "gatsby"

// const CategoryList = () => (
//   <StaticQuery
//     query={graphql`
//       allMarkdownRemark() {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//       }
//     }
//     `}
//     render={data => (
//       <nav>
//         <h1 className="categorylist-header">カテゴリ一別</h1>
//         <ul className="category-list">
//           {data.allMarkdownRemark.group.map(category => (
//             <li className="category-list-item" key={category.fieldValue}>
//               <span className="category-list-icon"></span>
//               <Link
//                 className="category-list-item-link"
//                 to={`/categories/${kebabCase(category.fieldValue)}/`}
//               >
//                 {category.fieldValue} ({category.totalCount})
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     )}
//   />
// )

// export default CategoryList
