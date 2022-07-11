import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { down, up } from "styled-breakpoints"
import styled from "styled-components"

const roles = [
  `<p>
    Λαμβάνει μέρος ως ένας από τους εθνικούς κοινωνικούς εταίρους (ΓΣΕΕ, ΓΣΕΒΕΕ,
    ΕΣΕΕ, ΣΕΒ, ΣΕΤΕ, ΣΒΕ) <strong>στις συλλογικές</strong> διαπραγματεύσεις για
    την υπογραφή της Εθνικής Γενικής Συλλογικής Σύμβασης Εργασίας.
  </p>`,
  `<p>
    Προωθεί τις θέσεις της για καίρια
    <strong>ζητήματα της επικαιρότητας</strong> και γνωμοδοτεί για νόμους,
    εγκυκλίους και διατάγματα μέσω του αναγνωρισμένου και
    <strong>υψηλού επιπέδου επιστημονικού έργου</strong> που υλοποιεί
  </p>`,
  ` <p>
    <strong>Συμμετέχει ενεργά</strong> με εκπροσώπους της σε
    <strong>σημαντικές επιτροπές</strong>,
    <strong>φορείς και οργανισμούς</strong> όπως ο ΟΑΕΔ, ο Μηχανισμός Καθορισμού
    Κατώτατου Μισθού, το Ανώτατο Συμβούλιο Εργασίας, η Οικονομική και Κοινωνική
    Επιτροπή.
  </p>`,
  ` <p>
    Παράλληλα, αναπτύσσει και ενισχύει το
    <strong>συνεταιριστικό, συνδικαλιστικό και συλλογικό πνεύμα</strong>
    διαμορφώνοντας με τη δράση της έναν κοινωνικό χώρο αλληλεγγύης,
    συνεργατικότητας, δημοκρατικότητας και κοινωνικής υπευθυνότητας των ανθρώπων
    της μικρομεσαίας επιχειρηματικότητας
  </p>`,
]

const Tab = styled.div`
  background-color: #f2f2f2;
  padding-top: 100px;
  padding-bottom: 100px;
  .role-img {
    max-width: 388px;
    mix-blend-mode: luminosity;
    border-radius: 8px;
    margin-top: 30px;
    ${up("md")} {
      margin-top: 0;
    }
  }
  .role {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    &-index {
      border-radius: 50%;
      font-family: "CeraGR-Bold";
      font-size: 48px;
      line-height: 50px;
      letter-spacing: -0.02em;
      border: 1px solid #af8373;
      width: 64px;
      height: 64px;
      flex-shrink: 0;
      margin-right: 30px;
      text-align: center;
    }
  }
  p {
    font-family: "CeraGR-Regular";
    font-size: 16px;
    line-height: 26px;
  }
  ${down("md")} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`

const InstitutionalTab = () => (
  <Tab id="Θεσμικός ρόλος">
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <h2 className="role">O θεσμικός ρόλος της ΓΣΕΒΕΕΕ</h2>
          <p className="role-content mt-auto">
            Η ΓΣΕΒΕΕ συμμετέχει στον δημόσιο διάλογο εκπροσωπώντας τις μικρές
            επιχειρήσεις επιδιώκοντας την αύξηση της απασχόλησης, την κοινωνική
            αλληλεγγύη και συνοχή, την ισότητα ευκαιριών και τη διαμόρφωση
            υγιούς περιβάλλοντος λειτουργίας των μικρομεσαίων επιχειρήσεων. Για
            τους σκοπούς αυτούς:
          </p>
        </div>
        <div className="col-md-6 text-center">
          <StaticImage
            className="role-img"
            src="../../images/role.png"
            alt="role"
          />
        </div>
      </div>
      <div className="row mt-5 py-5">
        {roles.map((item, idx) => (
          <div className="col-md-6 d-flex mt-5" key={idx}>
            <p className="role-index">{idx + 1}</p>
            <div dangerouslySetInnerHTML={{ __html: item }} />
          </div>
        ))}
      </div>
    </div>
  </Tab>
)

export default InstitutionalTab
