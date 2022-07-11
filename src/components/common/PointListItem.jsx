import React from "react"
import styled from "styled-components"

const PointInfo = styled.span`
  font-family: CeraGR-Regular;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`
const PointListItemWrapper = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #f2f2f2;
  }
  background-color: ${props =>
    props.filtered ? props.theme.colors.blue : "unset"};
  h5,
  span {
    color: ${props => (props.filtered ? "white" : "#002F6C")};
  }
`
const PointListItem = props => {
  const { children, ...rest } = props
  const { name, info } = children

  return (
    <PointListItemWrapper className="px-2 py-3 list-item" {...rest}>
      <h5 className="mb-1">{name}</h5>
      <PointInfo>{info}</PointInfo>
    </PointListItemWrapper>
  )
}

export default PointListItem
