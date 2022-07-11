import React from "react"
import styled from "styled-components"
import CategoryPanel, { EmptyPanel } from "./CategoryPanel"
import MobileCategoryPanel from "./MobileCategoryPanel"

const GroupWrapper = styled.div`
  min-height: 435px;
  /* position: relative; */
  display: flex;

  box-shadow: ${props =>
    props.noshadow ? "unset" : " 0px 14px 24px rgba(0, 47, 108, 0.07)"};
`
const SimpleContainer = styled.div`
  position: relative;
  /* top: 0; */
  /* left: ${props => (props.id ? `${props.id * 30}px` : 0)}; */
  z-index: ${props => (props.isTop ? "999" : 1)};
`
const CategoryPanelGroup = ({
  categoryData,
  resourceData,
  subtagsData,
  selectedCategory,
  setCategory,
}) => {
  // const [top, setTop] = React.useState(-1)
  // const { category, setCategory } = props
  // const data = category_menus.filter((cat, idx) => cat.subtitle === category)[0]
  // let len = category_menus.length
  // let currentSel = category_menus.findIndex(cat => cat.subtitle === category)
  let curIndex = 6
  categoryData.forEach((catergoryItem, idx) => {
    if (catergoryItem.data.title === selectedCategory) {
      curIndex = idx
    }
  })
  return (
    <>
      <div className="desktop-activities">
        <GroupWrapper>
          {categoryData.map((catergoryItem, i) => (
            <SimpleContainer
              id={i}
              key={i}
              isTop={catergoryItem.data.title === selectedCategory}
              onClick={() => setCategory(catergoryItem.data.title)}
            >
              {catergoryItem.data.title === selectedCategory ? (
                <CategoryPanel
                  key={i}
                  id={i}
                  isTop={true}
                  isBackward={i < categoryData.length - 1}
                  catergoryItemData={catergoryItem}
                  subtagsData={subtagsData}
                  resourceData={resourceData}
                  categoryData={categoryData}
                />
              ) : (
                <EmptyPanel
                  key={i}
                  id={i}
                  catergoryItemData={catergoryItem}
                  isBackward={i > curIndex}
                  isLast={i === categoryData.length - 1}
                />
              )}
            </SimpleContainer>
          ))}
        </GroupWrapper>
      </div>
      <div className="mobile-activities">
        {categoryData.map((catergoryItem, i) => (
          <MobileCategoryPanel
            key={i}
            id={i}
            isTop={selectedCategory === catergoryItem.data.title}
            categoryItemData={catergoryItem}
            categoryData={categoryData}
            resourceData={resourceData}
          />
        ))}
      </div>
    </>
  )
}

export default CategoryPanelGroup
