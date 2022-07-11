import React from "react"
import styled from "styled-components"

const TextContainerWrapper = styled.p`
  //styleName: Paragraph;
  font-family: "CeraGR-Regular";
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  padding: 16px 0;
`
const QuoteContainerWrapper = styled.h2`
  //styleName: Quote;
  font-family: CeraGR-RegularItalic;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  font-style: italic;
`
const TextContainer = ({ children }) => {
  return <TextContainerWrapper>{children}</TextContainerWrapper>
}
export const QuoteContainer = ({ children }) => {
  return <QuoteContainerWrapper>{children}</QuoteContainerWrapper>
}
export default TextContainer
