import * as React from "react"
import { Link } from "gatsby"
import ModeToggleButton from "./modeToggleButton"

const Header = ({ title, isRootPath }) => {
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/" className="text-3xl font-bold text-white">
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link to="/" className="header-link-home text-white">
        {title}
      </Link>
    )
  }

  return (
    <div className="flex py-3 bg-indigo-700 justify-between items-center">
      <header className="pl-6">{header}</header>
      <ModeToggleButton />
    </div>
  )
}

export default Header
