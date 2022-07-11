import React from "react"
import styled from "styled-components"
const CategoryButtonWrapper = styled.a`
  outline: none;
  border: none;
  font-family: CeraGR-Regular;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0em;
  background-color: transparent;
  text-align: center;
  color: #002f6c;
  padding: 0px 24px;
  border-left: 1px solid #d3d3d3;

  cursor: pointer;
  &:first-child {
    border-left: none;
  }
`

const CategoryButton = props => {
  const { children } = props
  return (
    <CategoryButtonWrapper
      href={props.href}
      onClick={props.onClick}
      style={
        props.isSelected
          ? {
              fontWeight: "bold",
            }
          : {
              opacity: "0.46",
            }
      }
    >
      {children}
    </CategoryButtonWrapper>
  )
}
export default CategoryButton
