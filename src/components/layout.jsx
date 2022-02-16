import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children, rightSide }) => {
  // 初期設定をダークテーマにする
  useEffect(() => {
    if (document.documentElement.classList.value !== "dark") {
      document.documentElement.classList.toggle("dark")
    }
  })

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} />
      <main className="container mx-auto mt-8">{children}</main>
      {/*
        サイドバーは未実装
        <div>{rightSide}</div>
      */}
      <Footer />
    </div>
  )
}

export default Layout
