import * as React from "react"

const Footer = () => {
  return (
    <footer className=" text-white bg-indigo-700 text-center">
      © {new Date().getFullYear()}, terrblog
    </footer>
  )
}

export default Footer
