import React, { useState } from "react"
import styled from "styled-components"

import { Typography } from "../styled/typography"
import FilterItem from "../common/FilterItem"
import { category_filters, content_types } from "../../utils/staticData"
import FilterSVG from "../../images/filters.svg"
import FilterModal from "./FilterModal"

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 47, 108, 0.2);
`

const Wrapper = styled.div`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 12px 15px;
  cursor: pointer;
  z-index: 999;
`

const FilterPanel = props => {
  const {
    category_filter,
    setCategoryFilter,
    content_filter,
    setContentFilter,
    subtag_filter,
    setSubtagFilter,
    filteredItems,
    subtag_filters,
    categoryPage,
  } = props

  const [showDlg, setShowDlg] = useState(false)

  const isCategorySelected = value => {
    return (
      (category_filter.length === 0 && value === "Όλα") ||
      (category_filter.length === category_filters.length - 1 &&
        value === "Όλα") ||
      (category_filter.length < category_filters.length - 1 &&
        category_filter.includes(value))
    )
  }
  const isContentTypeSelected = value => {
    return (
      (content_filter.length === 0 && value === "Όλα") ||
      (content_filter.length === content_types.length - 1 && value === "Όλα") ||
      (content_filter.length < content_types.length - 1 &&
        content_filter.includes(value))
    )
  }
  const isSubtagSelected = value => {
    return (
      (subtag_filter.length === 0 && value === "Όλα") ||
      (subtag_filter.length === subtag_filters.length - 1 && value === "Όλα") ||
      (subtag_filter.length < subtag_filters.length - 1 &&
        subtag_filter.includes(value))
    )
  }

  const clearFilter = () => {
    setContentFilter([])
    setCategoryFilter([])
    setSubtagFilter([])
  }

  const handleChangeContentFilter = value => {
    if (value === "Όλα") setContentFilter([])
    else {
      if (!content_filter.includes(value)) {
        if (content_filter.length < content_types.length - 2)
          setContentFilter([...content_filter, value])
        else setContentFilter([])
      } else setContentFilter(content_filter.filter(item => item !== value))
    }
  }

  const handleChangeCategoryFilter = value => {
    if (value === "Όλα") setCategoryFilter([])
    else {
      if (!category_filter.includes(value)) {
        if (category_filter.length < category_filters.length - 2)
          setCategoryFilter([...category_filter, value])
        else setCategoryFilter([])
      } else setCategoryFilter(category_filter.filter(item => item !== value))
    }
  }

  const handleChangeSubtagFilter = value => {
    if (value === "Όλα") setSubtagFilter([])
    else {
      if (!subtag_filter.includes(value)) {
        if (subtag_filter.length < subtag_filters.length - 2)
          setSubtagFilter([...subtag_filter, value])
        else setSubtagFilter([])
      } else setSubtagFilter(subtag_filter.filter(item => item !== value))
    }
  }

  return (
    <>
      <div className="mobile-activities">
        <Wrapper onClick={() => setShowDlg(true)}>
          <span className="pe-2">Φίλτρα</span>
          <img src={FilterSVG} alt="" />
        </Wrapper>
        <FilterModal
          isOpen={showDlg}
          onRequestClose={() => setShowDlg(false)}
          isCategorySelected={isCategorySelected}
          handleChangeCategoryFilter={handleChangeCategoryFilter}
          isContentTypeSelected={isContentTypeSelected}
          handleChangeContentFilter={handleChangeContentFilter}
          isSubtagSelected={isSubtagSelected}
          handleChangeSubtagFilter={handleChangeSubtagFilter}
          subtag_filters={subtag_filters}
          clearFilter={clearFilter}
          count={filteredItems.length}
          categoryPage={categoryPage}
        />
      </div>
      <div className="desktop-activities">
        {categoryPage ? (
          <FilterWrapper>
            <Typography className="me-3" variant="detail_bold">
              Θέμα
            </Typography>
            <div className="d-flex flex-wrap">
              {subtag_filters.map((item, idx) => (
                <FilterItem
                  key={idx}
                  selected={isSubtagSelected(item.label)}
                  onClick={() => handleChangeSubtagFilter(item.label)}
                >
                  {item.label}
                </FilterItem>
              ))}
            </div>
          </FilterWrapper>
        ) : (
          <FilterWrapper>
            <Typography className="me-3" variant="detail_bold">
              Θέματα
            </Typography>
            <div className="d-flex flex-wrap">
              {category_filters.map((item, idx) => (
                <FilterItem
                  key={idx}
                  color={item.color}
                  selected={isCategorySelected(item.label)}
                  onClick={() => handleChangeCategoryFilter(item.label)}
                >
                  {item.label}
                </FilterItem>
              ))}
            </div>
          </FilterWrapper>
        )}
        <FilterWrapper>
          <Typography className="me-3" variant="detail_bold">
            Τύπος Περιεχομένου
          </Typography>
          <div className="d-flex flex-wrap">
            {content_types.map((item, idx) => (
              <FilterItem
                key={idx}
                selected={isContentTypeSelected(item)}
                onClick={() => handleChangeContentFilter(item)}
              >
                {item}
              </FilterItem>
            ))}
          </div>
        </FilterWrapper>
        <div className="text-end"></div>
        <div className="row mt-5 d-flex justify-content-end">
          {(content_filter.length > 0 || category_filter.length > 0) && (
            <div
              style={{
                // minWidth: "180px",
                width: "auto",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <FilterItem
                key={12}
                selected={false}
                // onClick={() => handleChangeContentFilter("Όλα")}
                onClick={() => clearFilter()}
              >
                &#10006;&nbsp;&nbsp;
                {`Αφαίρεση ${
                  content_filter.length +
                  category_filter.length +
                  subtag_filter.length
                } Φίλτρων`}
              </FilterItem>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default FilterPanel
