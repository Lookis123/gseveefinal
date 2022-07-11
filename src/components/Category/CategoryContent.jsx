import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Typography, CustomRichText } from "../styled"

const Section = styled.section`
  background-color: #f2f2f2;
`
const Row = styled.div`
  padding-top: 95px;
  padding-bottom: 95px;
`
const ImageWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  max-width: 404px;
  padding: 70px 110px;
  margin-left: auto;
  margin-right: auto;
  ${down("md")} {
    margin-top: 30px;
  }
`
const Image = styled.img`
  width: 175px;
  height: 135px;
`
const CategoryPoints = styled.div`
  &.category-points {
    counter-increment: title;

    h5 {
      position: relative;
      padding-left: 32px;
      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: counter(title);
        border-radius: 50%;
        width: 24px;
        height: 24px;
        background-color: ${props => props.color};
        color: white;
        font-family: "CeraGR-Bold";
        font-size: 16px;
        line-height: 16px;
        padding-left: 7.3px;
        padding-top: 2.3px;
      }
    }
  }
`

const CategoryContent = ({ data }) => {
  const {
    key_questioning_title,
    key_questioning_description,
    intervation_title,
    intervation_description,
    points,
    icon,
    color,
  } = data
  // console.log(points)
  return (
    <Section>
      <div className="container pb-5">
        <Row
          className="row"
          style={{ borderBottom: "1px solid rgba(0, 47, 108, 0.2);" }}
        >
          <div className="col-md-6">
            <Typography variant="h4">{key_questioning_title}</Typography>
          </div>
          <div className="col-md-6">
            <Typography>{key_questioning_description}</Typography>
          </div>
        </Row>
        <Row className="row align-items-center">
          <div className="col-md-6">
            <Typography variant="h4" className="mb-4">
              {intervation_title}
            </Typography>
            <Typography>{intervation_description}</Typography>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <ImageWrapper>
              <Image src={icon.url} alt="icon" />
            </ImageWrapper>
          </div>
        </Row>
        {points.map((item, idx) => (
          <CategoryPoints className="category-points" color={color}>
            <CustomRichText
              dangerouslySetInnerHTML={{ __html: item.point.html }}
              key={idx}
            />
          </CategoryPoints>
        ))}
      </div>
    </Section>
  )
}
export default CategoryContent
