import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const FilterItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  /* max-width: 165px; */
  background: ${props =>
    props.type
      ? props.selected
        ? "#F1F1F1"
        : "transparent"
      : props.selected
      ? props.theme.colors.blue
      : "#F1F1F1"};
  margin: 4px 4px;
  margin-left: 4px;
  ${down("lg")} {
    /* margin: 0; */
    margin-left: 0;
    margin-right: 8px;
    margin-top: 0;
    margin-bottom: 8px;
    padding: ${props => (props.types === 2 ? "13px 15px" : "2px 8px")};
  }
  border: ${props => props.type && "1px solid rgba(241, 241, 241, 0.5)"};
  cursor: pointer;
`
const ItemDotWrapper = styled.span`
  width: 8px;
  height: 8px;
  left: 8px;
  top: 9px;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin-right: 10px;
  flex-shrink: 0;
`
const ItemTextWrapper = styled.div`
  font-family: "CeraGR-Regular";
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  /* flex-shrink: 0; */
  color: ${props =>
    props.type
      ? props.selected
        ? props.theme.colors.blue
        : "white"
      : props.selected
      ? "white"
      : props.theme.colors.blue};
`

const FilterItem = props => {
  const { children, color, style0, ...rest } = props

  return (
    <FilterItemWrapper className="filterItem" style={style0} {...rest}>
      {color ? <ItemDotWrapper color={color}> </ItemDotWrapper> : void 0}
      <ItemTextWrapper {...rest}>
        {/* {children.length > 16 ? children.substring(0, 15) + "..." : children} */}
        {children}
      </ItemTextWrapper>
    </FilterItemWrapper>
  )
}
const FilterCheckItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 14px 16px;
  margin: 8px 0;
  & checkitem {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => (props.isSelected ? "#002f6c" : "white")};
  }
  & dot {
    width: 8px;
    height: 8px;
    left: 8px;
    top: 9px;
    background-color: ${props => props.color};
    border-radius: 50%;
    margin-right: 10px;
  }
  & .label {
    margin-left: 14px;
    //styleName: Buttons/Medium/ Default;
    font-family: ${props =>
      props.isSelected ? "CeraGR-Medium" : "CeraGR-Regular"};
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`
export const FilterCheckItem = props => {
  const { label, color, isSelected = true, onClick } = props
  return (
    <FilterCheckItemWrapper
      color={color}
      isSelected={isSelected}
      onClick={onClick}
    >
      <div className="d-flex">
        <checkitem>
          <svg
            width="17"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8155 0L12 1.20033L4.32232 9L0 4.62003L1.18453 3.40501L4.32232 6.59935L10.8155 0Z"
              fill="white"
            />
          </svg>
        </checkitem>
        <span className="label">{label}</span>
      </div>

      {color ? <dot color={color}> </dot> : void 0}
    </FilterCheckItemWrapper>
  )
}

const ItemElem2Wrapper = styled.span`
  font-family: "CeraGR-Regular";
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  margin-left: ${props => (props.ml ? props.ml : "8px")};
  margin-right: ${props => (props.ml ? props.mr : "8px")};
  color: ${props => (props.selected ? "white" : props.theme.colors.blue)};
`
const Item2Wrapper = styled.button`
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
  align-items: center;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "unset"};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "unset"};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "unset")};
  margin-left: ${props => (props.ml ? props.ml : "0px")};
  margin-right: ${props => (props.mr ? props.mr : "0px")};
  ${down("lg")} {
    flex-direction: ${props => (props.type === 1 ? "column" : "unset")};
    justify-content: ${props => (props.type === 1 ? "column" : "unset")};
    align-items: ${props => (props.type === 1 ? "column" : "center")};
  }
`

const Item4Wrapper = styled.button`
  display: flex;
  outline: none;
  border: none;
  background-color: transparent;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "unset"};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "unset"};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "unset")};
  margin-left: ${props => (props.ml ? props.ml : "0px")};
  margin-right: ${props => (props.mr ? props.mr : "0px")};
  ${down("lg")} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Item2IconWrapper = styled.img`
  width: 17px;
  height: 17px;
`
export const FilterItem2 = props => {
  const { label, icon, labelProps, ...rest } = props
  return (
    <Item2Wrapper {...rest}>
      <Item2IconWrapper className="me-1" src={icon} alt="social icon" />
      <ItemElem2Wrapper key={2} {...labelProps}>
        {label}
      </ItemElem2Wrapper>
    </Item2Wrapper>
  )
}

export const FilterItem4 = props => {
  const { label, icon, labelProps, ...rest } = props
  return (
    <Item4Wrapper {...rest}>
      <Item2IconWrapper className="me-1" src={icon} alt="social icon" />
      <ItemElem2Wrapper key={2} {...labelProps}>
        {label}
      </ItemElem2Wrapper>
    </Item4Wrapper>
  )
}

export default FilterItem
