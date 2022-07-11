import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  getCategoryColorbyID,
  getCategoryOverlayImgbyID,
} from "../../utils/staticData"
import ImageWrapper from "./ImageWrapper"
import { Box3 } from "../styled"
import formatDate from "../../utils/formatDate"

const Inner3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 28px 26px;
  .date {
    flex-shrink: 0;
  }
`
const Type3 = styled.h5`
  text-decoration-line: underline;
  margin-right: 12px;
  font-family: CeraGR-Regular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  flex-shrink: 0;
`
const Title3 = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  letter-spacing: -0.02em;
  margin-bottom: auto;
  font-family: CeraGR-Bold;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.02em;
  text-align: left;
  margin-bottom: 18px;
  height: 120px;
  color: ${({ theme }) => theme.colors.blue};
`
const Category3 = styled.p`
  margin-right: 4px;
  padding: 1px 6px;
  font-family: "CeraGR-Regular";
  font-size: 14px;
  line-height: 24px;
  background: rgba(0, 47, 108, 0.1);
  width: max-content;
  color: #002f6c;
  cursor: pointer;
  flex-shrink: 0;
`

const Wrapper2 = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  width: ${props => (props.width ? props.width : "266px")};
  background-color: white;
  border-radius: 6px;
  flex-shrink: 0;
  border-bottom: ${props =>
    !props.color ? "unset" : `6px solid ${props.color}`};
  & .type2 {
    margin-top: 25px;
    /* padding: 0 10px; */
  }
  & .title {
    /* padding: 0 10px; */
    margin: 10px 0;
  }
  & .type3 {
    background: #002f6c1a;
    padding: 13px 15px;
    width: max-content;
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #002f6c;
    margin-bottom: 28px;
    /* width: auto; */
    /* margin-left: 10px;
    margin-right: 10px; */
  }
`

const CustomLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    text-underline-position: below;
  }
`

const ContentBox = props => {
  const {
    resourceData,
    categoryData,
    height,
    margin = undefined,
    borderBottom = undefined,
    boxShadow = undefined,
    ...rest
  } = props

  const [isShown, setIsShown] = useState(false)

  const resourceCategories = resourceData?.data.categories.map(
    catId => categoryData.filter(item => item.prismicId === catId.item.id)[0]
  )

  // console.log("resource: ", resourceData)
  // console.log("category Data: ", categoryData)
  // console.log("resourceCategories: ", resourceCategories)
  // console.log("is show:", isShown)

  return (
    <Box3
      className="content-box"
      color={getCategoryColorbyID(
        categoryData,
        resourceData?.data.category?.id
      )}
      height={height}
      margin={margin}
      borderBottom={borderBottom}
      boxShadow={boxShadow}
      {...rest}
    >
      <ImageWrapper
        position={resourceData?.data.overlay_position}
        type={resourceData?.data.category.id}
        categoryData={categoryData}
        width={rest.width}
        color={getCategoryColorbyID(
          categoryData,
          resourceData?.data.category?.id
        )}
        icon={getCategoryOverlayImgbyID(
          categoryData,
          resourceData?.data.category?.id
        )}
        index={resourceData?.data.category?.id}
      >
        {resourceData && (
          <GatsbyImage
            image={getImage(resourceData?.data.resource_photo)}
            alt="resource"
            className="w-100"
            width={"100%"}
          />
        )}
      </ImageWrapper>
      <Inner3>
        <div className="d-flex">
          <Type3>{resourceData?.data.resource_type}</Type3>
          <p className="date">{formatDate(resourceData?.data.post_date)}</p>
        </div>

        <CustomLink to={`/resource/${resourceData?.uid}`}>
          <Title3>{resourceData?.data.title}</Title3>
        </CustomLink>

        {resourceCategories?.length > 0 && (
          <div className="d-flex position-realtive w-100">
            <Category3>
              {
                categoryData.filter(
                  item => item.prismicId === resourceData.data.category.id
                )[0]?.data.title
              }
            </Category3>

            {resourceCategories.length > 1 && (
              <Category3
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                +{resourceCategories.length}
              </Category3>
            )}
          </div>
        )}
      </Inner3>
      {isShown && (
        <div className="show-tooltip">
          {resourceCategories.map((item, idx) => (
            <Category3 className="category" key={idx}>
              {item.data.title}
            </Category3>
          ))}
        </div>
      )}
    </Box3>
  )
}

