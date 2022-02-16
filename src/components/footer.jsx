import * as React from "react"

const Footer = () => {
  return (
    <>
      <footer className="dark:text-gray-300 pl-6 text-sm">
        © {new Date().getFullYear()}, Built with{" "}
        <a rel="external" href="https://www.gatsbyjs.org" className="underline">
          Gatsby
        </a>
        <br />
        このサイトはGoogle Analyticsを使用しています。
      </footer>
    </>
  )
}

export default Footer
