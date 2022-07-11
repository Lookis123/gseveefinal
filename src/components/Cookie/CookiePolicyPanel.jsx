import React from "react"
import ReactTooltip from "react-tooltip"
import styled from "styled-components"

import CookieAccordion from "./CookieAccordion"
import Cookies from "js-cookie"

const Eclipse = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #c4c4c4;
  margin-left: 16px;
  border-radius: 50%;
`
const Title = styled.h4`
  /* font-family: CF Asty Pro; */
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  /* color: #373c40; */
`

const PanelContainer = styled.div`
  border: 1px solid #ededed;
  background-color: white;
  padding: 24px;
  color: white;

  box-shadow: 0px 4px 34px rgba(0, 0, 0, 0.16);
  & span {
    /* color: black; */
  }
`

const A = styled.a`
  text-decoration: underline;
  color: #002f6c;
  /* color: black; */
`
const CustomButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  /* outline:none; */
  border: none;
  /* color: black; */
  color: #002f6c;
  background-color: #e0e0e0;
`

const CookiePolicyPanel = props => {
  const { handleClose } = props
  return (
    <PanelContainer>
      <div className="d-flex align-items-center">
        <Title>Cookies Policy</Title>
        <Eclipse data-tip data-for="global">
          ?
        </Eclipse>
        <ReactTooltip
          id="global"
          aria-haspopup="true"
          role="example"
          backgroundColor="#002f6c"
        >
          <div
            style={{
              width: "326px",
              backgroundColor: "#002f6c",
              padding: "8px 0",
            }}
          >
            <span
              style={{
                color: "white",
                fontFamily: "CF Asty Pro",
                fontSize: "14px",
                marginBottom: "60px",
                lineHeight: "24px",
                fontWeight: "400, Regular",
              }}
            >
              Τα cookies είναι μικρά αρχεία τα οποία περιέχουν πληροφορίες, οι
              οποίες αποστέλλονται από τον εκάστοτε διαδικτυακό τόπο στην
              ηλεκτρονική συσκευή των διαδικτυακών επισκεπτών/ χρηστών. Τα
              cookies δεν προκαλούν βλάβη στην ηλεκτρονική συσκευή ή στα αρχεία
              που περιέχονται σε αυτήν ούτε εξασφαλίζουν την πρόσβαση σε αυτά.
              Επίσης δεν μπορεί να αναγνωριστεί με τα cookies η ταυτότητα του
              διαδικτυακού επισκέπτη/ χρήστη αλλά υπό προϋποθέσεις οδηγούν στην
              αναγνώριση της ηλεκτρονικής συσκευής του.
            </span>
          </div>
        </ReactTooltip>
      </div>
      <div className="row mt-2 mb-2" style={{}}>
        <span>
          Στο αρχείο, χρησιμοποιούμε cookies για την εξασφάλιση της
          λειτουργικότητας, την διατήρηση των προτιμήσεων σου, την ανώνυμη
          στατιστική παρακολούθηση της επισκεψιμότας και την προβολή σχετικού
          περιεχομένου στα μέσα δικτύωσης.
        </span>
      </div>
      <div className="row my-2">
        <CookieAccordion />
      </div>
      {/* <div className="row my-4"> */}
      <div className="col-lg-12 d-flex justify-content-between mt-3 mb-0 align-items-center">
        <A href="/cookie">Cookie Policy Page</A>
        <div className="d-flex">
          <CustomButton
            className="me-3"
            onClick={() => {
              Cookies.set("consent", "true")
              handleClose()
            }}
          >
            Επιβεβαίωση των επιλογών μου
          </CustomButton>
          <CustomButton
            onClick={() => {
              Cookies.set("consent", "true")
              handleClose()
            }}
          >
            Αποδοχή Όλων
          </CustomButton>
        </div>
      </div>
    </PanelContainer>
  )
}

export default CookiePolicyPanel
/** */
