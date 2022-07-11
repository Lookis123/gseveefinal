import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { down } from "styled-breakpoints"

const Tab = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: white;
  text-align: center;
  h2 {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    margin-bottom: 50px;
  }
  ${down("md")} {
    padding-top: 40px;
    padding-bottom: 40px;
    .power-img {
      width: 100%;
    }
  }
`

const PowerTab = () => (
  <Tab>
    <div className="container">
      <h2>Στη δύναμη της υπάγονται:</h2>
      <StaticImage
        className="power-img"
        src="../../images/power.png"
        alt="power includes"
      />
    </div>
  </Tab>
)

export default PowerTab
