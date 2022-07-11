import React from "react"

const Toolbar = props => {
  const { children, ...rest } = props
  return (
    <div {...rest}>
      <div className="back3" />
      <div className="container3 p-0 m-0 w-100 h-100">{children}</div>
    </div>
  )
}

export default Toolbar
