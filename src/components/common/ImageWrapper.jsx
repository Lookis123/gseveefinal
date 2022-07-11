import React from "react"
import styled from "styled-components"
import { returnLeftPosition, returnTopPosition } from "../../utils/func"

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 0 0 4px 4px;
  .card-image {
    position: absolute;
    z-index: 1;
    left: ${props => returnLeftPosition(props.title, props.position)};
    top: ${props => returnTopPosition(props.title, props.position)};
    .w321 {
      display: inline-block;
    }
  }
`
const ImageWrapper = props => {
  const { position, categoryData, color, type, icon, children, ...rest } = props

  // prettier-ignore
  const categoryTitle = categoryData?.filter(item => item.prismicId === type)[0]?.data.title

  // console.log("position=> ", position)
  // console.log("catgory titile => ", categoryTitle)

  return (
    <Wrapper color={color} title={categoryTitle} position={position} {...rest}>
      <div className="card-image grayed">
        <img className="w321" src={icon} alt="" />
      </div>
      <div className="children">{children}</div>
    </Wrapper>
  )
}
export default ImageWrapper
