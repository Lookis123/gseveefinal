import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 0 8px;
  padding-bottom: 12px;
  ${down("lg")} {
    padding-bottom: 6px;
    padding-top: 12px;
  }
`
const PhotoFigure = props => {
  const { photo, caption, ...rest } = props
  return (
    <div {...rest}>
      <Image src={photo} />
      <span className="pt-5 px-2">{caption}</span>
    </div>
  )
}

export default PhotoFigure
