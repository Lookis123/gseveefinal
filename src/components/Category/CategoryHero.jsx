import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"
import CategoryPanel from "./CategoryPanel"
import { MobileCategoryMenuPanel } from "./MobileCategoryPanel"

const Section = styled.section`
  background-color: #f2f2f2;
  position: relative;
`
const BottomBack = styled.div`
  height: 284px;
  margin-top: -200px;
  background-color: ${props => props.color};
  ${down("lg")} {
    display: none;
  }
`
const Panel = styled.div`
  /* position: absolute; */
  padding-top: 94px;
`

const CategoryHero = ({
  catergoryItemData,
  subtagsData,
  resourceData,
  categoryData,
}) => {
  return (
    <Section>
      <div className="desktop-activities">
        <Panel className="container">
          <CategoryPanel
            isTop={true}
            catergoryItemData={catergoryItemData}
            subtagsData={subtagsData}
            categoryData={categoryData}
            resourceData={resourceData}
            boxType="second"
          />
        </Panel>
      </div>
      <div className="mobile-activities">
        <Panel className="container mb-5" id="bounder" name="bounder">
          <MobileCategoryMenuPanel
            isTop={true}
            data={catergoryItemData}
            resourceData={resourceData}
            subtagsData={subtagsData}
            categoryData={categoryData}
          />
        </Panel>
      </div>
      <BottomBack color={catergoryItemData.data.color}></BottomBack>
    </Section>
  )
}
export default CategoryHero
