import React from "react"
import styled from "styled-components"

import BottomModal from "../Filters/BottomModal"
import { category_filters } from "../../utils/staticData"

const Body = styled.div`
  padding: 16px;
  & details {
    border-bottom: 1px solid #d2d2d2;
  }
`

export default function FilterModal(props) {
  const { isOpen = false, onRequestClose, category, setCategory } = props

  return (
    <BottomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Φίλτρα">
      <Body>
        <details2>Θεματικές Ενότητες</details2>

        {category_filters.slice(1).map((cat, idx) => (
          <RadioButton
            key={idx}
            label={cat.label}
            isSelected={cat.value === category}
            onClick={() => {
              setCategory(cat.value)
              onRequestClose()
            }}
          />
        ))}
      </Body>
    </BottomModal>
  )
}

const RadioButtonWrapper = styled.div`
  width: 100%;
  padding: 14px;
  background-color: #f2f2f2;
  margin: 4px 0;
  display: flex;

  & > div {
    content: '""';
    padding: 2px;
    width: 20px;
    height: 20px;
    margin-right: 17px;
    border-radius: 50%;
    border: 1px solid #002f6c40;
    background-color: white;
    position: relative;
  }
  & > span {
    //styleName: Buttons / Regular;
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    font-weight: ${props => (props.isSelected ? "bold" : "unset")};

    color: #002f6c;
  }

  & .circle {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => (props.isSelected ? "#002f6c" : "unset")};
  }
`

const RadioButton = props => {
  const { label, onClick, isSelected = false } = props
  return (
    <RadioButtonWrapper onClick={onClick} isSelected={isSelected}>
      <div>
        <span className="circle" />
      </div>

      <span>{label}</span>
    </RadioButtonWrapper>
  )
}
