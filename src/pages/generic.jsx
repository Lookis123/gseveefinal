import React, { useState } from "react"
import styled from "styled-components"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/ui/navbar"
import ListBox, { ListItem } from "../components/common/ListBox"
import { FilterItem2 } from "../components/common/FilterItem"
import Attachments from "../components/common/Attachments"
import { PopupContainer, PopupMenuItem } from "../components/common/PopupMenu"
import DownloadIcon from "../components/common/DownloadIcon"
import { SolidImagePanel } from "../components/common/VideoPanel"
import TextContainer, {
  QuoteContainer,
} from "../components/common/TextContainer"
import PhotoFigure from "../components/common/PhotoFigure"
import SocialModal from "../components/common/SocialModal"
import Section from "../components/common/Section"

import { Printer, Linked, Photo1, Photo2, SolidImage } from "../utils/imgImport"

const BreadCrumb2 = styled.h5`
  display: flex;
  margin-left: -80px;
  margin-bottom: 58px;
  margin-top: 80px;
  cursor: pointer;
`
const BreadCrumb2Item = styled.div`
  margin: 0 4px;
  font-family: "CeraGR-Medium";
  font-size: 20px;
  line-height: 30px;
  color: ${props => props.theme.colors.blue};
`

const attachedFiles = [
  { label: "έγγραφο_χ.pdf", to: "/" },
  { label: "βιντεο_χ.mp4", to: "/" },
  { label: "Κατεβάστε τα όλα", to: "/" },
]

