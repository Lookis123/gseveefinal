import React from "react"

const Section = props => {
  const { children, ...rest } = props
  return (
    <section {...rest}>
      <div className="back2">
        <div className="container2 p-0 m-0 w-100 h-100">{children}</div>
      </div>
    </section>
  )
}

export default Section
