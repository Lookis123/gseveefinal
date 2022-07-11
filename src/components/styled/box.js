import styled from "styled-components"
import { down } from "styled-breakpoints"

export const Box3 = styled.div`
  width: ${props => (props.width ? props.width : "400px")};
  ${down("lg")} {
    width: 266px !important;
    height: 393px !important;
  }
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: #ffffff;
  box-shadow: ${props =>
    props.boxShadow ? props.boxShadow : "0px 14px 24px rgba(0, 47, 108, 0.07)"};
  border-radius: 4px;
  /* margin: ${props => (props.margin ? props.margin : "0 15px")}; */
  border-bottom: ${props =>
    props.borderBottom ? props.borderBottom : `4px solid ${props.color}`};
  position: relative;
`
