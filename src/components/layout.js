import * as React from "react"
import { Link } from "gatsby"
import ModeToggleButton from  "../components/modeToggleButton"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" className="text-3xl font-bold underline dark:text-gray-400">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home dark:text-gray-400" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <ModeToggleButton/>
      <main>{children}</main>
      <footer className="dark:text-gray-400">© {new Date().getFullYear()}, terrblog</footer>
    </div>
  )
}

export default Layout
