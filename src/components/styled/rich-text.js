import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Tickle } from "../../utils/imgImport"

export const CustomRichText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  strong,
  pre,
  i {
    margin-left: auto;
    margin-right: auto;
  }
  strong {
    font-family: CeraGR-Bold;
    margin-bottom: 20px;
  }
  p {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  pre {
    position: relative;
    font-family: CeraGR-RegularItalic;
    font-size: 24px;
    line-height: 30px;
    overflow: unset;
    white-space: normal;
    color: #002f6c;
    padding-left: 90px;
    margin-top: 20px;
    margin-bottom: 20p;
    &::before {
      content: "";
      position: absolute;
      background-image: url(${Tickle});
      background-repeat: no-repeat;
      left: 0;
      width: 67px;
      height: 55px;
    }
  }
  .block-img {
    max-width: max-content;
    margin-top: 40px;
    margin-bottom: 40px;
    ${down("sm")} {
      img {
        width: 100%;
      }
    }
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 394px;
  }
`
