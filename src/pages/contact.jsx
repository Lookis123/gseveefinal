import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import SubmitButton from "../components/common/SubmitButton"
import Mapper from "../components/common/Mapper"
import FormInput from "../components/common/FormInput"
// import { Map0Image } from "../utils/imgImport"
import Section from "../components/common/Section"

const MapPanel = styled.div`
  /* border-radius: 12px; */
  background-color: white;
  min-height: 390px;
  height: 100%;
  box-shadow: 30px -14px 64px rgba(0, 47, 108, 0.1);
  border-radius: 12px;
  border: 12px solid white;
`
const InfoPanel = styled.div`
  border-radius: 12px;
  background-color: white;
  min-height: 390px;
  height: 100%;
  h5 {
    font-family: CeraGR-Medium;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: CeraGR-Regular;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
`
const IndexPage = props => {
  // implementation of this function is needed for codesandbox example to work
  // you can remove it otherwise

  return (
    <Layout
      location={props.location}
      type="primary"
      // style={{ backgroundColor: "#" }}
    >
      <Seo title="Homepage" />
      <Section
        className="homehero-section"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <div className="container d-flex justify-content-center">
          <h1 style={{ margin: "72px auto" }}>Επικοινωνία</h1>
        </div>
        <div className="container" style={{ height: "130px" }}></div>
      </Section>
      <Section
        className="homehero-section"
        style={{ transform: "translateY(-130px)" }}
      >
        <div className="container d-flex ps-0 mb-5">
          <div id="1" className="col-lg-7 col-sm-12">
            <MapPanel
              className="m-2"

              // style={{ width: "552px", height: "434px" }}
            >
              <Mapper id="map" width="100%" height="100%" />
              {/* <Map0Image /> */}
            </MapPanel>
          </div>
          <div id="2" className="col-lg-5 col-sm-12 ">
            <InfoPanel className="p-4 m-2 shadow2">
              <div className="mb-3">
                <h5>Διεύθυνση</h5>
                <p>Αριστοτέλους 46, Τ.Κ. 10433, Αθήνα</p>
              </div>
              <div className="mb-3">
                <h5>Email</h5>
                <p>gsevee@gsevee.gr</p>
              </div>
              <div className="mb-3">
                <h5>Τηλεφωνικό Κέντρο</h5>
                <p>210 3816 600</p>
              </div>
            </InfoPanel>
          </div>
        </div>
        {/* <form> */}
        <div className="container p-5 bg-white shadow2">
          <div className="w-100">
            <h3 style={{ margin: "38px 0" }}>Φόρμα Επικοινωνίας </h3>
          </div>
          <div className="w-100 d-flex flex-wrap">
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="m-2">
                <p>Όνομα</p>
                <FormInput placeholder="Εισάγετε το όνομα σας εδώ" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="m-2">
                <p>Επώνυμο</p>
                <FormInput placeholder="Εισάγετε το όνομα σας εδώ" />
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="m-2">
                <p>Ομοσπονδία</p>
                <FormInput placeholder="Εισάγετε την ομοσπονδία που ανήκετε εδώ" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 mb-4">
              <div className="m-2">
                <p>Email</p>
                <FormInput placeholder="Εισάγετε το email σας εδώ" />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12 m-2">
              <p>Μήνυμα</p>
              <FormInput placeholder="Εισάγετε το μήνυμα σας εδώ" />
            </div>

            <div className="col-lg-12 col-sm-12 mt-5 mb-5 text-align-end">
              <SubmitButton>Yποβολή</SubmitButton>
            </div>
          </div>
        </div>
        {/* </form> */}
      </Section>
    </Layout>
  )
}

export default IndexPage
