import * as React from "react"
import Navbar from "../components/ui/navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Section from "../components/common/Section"
import CookieAccordion from "../components/Cookie/CookieAccordion"

const CookiePolicyPagePanel = styled.div`
  h3,
  span {
    /* color: black; */
  }
  h3 {
    //styleName: Titles / h3 / bold;
    font-family: CF Asty Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

    margin-top: 40px;
    margin-bottom: 16px;
  }
`
const CookiePolicy = props => {
  return (
    <Layout location={props.location}>
      <Seo title="Category Page"></Seo>
      <Section className="intro-section">
        <Navbar type="second" />
        <div
          className="container"
          style={{ paddingTop: "80px", paddingBottom: "80px" }}
        >
          <h1 style={{ color: "white" }}>Cookies Policy</h1>
        </div>
      </Section>
      <Section className="activity-section">
        <CookiePolicyPagePanel className="container">
          <div className="row mt-2 mb-2">
            <h3>Πολιτική για τα cookies</h3>
            <span className="w-100">
              Στο αρχείο, χρησιμοποιούμε cookies για την εξασφάλιση της
              λειτουργικότητας, την διατήρηση των προτιμήσεων σου, την ανώνυμη
              στατιστική παρακολούθηση της επισκεψιμότας και την προβολή
              σχετικού περιεχομένου στα μέσα δικτύωσης.
            </span>
          </div>
          <div className="row my-4">
            <CookieAccordion className="no-border" />
          </div>
        </CookiePolicyPagePanel>
      </Section>
    </Layout>
  )
  // return (
  //   <NoLayout>
  //     <Seo title="Resources Page" />
  //     <Section className="intro-section2">
  //       <TopBar3 className="container d-flex justify-content-between align-items-center">
  //         <div className="d-flex py-2">
  //           <TopBar3MenuItem href="/">Εξερεύνηση</TopBar3MenuItem>
  //           <TopBar3MenuItem href="/">Istorima</TopBar3MenuItem>
  //         </div>
  //         <div>
  //           <svg
  //             width="35"
  //             height="24"
  //             viewBox="0 0 35 24"
  //             fill="none"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               d="M7.30282 0.599609V12.1685H0.599609V5.46158L7.30282 0.599609ZM16.5054 0.599609V12.1685H9.80217V5.46158L16.5054 0.599609Z"
  //               fill="#E39E16"
  //             />
  //             <path
  //               d="M19.0059 23.201V11.6357H25.7129V18.339L19.0059 23.201ZM28.2084 23.201V11.6357H34.9118V18.339L28.2084 23.201Z"
  //               fill="#E39E16"
  //             />
  //           </svg>
  //         </div>
  //         <a href="/">
  //           <Eclipse>
  //             <svg
  //               width="12"
  //               height="16"
  //               viewBox="0 0 12 16"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M10 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H10C10.5304 16 11.0391 15.7893 11.4142 15.4142C11.7893 15.0391 12 14.5304 12 14V2C12 1.46957 11.7893 0.960859 11.4142 0.585786C11.0391 0.210714 10.5304 0 10 0V0ZM9 7C9 7.79565 8.68393 8.55871 8.12132 9.12132C7.55871 9.68393 6.79565 10 6 10C5.20435 10 4.44129 9.68393 3.87868 9.12132C3.31607 8.55871 3 7.79565 3 7C3 6.20435 3.31607 5.44129 3.87868 4.87868C4.44129 4.31607 5.20435 4 6 4C6.79565 4 7.55871 4.31607 8.12132 4.87868C8.68393 5.44129 9 6.20435 9 7ZM6 11C8.623 11 10.146 11.826 11 12.755V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15H2C1.73478 15 1.48043 14.8946 1.29289 14.7071C1.10536 14.5196 1 14.2652 1 14V12.755C1.854 11.825 3.377 11 6 11Z"
  //                 fill="white"
  //               />
  //             </svg>
  //           </Eclipse>
  //         </a>
  //       </TopBar3>
  //       <div className="container mt-5 pt-5 pb-5">
  //         <h1> Cookies Policy</h1>
  //       </div>
  //     </Section>
  //     <Section className="homehero-section">
  //       <CookiePolicyPagePanel className="container">
  //         <div className="row mt-2 mb-2">
  //           <h3>Πολιτική για τα cookies</h3>
  //           <span className="text-black w-100">
  //             Στο αρχείο, χρησιμοποιούμε cookies για την εξασφάλιση της
  //             λειτουργικότητας, την διατήρηση των προτιμήσεων σου, την ανώνυμη
  //             στατιστική παρακολούθηση της επισκεψιμότας και την προβολή
  //             σχετικού περιεχομένου στα μέσα δικτύωσης.
  //           </span>
  //         </div>
  //         <div className="row my-4">
  //           <CookieAccordion className="no-border" />
  //         </div>
  //       </CookiePolicyPagePanel>
  //     </Section>
  //   </NoLayout>
  // )
}

export default CookiePolicy
