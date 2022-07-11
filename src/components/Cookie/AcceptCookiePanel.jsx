import React from "react"
import styled from "styled-components"

import CustomButton from "../common/CustomButton"

const ContentBox = styled.div`
  color: white;
  & h5 {
    font-family: CeraGR-Bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: left;
  }
  & a,
  span {
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
  }
  & a {
    text-decoration: underline;
  }
`
const ReadMore = styled.button`
  font-family: "CeraGR-Regular";
  font-size: 14px;
  line-height: 22px;
  text-decoration-line: underline;
  color: white;
  background-color: transparent;
  border: none;
`

const AcceptCookiePanel = props => {
  const { handleClose, handleShowCookieDialog } = props

  return (
    <ContentBox className="row">
      <h5 className="text-white"> Cookie Policy</h5>
      <p className="text-white">
        {" "}
        We use cookies to optimize your experience on our website and gather
        some information about your navigation.
      </p>
      <div className="col-lg-12 d-flex justify-content-between mt-5 mb-0 align-items-center">
        <ReadMore
          style={{ textDecoration: "underline" }}
          onClick={handleShowCookieDialog}
        >
          Read More
        </ReadMore>
        <div className="d-flex">
          <CustomButton
            onClick={handleClose}
            className="text-blue bg-white  py-2 mx-1"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Αποδοχή
          </CustomButton>
          <CustomButton
            onClick={handleClose}
            className="text-blue bg-white  py-2 mx-1"
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Απόρριψη
          </CustomButton>
        </div>
      </div>
    </ContentBox>
  )
}
export default AcceptCookiePanel
