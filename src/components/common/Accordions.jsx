import React, { useState } from "react"
import styled from "styled-components"

const AngleDown = (
  <svg
    width="16"
    height="10"
    viewBox="0 0 16 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 2.16632L2.21087 0L7.99476 5.66735L13.7891 0L16 2.16632L7.99476 10L0 2.16632Z"
      fill="#808080"
    />
  </svg>
)

export const AccordionDetail = props => {
  const { children } = props
  return { children }
}
export const AccordionSummary = props => {
  const { startComponent, endComponent, ...rest } = props
  return (
    <div className="d-flex justify-content-between">
      {/* {endComponent ? (
        <React.Fragment>
          <div className="d-flex">
            {startComponent}
            <AngleDown />
          </div>
          <div>{endComponent}</div>
        </React.Fragment>
      ) : (
        <>
          {startComponent}
          <AngleDown />
        </>
      )} */}
      <div className="d-flex">
        {startComponent}
        {/* <AngleDown /> */}
      </div>
      <div>{endComponent}</div>
    </div>
  )
}
export const Accordion = props => {
  const { children, summary, detail, ...rest } = props
  const [opened, setOpen] = useState(false)
  return (
    <div className="row" {...rest}>
      <div className="row summary" onClick={() => setOpen(!opened)}>
        {summary}
      </div>
      <div
        className="row detail"
        style={
          opened
            ? {
                opacity: 1,
                transition: "all .3s ease",
                height: "0",
              }
            : {
                opacity: 0,
                transition: "all .3s ease",
                height: "auto",
              }
        }
      >
        {detail}
      </div>
    </div>
  )
}

export const Accordions = props => {
  const { children, ...rest } = props
  return (
    <div className="row" {...rest}>
      {children}
    </div>
  )
}
