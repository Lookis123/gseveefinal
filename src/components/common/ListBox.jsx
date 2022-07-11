import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid rgba(0, 47, 108, 0.2);
  cursor: ${props => (props.onClick ? "pointer" : "unset")};
  ${down("lg")} {
    flex-direction: ${props => (props.type === 2 ? "column" : "unset")};
    align-items: unset;
  }
  &:nth-child(1) {
    border-top: 1px solid rgba(0, 47, 108, 0.2);
  }
`

const DivWrapper = styled.div`
  display: flex;

  width: 60%;
  ${down("lg")} {
    width: 100%;
  }
  flex-wrap: wrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "unset"};
`
const ListBoxWrapper = styled.div`
  margin-bottom: 56px;
`

export const ListItem = props => {
  const { startItem, endItem, endAlign, ...rest } = props

  return (
    <ListItemWrapper {...rest}>
      <span>{startItem}</span>
      <DivWrapper {...endAlign}>{endItem}</DivWrapper>
    </ListItemWrapper>
  )
}

const ListBox = props => {
  const { children } = props
  return (
    <ListBoxWrapper className="listbox-container">{children}</ListBoxWrapper>
  )
}
export default ListBox
