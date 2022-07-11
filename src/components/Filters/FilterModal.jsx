import React from "react"
import styled from "styled-components"

import BottomModal from "./BottomModal"
import { FilterCheckItem } from "../common/FilterItem"
import { category_filters, content_types } from "../../utils/staticData"

const ModalContent = styled.div`
  padding: 0 16px;
  height: 450px;
  overflow-y: auto;
  & .details {
    //styleName: Details / Bold;
    font-family: CeraGR-Bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 16px;
    margin-top: 16px;
    margin-bottom: 8px;
    color: #002f6c;
    border-bottom: 1px solid #002f6c33;
  }
  & .panel {
    height: auto;
    /* display: block; */
  }
`

const ModalBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;
  /* height: 64px; */
`

export default function FilterModal(props) {
  const {
    isOpen,
    onRequestClose,
    isCategorySelected,
    handleChangeCategoryFilter,
    isContentTypeSelected,
    handleChangeContentFilter,
    isSubtagSelected,
    handleChangeSubtagFilter,
    subtag_filters,
    categoryPage,
    clearFilter,
    count = 24,
  } = props

  return (
    <BottomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Φίλτρα">
      <ModalContent>
        <div className="panel">
          <div className="details">Θέματα</div>

          {categoryPage === true
            ? subtag_filters.map((item, idx) => (
                <FilterCheckItem
                  label={item.label}
                  color={item.color}
                  isSelected={isSubtagSelected(item.label)}
                  onClick={() => handleChangeSubtagFilter(item.label)}
                  key={idx}
                />
              ))
            : category_filters.map((item, idx) => (
                <FilterCheckItem
                  label={item.label}
                  color={item.color}
                  isSelected={isCategorySelected(item.label)}
                  onClick={() => handleChangeCategoryFilter(item.label)}
                  key={idx}
                />
              ))}
          <div className="details">Τύπος Περιεχομένου</div>
          {content_types.map((item, idx) => (
            <FilterCheckItem
              label={item}
              isSelected={isContentTypeSelected(item)}
              onClick={() => handleChangeContentFilter(item)}
              key={idx}
            />
          ))}
        </div>
      </ModalContent>
      <ModalBottom>
        <CustomButton label="Reset" onClick={clearFilter} />
        <CustomButton
          label={`Results (${count})`}
          color="white"
          backgroundColor="#002f6c"
          onClick={onRequestClose}
        />
      </ModalBottom>
    </BottomModal>
  )
}

const CustomButtonWrapper = styled.button`
  outline: none;
  border: none;
  min-width: 48%;
  /* margin: 0 5px; */
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#f2f2f2"};
  color: ${props => (props.color ? props.color : "#002f6c")};
`
const CustomButton = ({ label, backgroundColor, color, onClick }) => {
  return (
    <CustomButtonWrapper
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      {label}
    </CustomButtonWrapper>
  )
}
