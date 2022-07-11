import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import { blocks } from "../../utils/staticData"

const Tab = styled.div`
  padding: 120px 0;
  background: #f2f2f2;
  .title {
    max-width: 467px;
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #002f6c;
  }
  .scroll-wrapper {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  ${down("md")} {
    padding: 60px 0;
  }
`
const BlockBox = styled.div`
  height: 106px;
`

const ChallengeTab = () => (
  <Tab id="Προκλήσεις">
    <div className="container">
      <h2 className="title">Ποιες είναι οι προκλήσεις</h2>
    </div>
    <Swiper grabCursor={true} className="mySwiper">
      <SwiperSlide>
        <div className="d-flex flex-nowrap my-5">
          {blocks.map((item, idx) => (
            <img className="me-4" src={item} key={idx} alt="block" />
          ))}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                Ο έντονος και ταχύτατος μετασχηματισμός επαγγελμάτων και κλάδων,
                λόγω σειράς παραγόντων –όπως π.χ. ο ψηφιακός μετασχηματισμός, η
                μετάβαση στην πράσινη ανάπτυξη, η ανάδυση νέων δεξιοτήτων, οι
                αλλαγές στο θεσμικό πλαίσιο, αλλά και η αύξηση του ανταγωνισμού
                σε μια πλήρως παγκοσμιοποιημένη αγορά, η οποία ολιγοπωλείται από
                την κυριαρχία των λίγων μεγάλων επιχειρήσεων–, αυξάνει τη
                σημασία της συλλογικής δράσης και των συνεργειών για τις ΜμΕ.
              </p>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <BlockBox className="my-5"></BlockBox>
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <p>
                Η ΓΣΕΒΕΕ διαθέτει την αρμοδιότητα, την εμπειρία, τα εργαλεία και
                τη βούληση που θα της επιτρέψουν να προσαρμοστεί στις νέες
                συνθήκες διατηρώντας παράλληλα και το όραμά της, που δεν είναι
                άλλο από την ανάδειξη του ρόλου των μικρών
                επαγγελματο-βιοτεχνικών και εμπορικών επιχειρήσεων ως
                καθοριστικού και δυναμικού συντελεστή της κοινωνικής και
                οικονομικής ανάπτυξης της Ελλάδας
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </Tab>
)

export default ChallengeTab
