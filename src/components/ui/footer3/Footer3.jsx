import React from "react"
import styled from "styled-components"
import ComplexDiagram2 from "./ComplexDiagram2"
import { down } from "styled-breakpoints"

const DiagramInfo = styled.p`
  font-family: CeraGR-Regular;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin: 32px 58px;
  ${down("lg")} {
    //styleName: Subtitles/Small;
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }
`
const RightBoardTitle = styled.div`
  font-family: CeraGR-Bold;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
  color: #002f6c;

  border-radius: nullpx;
  margin-bottom: 34px;
`

const RightBoardNote = styled.p`
  font-family: CeraGR-Medium;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 40px;
  color: #002f6c;
  width: 100%;
`
const FlatButton = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ca998e;
  align-items: center;
`
const Footer3 = props => {
  return (
    <React.Fragment>
      <div className="d-flex flex-wrap m-0">
        <div className="col-12 col-lg-8 border-lg-end right-panel">
          <ComplexDiagram2 />
          <DiagramInfo>
            Η Γενική Συνομοσπονδία Επαγγελματιών Βιοτεχνών Εμπόρων Ελλάδας
            (Γ.Σ.Ε.Β.Ε.Ε.) ιδρύθηκε το 1919, ως αποτέλεσμα της ανάγκης
          </DiagramInfo>
        </div>
        <div className="col-12 col-lg-4 left-panel">
          <div className="m-0 ms-lg-4">
            <RightBoardTitle>Εγγραφή μέλους</RightBoardTitle>
            <p style={{ margin: "8px 0" }}>Για φορείς:</p>
            <RightBoardNote>Οδηγίες εγγραφής και έντυπα</RightBoardNote>
            <FlatButton className="w-100">
              <a
                href="/"
                className="w-100 py-3 py-md-2 px-3 px-md-2 d-flex justify-content-between t-underline"
              >
                <span>Διαβάστε περισσότερα</span>
                <span style={{ color: "#002f6c" }}>&#10140; </span>
              </a>
            </FlatButton>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer3
