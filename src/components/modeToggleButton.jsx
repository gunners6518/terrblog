import * as React from "react"

const ModeToggleButton = () => {
  const theme = () => {
    // Gatsbyのbuildエラー対策
    if (typeof window !== undefined) {
      document.documentElement.classList.toggle("dark")
    }
  }

  return (
    <div className="pr-12">
      <button
        title="Toggle Theme"
        onClick={theme}
        className="
      w-12 
      h-6 
      rounded-full 
      p-1 
      bg-gray-400
      dark:bg-gray-600 
      relative 
      transition-colors 
      duration-500 
      ease-in
      focus:outline-none 
      focus:ring-2 
      focus:ring-blue-700 
      dark:focus:ring-blue-600 
      focus:border-transparent
    "
      >
        <div
          id="toggle"
          className="
        rounded-full 
        w-4 
        h-4 
        bg-blue-600 
        dark:bg-blue-500 
        relative 
        ml-0 
        dark:ml-6 
        pointer-events-none 
        transition-all 
        duration-300 
        ease-out
    "
        ></div>
      </button>
    </div>
  )
}

export default ModeToggleButton
