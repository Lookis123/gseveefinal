import React, { useState } from "react"
import styled from "styled-components"
import { down, up } from "styled-breakpoints"
import Select from "react-select"

import Seo from "../components/seo"
import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import StickyWrapper from "../components/sticky/sticky-wrapper"
import { HeroBack } from "../utils/imgImport"
import CategoryButton from "../components/common/CategoryButton"
import { tab_filters } from "../utils/staticData"
import AboutTab from "../components/about/about-tab"
import PowerTab from "../components/about/power-tab"
import InstitutionalTab from "../components/about/institutional-tab"
import CategoryTab from "../components/about/category-tab"
import ChallengeTab from "../components/about/challenge-tab"
import AffiliatesTab from "../components/about/affiliates-tab"
import TimelineTab from "../components/about/timeline-tab"
import AdminTab from "../components/about/admin-tab"

const AboutHero = styled.section`
  position: relative;
  background: linear-gradient(0, #63c6dc -50%, #002f6c 105%);
  overflow-x: hidden;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${HeroBack});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: -286px 20px;
    ${up("md")} {
      background-position: 386px 20px;
    }
  }
  header {
    background-color: transparent;
    .container {
      width: 100%;
    }
  }
`
const HeroText = styled.h1`
  font-family: "CeraGR-Regular";
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  color: #ffffff;
  position: relative;
  margin: 50px 0 100px;
  ${down("md")} {
    margin: 40px 0 70px;
  }
`
const StickySection = styled.section`
  background: #f2f2f2;
  padding-top: 35px;
  padding-bottom: 35px;
`

const TabSelect = ({ options, tab, setTab }) => {
  return (
    <div className="mb-3">
      <Select
        options={options}
        width="100%"
        value={tab}
        onChange={v => setTab(v)}
      />
    </div>
  )
}

const About = ({ location }) => {
  const [tab, setTab] = useState("ΓΣΕΒΕΕ")
  return (
    <>
      <Seo title="Home Page" />
      <AboutHero>
        <Navbar type="third" />
        <div className="container">
          <HeroText>
            H Γενική Συνομοσπονδία Επαγγελματιών Βιοτεχνών Εμπόρων Ελλάδας
            (ΓΣΕΒΕΕ) είναι{" "}
            <strong>τριτοβάθμια πανελλαδική οργάνωση εργοδοτώ</strong>ν και
            αποτελεί έναν από τους{" "}
            <strong>βασικούς εθνικούς κοινωνικούς εταίρους</strong>. Εκπροσωπεί
            μέσα από τη <strong>συμμετοχή της στο δημόσιο διάλογο</strong> την
            <strong>επιχειρηματικότητα μικρής κλίμακας</strong>, συμβάλλοντας
            στη διαμόρφωση ενός{" "}
            <strong>ευνοϊκού επιχειρηματικού κλίματος</strong> μέσα στο οποίο οι
            μικρές επιχειρήσεις μπορούν να αναπτυχθούν και να επιτύχουν τους
            στόχους τους
          </HeroText>
        </div>
      </AboutHero>
      <StickySection>
        <div className="container" id="parent0">
          <div className="desktop-activities">
            <StickyWrapper>
              <div className="d-flex mx-0 mb-4 pt-4 justify-content-between">
                {tab_filters.map((item, i) => (
                  <CategoryButton
                    href={`#${item.label}`}
                    isSelected={tab === item.label}
                    onClick={() => setTab(item.label)}
                    key={i}
                  >
                    {item.label}
                  </CategoryButton>
                ))}
              </div>
            </StickyWrapper>
          </div>

          <div className="mobile-activities">
            <TabSelect options={tab_filters} tab={tab} setTab={setTab} />
          </div>
        </div>
      </StickySection>
      <section id="bounder" name="bounder">
        <AboutTab />
        <PowerTab />
        <InstitutionalTab />
        <CategoryTab />
        <ChallengeTab />
        <AffiliatesTab />
        <TimelineTab />
        <AdminTab />
      </section>
      <Footer location={location} />
    </>
  )
}

export default About
