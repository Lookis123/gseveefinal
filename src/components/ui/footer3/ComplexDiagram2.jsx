import React from "react"
import styled from "styled-components"
import Dragon from "./dragon.svg"
import Line1 from "./line1.svg"
import Line2 from "./line2.svg"
import { down } from "styled-breakpoints"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ComplexDiagram2 = props => {
  return (
    <Wrapper>
      <div className="d-flex justify-content-center">
        <Node icon={true} width="40%" title="87" subtitle="Ομοσπονδίες" />
      </div>
      <div className="d-flex justify-content-center">
        <img src={Line1} className="line1" alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <Node title="56" subtitle="Τοπικές" color="#FF8275" />
        <Node title="30" subtitle="Κλαδικές" color="#00A6A8" />
        <Node title="1" subtitle="Συνταξιούχων" color="#CA998E" />
      </div>
      <div className="d-flex justify-content-center">
        <img src={Line2} className="line2" alt="" />
      </div>
      <div className="d-flex justify-content-center">
        <Node title="1.1k" subtitle="Σωματεία" />
        <Node title="140k" subtitle="Πρόσωπα" />
      </div>
    </Wrapper>
  )
}
const NodeWrapper = styled.div`
  /* padding: 20px 18px; */
  /* padding: 13px auto; */
  padding: 18px;
  ${down("lg")} {
    padding: 13px;
  }
  border-radius: 4px;
  width: ${props => (props.width ? props.width : "30%")};
  display: flex;
  justify-content: center;
  margin: 0 5px;
  background-color: ${props =>
    props.color ? props.color : props.theme.colors.blue};
  & img {
    margin-right: 20px;
  }
  & h4 {
    font-family: CeraGR-Bold;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    ${down("lg")} {
      font-size: 22px;
      line-height: 20px;
    }
  }
  & p {
    font-family: CeraGR-Medium;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    ${down("lg")} {
      font-size: 14px;
      line-height: 10px;
    }
  }
  & h4,
  p {
    color: ${props => (props.color ? props.theme.colors.blue : "white")};
  }
  & .divix {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
const Node = ({ icon, title, subtitle, color, width }) => {
  return (
    <>
      {icon ? (
        <NodeWrapper color={color} width={width}>
          <img src={Dragon} alt="" />
          <div>
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </NodeWrapper>
      ) : (
        <NodeWrapper color={color} width={width}>
          <div className="divix">
            <h4>{title}</h4>
            <p>{subtitle}</p>
          </div>
        </NodeWrapper>
      )}
    </>
  )
}
export default ComplexDiagram2
