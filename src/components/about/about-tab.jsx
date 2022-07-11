import React from "react"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"
import { Quote } from "../../utils/imgImport"

const Tab = styled.div`
  background: #f2f2f2;
  padding: 50px 0 80px;
  ${down("md")} {
    padding: 20px 0 40px;
  }
  h2 {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #002f6c;
  }
  .content {
    font-family: "CeraGR-Regular";
    font-size: 16px;
    line-height: 26px;
    color: #002f6c;
  }
`
const Row = styled.div`
  flex-direction: column-reverse;
  ${up("md")} {
    flex-direction: row;
  }
`
const Frame = styled.div`
  background: rgba(0, 47, 108, 0.1);
  border-radius: 8px;
  padding: 50px;
  text-align: center;
  width: 100%;
  max-width: 100%;
  margin: 24px 0;
  ${up("md")} {
    margin: 0;
    max-width: 390px;
  }
  p {
    font-family: "CeraGR-Medium";
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.02em;
    color: rgba(0, 47, 108, 0.9);
  }
  h4 {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    color: rgba(0, 47, 108, 0.9);
    position: relative;
    margin: 0;
    display: inline;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 8px;
      background-color: #af8373;
      left: 0;
      bottom: -12px;
    }
  }
`
const QuoteText = styled.p`
  position: relative;
  font-family: "CeraGR-BoldItalic";
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #af8373;
  padding-left: 80px;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${Quote});
    width: 67px;
    height: 55px;
    left: 0;
  }
  margin-top: 30px;
  ${up("md")} {
    margin-top: 0;
  }
`

const AboutTab = () => {
  return (
    <Tab id="ΓΣΕΒΕΕ">
      <div className="container">
        <h2>Ποια είναι η ΓΣΕΒΕΕ</h2>
        <div className="row my-5 align-items-center">
          <div className="col-md-6">
            <p className="content">
              Η ΓΣΕΒΕΕ ιδρύεται το 1919 με σκοπό την υπεράσπιση, προαγωγή και
              κατοχύρωση των επαγγελματικών, οικονομικών και κοινωνικών
              συμφερόντων των επαγγελματιών, βιοτεχνών και εμπόρων της Ελλάδας.
              Αποτελεί έναν από τους εθνικούς κοινωνικούς εταίρους που λαμβάνουν
              μέρος στις συλλογικές διαπραγματεύσεις για την υπογραφή της
              Εθνικής Γενικής Συλλογικής Σύμβασης Εργασίας (ΓΣΕΕ, ΓΣΕΒΕΕ, ΕΣΕΕ,
              ΣΕΒ, ΣΕΤΕ, ΣΒΕ) συμμετέχοντας με την ιδιότητα αυτή στον κοινωνικό
              διάλογο.{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Frame>
              <p className="mb-2">περισσότερα από</p>
              <h4>100 χρόνια</h4>
            </Frame>
          </div>
        </div>
        <Row className="row my-5 align-items-center">
          <div className="col-md-6 d-flex justify-content-start">
            <Frame>
              <h4>140.000</h4>
              <p className="mt-4">εγγεγραμμένοι επιχειρηματίες</p>
            </Frame>
          </div>
          <div className="col-md-6">
            <p className="content">
              Παραμένει, για περισσότερα από <strong>100 χρόνια</strong>, η
              εργοδοτική οργάνωση με το μεγαλύτερο εύρος εκπροσώπησης με μέλη
              της <strong>57 τοπικές</strong> και{" "}
              <strong>30 κλαδικές Ομοσπονδίες</strong>, στις οποίες συμμετέχουν{" "}
              <strong>1.100 πρωτοβάθμια Σωματεία</strong> και περίπου{" "}
              <strong>140.000 εγγεγραμμένοι επιχειρηματίες</strong>. Δεκάδες
              ειδικότητες και επαγγέλματα του δευτερογενούς και τριτογενούς
              τομέα της οικονομίας, όπως τα επαγγέλματα της
              κατασκευής-οικοδομής, του επισιτισμού, της επισκευής οχημάτων, της
              παροχής υπηρεσιών κ.ο.κ., εκπροσωπούνται από τη ΓΣΕΒΕΕ.
            </p>
          </div>
        </Row>
        <div className="row my-5 align-items-center">
          <div className="col-md-6">
            <p className="content">
              Η διαχρονική παρουσία της ΓΣΕΒΕΕ και ο πρωταγωνιστικός της ρόλος
              στις συλλογικές διεκδικήσεις και στα fora κοινωνικού διαλόγου
              συμβάλλουν στην προσπάθεια για μακρόχρονη και σταθερή ανάπτυξη των
              μικρών επιχειρήσεων και συνακόλουθα στην ενίσχυση κοινωνικής
              συνοχής επιτυγχάνοντας τη διαμόρφωση ενός περιβάλλοντος
              οικονομικής δημοκρατίας
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <QuoteText>
              Βιώσιμη ανάπτυξη, οικονομική δημοκρατία και κοινωνική συνοχή με
              τις μικρές επιχειρήσεις στο προσκήνιο
            </QuoteText>
          </div>
        </div>
      </div>
    </Tab>
  )
}

export default AboutTab
