import React from "react"

import styled from "styled-components"
const Button = styled.button`
  font-family: "CeraGR-Medium";
  font-size: 14px;
  line-height: 22px;
  outline: none;
  border: none;
  color: #002f6c;
`

const CustomButton = props => {
  const { children, ...rest } = props
  return <Button {...rest}>{children}</Button>
}

export default CustomButton
