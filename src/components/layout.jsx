import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} isRootPath={isRootPath} />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
