import React from "react"
import styled from "styled-components"
import ImageWrapper from "./ImageWrapper"

import { categorySelect } from "../../utils/category-select"
import { getCategoryIcon, getCategoryId } from "../../utils/staticData"

const FooterCardWrapper = styled.div`
  margin: 0 8px;
  background-color: white;
  border-radius: 4px;
  height: 423px;
  width: ${props => (props.width ? props.width : "300px")};
  position: relative;
  border-bottom: ${props =>
    props.borderBottom ? props.borderBottom : `4px solid ${props.color}`};
`
const Image = styled.img`
  width: 100%;
`
const SmallButton = styled.div`
  background: rgba(0, 47, 108, 0.1);
  position: absolute;
  bottom: 32px;
  padding: 0px 4px;
`
const FooterCard = props => {
  const { content, img, date, title, index = undefined, category } = props

  return (
    <FooterCardWrapper color={categorySelect(category)}>
      <ImageWrapper
        color={categorySelect(category)}
        icon={getCategoryIcon(category)}
        index={index ? index : getCategoryId(category)}
        width={props.width}
      >
        <Image src={img} />
      </ImageWrapper>
      <div className="w-auto ms-3 me-5 mt-2 mb-5">
        <div className="d-flex justify-content-between">
          <span className="text-decoration-underline">{content}</span>
          <span>{date}</span>
        </div>
        <h5 className="mt-2 mb-5">{title}</h5>
        <SmallButton>{category}</SmallButton>
      </div>
    </FooterCardWrapper>
  )
}

export default FooterCard
