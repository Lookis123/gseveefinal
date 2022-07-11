import React from "react"
import { up } from "styled-breakpoints"
import styled from "styled-components"
import { Affiliate1, Affiliate2 } from "../../utils/imgImport"
import { Typography } from "../styled/typography"

const Tab = styled.div`
  padding: 50px 0;
  .title {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    color: #002f6c;
  }
  ${up("md")} {
    padding: 100px 0;
  }
`
const AffiliateBox = styled.div`
  padding: 30px 24px;
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  height: 280px;
`

const affiliates = [
  {
    img: Affiliate1,
    to: "https://imegsevee.gr",
    text: "Το ΙΜΕ ΓΣΕΒΕΕ είναι μελετητικός φορέας για τις μικρομεσαίες επιχειρήσεις της χώρας και υποστηρίζει επιστημονικά τη ΓΣΕΒΕΕ",
    color: "#852A41",
  },
  {
    img: Affiliate2,
    text: "Το ΚΕΚ ΓΣΕΒΕΕ είναι ο εκπαιδευτικός οργανισμός της ΓΣΕΒΕΕ. Σχεδιάζει και υλοποιεί δράσεις εκπαίδευσης, κατάρτισης και πιστοποίησης προσόντων για το ανθρώπινο δυναμικό .",
    color: "#025D5E",
    to: "https://www.kekgsevee.gr ",
  },
]

const AffiliatesTab = () => (
  <Tab id="Συνδεόμενοι Φορείς">
    <div className="container">
      <h2 className="title">Συνδεόμενοι Φορείς</h2>
      <div className="row">
        {affiliates.map((item, idx) => (
          <div className="col-md-6 mt-5" key={idx}>
            <a href={item.to} target="_blank" rel="noreferrer">
              <AffiliateBox>
                <img className="w-100" src={item.img} alt="affiliates" />
                <Typography
                  className="mt-4"
                  size={14}
                  height={16}
                  color={item.color}
                >
                  {item.text}
                </Typography>
              </AffiliateBox>
            </a>
          </div>
        ))}
      </div>
    </div>
  </Tab>
)

export default AffiliatesTab