export const ContentBox2 = props => {
  const {
    resourceData,
    categoryItemData,
    categoryData,
    height,
    width = "300px",
    ...rest
  } = props

  return (
    <Wrapper2 width={width ? width : "266px"}>
      <ImageWrapper
        position={resourceData?.data.overlay_position}
        type={resourceData?.data.category.id}
        categoryData={categoryData}
        color={categoryItemData.data.color}
        icon={categoryItemData.data.icon.url}
        index={0}
        {...rest}
        width={width ? width : "500px"}
      >
         <img className="w-100" src={resourceData.resource_photo} alt="resource" /> 
        <GatsbyImage
          position={resourceData?.data.overlay_position}
          type={resourceData?.data.category.id}
          image={getImage(resourceData?.data.resource_photo.gatsbyImageData)}
          alt="resource"
          className="w-100"
          width="266px"
        />
      </ImageWrapper>
      <h5 className="title">{resourceData?.data.title}</h5>
      <div className="d-flex align-items-center justify-content-between infopanel">
        <span className="date">{formatDate(resourceData?.data.post_date)}</span>
        <a href="#content">
          <span className="content_type">
            {resourceData?.data.group_of_subtags[0].subtag.uid}
          </span>
        </a>
      </div>
    </Wrapper2>
  )
}

export const ContentBox3 = props => {
  const { resourceData, categoryData, height, width = "300px", ...rest } = props

  return (
    <Wrapper2
      color={getCategoryColorbyID(
        categoryData,
        resourceData?.data.category?.id
      )}
      width={width ? width : "266px"}
      {...rest}
    >
      <ImageWrapper
        position={resourceData?.data.overlay_position}
        type={resourceData?.data.category.id}
        categoryData={categoryData}
        color={getCategoryColorbyID(
          categoryData,
          resourceData?.data.category?.id
        )}
        icon={getCategoryOverlayImgbyID(
          categoryData,
          resourceData?.data.category?.id
        )}
        index={resourceData?.data.category?.id}
        {...rest}
        width={width ? width : "266px"}
      >
        <GatsbyImage
          image={getImage(resourceData?.data.resource_photo.gatsbyImageData)}
          alt="resource"
          className="w-100"
          width={"100%"}
        />
      </ImageWrapper>
      <div className="container">
        <div className="d-flex align-items-center type2">
          <a href="#content">
            <span className="content_type">
              {resourceData?.data.resource_type}
            </span>
          </a>
          <span className="date">
            {formatDate(resourceData?.data.post_date)}
          </span>
        </div>
        <CustomLink to={`/resource/${resourceData?.uid}`}>
          <h5 className="title">{resourceData?.data.title}</h5>
        </CustomLink>
        <div className="type3">
          <span>Οικονομία - Επιχειρηματικότητα</span>
        </div>
      </div>
    </Wrapper2>
  )
}
export const ContentBox4 = props => {
  const {
    resourceData,
    categoryData,
    catergoryItemData,
    height,
    margin = undefined,
    borderBottom = undefined,
    boxShadow = undefined,
    ...rest
  } = props

  const [isShown, setIsShown] = useState(false)
  const resourceCategories = resourceData?.data.categories.map(
    catId => categoryData?.filter(item => item.prismicId === catId.item.id)[0]
  )

  return (
    <Box3
      className="content-box"
      color={catergoryItemData?.color}
      height={height}
      margin={margin}
      borderBottom={borderBottom}
      boxShadow={boxShadow}
      {...rest}
    >
      <ImageWrapper
        position={resourceData?.data.overlay_position}
        type={resourceData?.data.category.id}
        categoryData={categoryData}
        width={rest.width}
        color={catergoryItemData?.color}
        icon={catergoryItemData?.overlay_img.url}
        index={resourceData?.data.category?.id}
      >
        {resourceData && (
          <GatsbyImage
            image={getImage(resourceData?.data.resource_photo)}
            alt="resource"
            className="w-100"
            width={"100%"}
          />
        )}
      </ImageWrapper>
      <Inner3>
        <div className="d-flex">
          <Type3>{resourceData?.data.resource_type}</Type3>
          <p className="date">{formatDate(resourceData?.data.post_date)}</p>
        </div>

        <CustomLink to={`/resource/${resourceData?.uid}`}>
          <Title3>{resourceData?.data.title}</Title3>
        </CustomLink>
        {resourceCategories?.length > 0 && (
          <div className="d-flex position-realtive w-100">
            <Category3>
              {
                categoryData?.filter(
                  item => item.prismicId === resourceData.data.category.id
                )[0].data.title
              }
            </Category3>

            {resourceCategories.length > 1 && (
              <Category3
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                +{resourceCategories.length}
              </Category3>
            )}
          </div>
        )}
      </Inner3>
      {isShown && (
        <div className="show-tooltip">
          {resourceCategories.map((item, idx) => (
            <Category3 className="category" key={idx}>
              {item.data.title}
            </Category3>
          ))}
        </div>
      )}
    </Box3>
  )
}

export default ContentBox
