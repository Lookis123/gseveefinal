import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { ContentBox2 } from "../common/ContentBox"
import FilterItem from "../common/FilterItem"
// import { resources } from "../../utils/staticData"

const Wrapper = styled.div`
  padding: ${props => (props.isTop ? "32px" : "0")};
  border-radius: 6px;
  background-color: white;
  border-bottom: ${props =>
    !props.isTop ? "unset" : `6px solid ${props.color}`};
  margin-bottom: 32px;
  & h2 {
    width: 50%;
    font-family: "CeraGR-Medium";
    font-size: 36px;
    line-height: 36px;
    /* or 100% */
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
  }
  & > a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #f2f2f2;
    padding: 16px;
    margin-top: 16px;
  }
`
const Wrapper3 = styled.div`
  padding: ${props => (props.isTop ? "32px" : "0")};
  border-radius: 6px;
  background-color: white;
  border-bottom: ${props =>
    !props.isTop ? "unset" : `6px solid ${props.color}`};
  margin-bottom: 32px;
  & h2 {
    width: 50%;
    font-family: CeraGR-Bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;
    text-decoration-line: underline;
    margin-bottom: 30px;
  }
  & > a {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid #f2f2f2;
    padding: 16px;
    margin-top: 16px;
  }
`
export default function MobileCategoryPanel(props) {
  const { isTop, categoryData, categoryItemData, resourceData } = props
  const { data } = categoryItemData
  const { icon, color, title } = data

  return (
    <Wrapper color={color} isTop={isTop}>
      {isTop && (
        <>
          <div style={{ width: "40px", height: "40px", marginBottom: "16px" }}>
            <img src={icon.url} className="w-100 h-100" alt="" />
          </div>
          <h2>{title}</h2>
          <div className="mt-4 overflow-auto ">
            <div className="d-flex w-auto">
              {resourceData.slice(0, 3).map((item, i) => (
                <ContentBox2
                  key={i}
                  resourceData={item}
                  categoryData={categoryData}
                  categoryItemData={categoryItemData}
                  icon={icon}
                  width="250px"
                  margin="0"
                  borderBottom={"none"}
                  boxShadow="none"
                />
              ))}
            </div>
          </div>
          <a href="/">
            <span>Πρόσφατο περιεχόμενο</span>
            <span>&#10095;</span>
          </a>
        </>
      )}
    </Wrapper>
  )
}

export const MobileCategoryMenuPanel = props => {
  const { data, resourceData, subtagsData, categoryData } = props
  const { prismicId } = data
  const { icon, color, title } = data.data
  const [showMore, setShowMore] = useState(false)

  let subtagsData2 = subtagsData.filter(
    (item, i) => item.data.category.id === prismicId
  )

  const [subtag, setSubtag] = useState("YnJuIxEAACwA5BqT")
  const [resourceList, setResource] = useState(resourceData)

  useEffect(() => {
    setResource(
      resourceData.filter(item =>
        item.data.group_of_subtags.some(item => item.subtag.id === subtag)
      )
    )
  }, [subtag, resourceData])

  return (
    <Wrapper3 color={color} isTop={true} width="300px">
      <div style={{ width: "40px", height: "40px", marginBottom: "16px" }}>
        <img src={icon.url} className="w-100 h-100" alt="" />
      </div>
      <h2>{title}</h2>
      <div className="d-flex flex-wrap">
        {subtagsData2.length < 5 ? (
          subtagsData2.map((item, i) => (
            <FilterItem
              types={2}
              key={i}
              onClick={() => {
                setSubtag(item.prismicId)
              }}
            >
              {item.data.tag_name}
            </FilterItem>
          ))
        ) : (
          <>
            {showMore
              ? subtagsData2.map((item, i) => (
                  <FilterItem
                    types={2}
                    key={i}
                    onClick={() => {
                      setSubtag(item.prismicId)
                    }}
                  >
                    {item.data.tag_name}
                  </FilterItem>
                ))
              : subtagsData2.slice(0, 3).map((item, i) => (
                  <FilterItem
                    types={2}
                    key={i}
                    onClick={() => {
                      setSubtag(item.prismicId)
                    }}
                  >
                    {item.data.tag_name}
                  </FilterItem>
                ))}
            <FilterItem
              types={2}
              onClick={() => {
                setShowMore(!showMore)
              }}
              key={17}
            >
              {showMore ? "Show Less" : `+${subtagsData2.length - 3}`}
            </FilterItem>
          </>
        )}
      </div>
      <div className="mt-4 overflow-auto ">
        <div className="d-flex w-auto">
          {resourceList
            ?.filter(item => item.data.category.id === prismicId)
            .slice(0, 3)
            .map((item, i) => (
              <ContentBox2
                key={i}
                categoryItemData={data}
                categoryData={categoryData}
                resourceData={item}
                icon={icon}
                width="250px"
                margin="0"
                borderBottom={"none"}
                boxShadow="none"
              />
            ))}
        </div>
      </div>
      <a href="/">
        <span>Πρόσφατο περιεχόμενο</span>
        <span>&#10095;</span>
      </a>
    </Wrapper3>
  )
}
