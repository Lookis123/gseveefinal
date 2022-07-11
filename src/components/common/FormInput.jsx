import React from "react"
import styled from "styled-components"
import { MagnifierIcon } from "../../utils/imgImport"

const InputWrapper = styled.input`
  outline: none;
  border: none;
  margin: 3px;
  width: -webkit-fill-available;
`
const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.blue};
  margin: 10px 0;
  padding: 0 4px;
`

const FormInput = props => {
  const { type, value, ...rest } = props
  return (
    <Wrapper className="d-flex">
      {value !== "" && type === "search" && (
        <div style={{ width: "15px", height: "15px" }}>
          <span>&#10232;</span>
        </div>
      )}
      <InputWrapper {...rest} value={value}></InputWrapper>
      {/* {type === "search" && } */}
      {/* <image src={MagnifierIcon} style={{ width: "16px", height: "16px" }} /> */}
      {value === "" && (
        <div style={{ width: "15px", height: "15px" }}>
          <img src={MagnifierIcon} className="w-100 h-100" alt="" />
        </div>
      )}
    </Wrapper>
  )
}
export default FormInput
