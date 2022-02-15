import * as React from "react"
import { Link } from "gatsby"
import ModeToggleButton from "./modeToggleButton"

const Header = ({ title }) => {
  const header = (
    <h1>
      <Link to="/" className="text-3xl font-bold text-white">
        {title}
      </Link>
    </h1>
  )

  return (
    <div className="flex py-3 bg-indigo-700 justify-between items-center">
      <header className="pl-6 p">{header}</header>
      <ModeToggleButton />
    </div>
  )
}

export default Header