const Generic = props => {
  const [popupShow, setPopupShow] = useState("")

  const handleShowPrint = () => {}

  const onAfterOpen = () => {}

  return (
    <Layout location={props.location}>
      <Seo title="Resources Page" />
      <Section className="intro-section">
        <Navbar type="second" />
      </Section>
      <Section className="activity-section">
        <div className="container">
          <BreadCrumb2>
            <BreadCrumb2Item>&#10094;</BreadCrumb2Item>
            <BreadCrumb2Item>Γεγονότα</BreadCrumb2Item>
          </BreadCrumb2>
        </div>
        <div className="container">
          <div className="row my-4">
            <span>Ημερομηνία Ανάρτησης: 17 Νοε. 2021</span>
          </div>
          <h4
            className="mb-5"
            style={{
              fontSize: "32px",
            }}
          >
            Χρήσιμα Έγγραφα για την εγγραφή σας στην ΓΣΕΒΕΕ
          </h4>
          <h5 className="mb-5">
            Στο Πολυτεχνείο βρέθηκε λίγα λεπτά μετά τις 9:00 ο Πρόεδρος της
            ΓΣΕΒΕΕ, Γιώργος Καββαθάς για την κατάθεση στεφάνου
          </h5>

          <ListBox>
            <PopupContainer
              show={popupShow === "attach"}
              popupMenu={attachedFiles.map((file, i) => (
                <PopupMenuItem key={i} to={file.to} endItem={<DownloadIcon />}>
                  {file.label}
                </PopupMenuItem>
              ))}
            >
              <ListItem
                startItem={
                  <Attachments
                    onClick={() =>
                      setPopupShow(popupShow === "attach" ? "" : "attach")
                    }
                  />
                }
                endItem={
                  <React.Fragment>
                    <FilterItem2
                      icon={Printer}
                      label="Εκτύπωση"
                      mr="25px"
                      onClick={() => handleShowPrint()}
                    />
                    <FilterItem2
                      icon={Linked}
                      label="Κοινοποίηση"
                      key={2}
                      onClick={() => setPopupShow("modal")}
                    />
                  </React.Fragment>
                }
                endAlign={{ justifyContent: "flex-end" }}
              />
            </PopupContainer>
          </ListBox>
          <div className="container">
            <SolidImagePanel photo={SolidImage} />
          </div>
          <div className="container">
            <h5 className="w-75 mx-auto">
              Με την κατάθεση στεφάνου, τίμησε σήμερα η ΓΣΕΒΕΕ τους νεκρούς του
              Πολυτεχνείου.
            </h5>
            <div className="w-75 mx-auto mt-5 mb-5">
              <TextContainer key="t1">
                Η επέτειος της εξέγερσης στο Πολυτεχνείο είναι ημέρα τιμής σε
                όσους αγωνίστηκαν για την Δημοκρατία. Για μια ακόμη χρονιά την
                τιμούμε κάτω από τις πρωτόγνωρες συνθήκες και τους περιορισμούς
                που δημιούργησε η πανδημία.
              </TextContainer>
              <TextContainer key="t2">
                ‘Όμως αυτό δεν εμποδίζει τα μηνύματα των αγωνιστών του
                Πολυτεχνείου , τα οποία είναι πανανθρώπινα, να κινούνται στο
                μυαλό και στην καρδιά όλων των δημοκρατικών και προοδευτικών
                πολιτών.
              </TextContainer>
            </div>
          </div>
          <div className="container ">
            <div className="d-flex mx-auto" style={{ marginBottom: "38px" }}>
              <PhotoFigure
                photo={Photo1}
                className="w-50"
                caption="Φόρος τιμής για το Πολυτεχνείο"
              />
              <PhotoFigure
                photo={Photo2}
                className="w-50"
                caption="Ο Πρόεδρος της ΓΣΕΒΕΕ καταθέτει στεφάνι στο Πολυτεχνείο"
              />
            </div>
          </div>
          <div className="container">
            <div className="w-75 mx-auto">
              <div className="mt-5 mb-2 d-flex justify-content-between align-items-start">
                <div className="me-4 mt-2">
                  <svg
                    width="67"
                    height="54"
                    viewBox="0 0 67 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      d="M61.5537 1.74036L61.3072 1.33482L60.8894 1.55972C43.7663 10.7761 34.1214 24.2899 34.5958 36.6911C34.7536 41.9065 36.1725 45.8393 37.8651 48.5969C39.5473 51.3375 41.5189 52.9452 42.8114 53.464L42.9011 53.5H42.9977H46.2516H46.3885L46.5063 53.4302L62.0009 44.2565L62.2461 44.1112V43.8262V40.7165V40.4105L61.9737 40.2713L53.8568 36.1217C52.6332 34.5762 52.3296 32.8663 52.3296 29.5213C52.3296 25.8486 53.9016 21.981 56.3318 18.3517C58.7581 14.7282 62.013 11.3833 65.3108 8.76668L65.6564 8.49243L65.4273 8.11536L61.5537 1.74036ZM27.4702 1.74807L27.2258 1.32914L26.7996 1.56063C9.82947 10.7784 0.190828 24.2912 0.507545 36.6866L0.507616 36.6889C0.665139 41.9053 2.08416 45.8389 3.77701 48.5969C5.45919 51.3375 7.43086 52.9452 8.72337 53.464L8.81302 53.5H8.90962H12.1635H12.3004L12.4182 53.4302L27.9128 44.2565L28.1581 44.1112V43.8262V40.7165V40.4105L27.8857 40.2713L19.7822 36.1287C18.6971 34.5795 18.3965 32.8545 18.3965 29.5213C18.3965 25.8453 19.9323 21.9761 22.3048 18.3472C24.6739 14.7236 27.8519 11.3791 31.0722 8.76309L31.4047 8.49303L31.1889 8.12307L27.4702 1.74807Z"
                      stroke="#002F6C"
                    />
                  </svg>
                </div>

                <QuoteContainer>
                  Εξακολουθούμε να τιμάμε τους νεκρούς του Πολυτεχνείου, τη
                  μνήμη τους και την προσφορά τους στην Δημοκρατία
                </QuoteContainer>
              </div>
              <div className="mt-2 mb-5">
                <TextContainer key="t1">
                  Αποτελούν τη «βαριά» παρακαταθήκη όσων θυσιάστηκαν για την
                  ελευθερία αλλά και των χιλιάδων αγωνιστών της περιόδου
                  εκείνης.
                </TextContainer>
                <TextContainer key="t2">
                  Στη σημερινή δύσκολη συγκυρία με τις σοβαρές επιπτώσεις που
                  γέννησε η υγειονομική κρίση στην οικονομική και κοινωνική ζωή,
                  το νόημα του αγώνα αυτού, γίνεται πιο επίκαιρο παρά ποτέ ,
                  καθώς μεταφέρει στο σήμερα την ανάγκη για κοινωνική
                  υπευθυνότητα και κοινούς αγώνες ώστε η ζωή όλων μας να
                  επιστρέψει στην κανονικότητα.
                </TextContainer>
                <TextContainer key="t3">
                  Εξακολουθούμε να τιμάμε τους νεκρούς του Πολυτεχνείου, τη
                  μνήμη τους και την προσφορά τους στην Δημοκρατία, στην
                  ελευθερία, στην κοινωνική πρόοδο και στην ανεξαρτησία και
                  οφείλουμε να συνεχίσουμε τον αγώνα τους για ένα καλύτερο
                  μέλλον για εμάς και τις επόμενες γενιές.
                </TextContainer>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <SocialModal
        isOpen={popupShow === "modal"}
        onAfterOpen={onAfterOpen}
        onRequestClose={() => setPopupShow("")}
      />
    </Layout>
  )
}

export default Generic
