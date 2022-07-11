import React from "react"
import Switch from "react-switch"
import styled from "styled-components"
import { Accordion, Card, useAccordionButton } from "react-bootstrap"

import { useCookieContext } from "../../context"

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  )

  return (
    <button className="d-flex align-items-center" onClick={decoratedOnClick}>
      <h6
        style={{
          marginTop: "4px",
        }}
      >
        {children}
      </h6>
      <span
        className="px-3 pb-1"
        style={{
          "&:hover]": {
            border: "1px dotted #dedede",
          },
        }}
      >
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.16632L2.21087 0L7.99476 5.66735L13.7891 0L16 2.16632L7.99476 10L0 2.16632Z"
            fill="#002f6c"
          />
        </svg>
      </span>
    </button>
  )
}

const Table = styled.div``

const TableHeader = styled.div`
  color: white;
  & span {
    /* width: 33.3%; */
    padding: 8px 16px;
    /* background-color: #373c40; */
    background-color: #002f6c;
    color: white;
    font-family: "CF Asty Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 24px; */
    border-bottom: 1px solid #808080;
    &:not(:first-child) {
      border-left: 1px solid #808080;
    }
    /* identical to box height, or 150% */

    letter-spacing: -0.02em;
    border-bottom: 1px solid #808080;
  }
`
const TableRow = styled.div`
  & span {
    /* width: 33.33%; */
    padding: 18px 16px;
    /* color: black; */
    &:first-child {
    }
    /* border-left: 1px solid #808080; */

    &:not(:first-child) {
      border-left: 1px solid #808080;
    }
    /* background-color: ${props =>
      props.id % 2 === 1 ? "rgba(224, 224, 224, 0.5)" : "white"}; */
  }
  & div {
    width: 100%;
    /* color: black; */
    padding: 18px 16px;
  }
  background-color: ${props =>
    props.id % 2 === 1 ? "rgba(224, 224, 224, 0.5)" : "white"};
  border-right: 1px solid #808080;
  border-left: 1px solid #808080;
  border-bottom: 1px solid #808080;
`

const CookieSetPanel = props => {
  const { cookieSet } = props
  return (
    <div style={{ height: "280px", overflowY: "auto" }}>
      <p className="mb-3 mx-1">
        Τα cookie προτιμήσεων επιτρέπουν σε έναν ιστότοπο να θυμάται πληροφορίες
        που αλλάζουν τον τρόπο συμπεριφοράς ή εμφάνισης του ιστότοπου, όπως η
        γλώσσα που προτιμάτε ή η περιοχή στην οποία βρίσκεστε.
      </p>

      <Table className="row mx-1">
        <TableHeader className="d-flex w-100 px-0">
          <span className="col-4">Name</span>
          <span className="col-4">Source</span>
          <span className="col-4"> Duration</span>
        </TableHeader>
        {cookieSet.map((item, i) => (
          <>
            <TableRow key={i * 2} className="d-flex w-100 px-0 flex-wrap">
              <span className="col-4">{item.name}</span>
              <span className="col-4">{item.source}</span>
              <span className="col-4">{item.duration}</span>
            </TableRow>
            <TableRow key={i * 2 + 1} className="d-flex  px-0">
              <span
                className="col-12"
                style={{ minWidth: "250px", flexBasis: "max-content" }}
              >
                {item.description}
              </span>
            </TableRow>
          </>
        ))}
        {/* <TableBody>
          
        </TableBody> */}
      </Table>
    </div>
  )
  //   <div>Apple is Red</div>
}

const CookieAccordion = props => {
  const { cookie, cookieSet, setCookie } = useCookieContext()
  const { className } = props
  const handleChange = (name, v) => {
    setCookie({
      ...cookie,
      [name]: v,
    })
  }

  const newCardClassName0 = className === "no-border" ? "border-0" : ""
  const newClassName0 = `d-flex justify-content-between ${
    className === "no-border" ? "bg-transparent border-0" : ""
  }`

  let properties = [
    { label: "A. Required Cookies", type: "required" },
    {
      label: (
        <React.Fragment>
          {" "}
          B. Functionality cookies&nbsp;<b>(Προτεινόμενα)</b>
        </React.Fragment>
      ),
      type: "functionality",
    },
    { label: "C. Preference Cookies", type: "preference" },
    { label: "D. Διαφημιστικά cookies", type: "targeting" },
  ]
  return (
    <Accordion defaultActiveKey="0" border={className}>
      {properties.map((prop, i) => (
        <Card key={i} className={newCardClassName0} style={{ borderWidth: 0 }}>
          <Card.Header
            className={newClassName0}
            style={{
              backgroundColor: "transparent",
              alignItems: "center",
              borderWidth: 0,
            }}
          >
            <CustomToggle eventKey={i}>{prop.label}</CustomToggle>
            <Switch
              checkedIcon={<></>}
              onColor="#002f6c"
              height={24}
              width={48}
              borderRadius={24}
              handleDiameter={22}
              uncheckedIcon={<></>}
              checked={cookie[prop.type] && true}
              onChange={v => handleChange(prop.type, v)}
            />
          </Card.Header>
          <Accordion.Collapse eventKey={i}>
            <Card.Body>
              <CookieSetPanel cookieSet={cookieSet} />
              {/* Black */}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  )
}

export default CookieAccordion
