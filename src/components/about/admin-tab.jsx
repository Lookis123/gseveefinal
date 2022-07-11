import React from "react"
import { useState } from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"
import { Email, Fax, Tel } from "../../utils/imgImport"
import { admins } from "../../utils/staticData"

const Tab = styled.div`
  padding: 120px 0;
  background: #f2f2f2;
  .title {
    text-align: center;
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    color: #002f6c;
    margin-bottom: 50px;
  }
  ${down("md")} {
    padding: 60px 0;
  }
`
const Box = styled.div`
  display: flex;
  max-width: 830px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 47, 108, 0.07);
  border-radius: 8px;
  z-index: 3;
`
const LeftPart = styled.div`
  padding: 24px;
  ${down("md")} {
    padding: 12px;
  }
  border-right: 1px solid rgba(0, 47, 108, 0.2);
  .admin-role {
    margin-bottom: 20px;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    span {
      font-family: "CeraGR-Medium";
      font-size: 16px;
      line-height: 22px;
      color: #002f6c;

      &.active {
        padding: 2px 4px;
        background: #e5b4a9;
      }
    }
  }
`
const RightPart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  ${down("md")} {
    padding: 24px 12px;
  }
`
const ContactInfo = styled.div`
  margin-left: 48px;
  margin-bottom: 24px;
  max-width: 343px;
  ${down("md")} {
    margin-left: 12px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .name {
    font-family: "CeraGR-Medium";
    font-size: 18px;
    line-height: 26px;
    color: #002f6c;
    margin-bottom: 4px;
  }
  .contact-info {
    font-family: "CeraGR-Regular";
    font-size: 14px;
    line-height: 22px;
    color: #002f6c;
    margin-left: 5px;
  }
`

const AdminTab = () => {
  const [adminIdx, setAdmin] = useState(0)
  return (
    <Tab id="Διοικητικές υπηρεσίες">
      <div className="container">
        <h2 className="title"> Διοικητικές υπηρεσίες </h2>
        <Box>
          <LeftPart className="col-6">
            {admins.map((item, idx) => (
              <div className="admin-role" key={idx}>
                <span
                  className={adminIdx === idx ? "active" : ""}
                  onClick={() => setAdmin(idx)}
                  onKeyDown={() => setAdmin(idx)}
                  role="button"
                  tabIndex={0}
                >
                  {item.role}
                </span>
              </div>
            ))}
          </LeftPart>
          <RightPart className="col-6">
            {admins[adminIdx].contacts.map((item, idx) => (
              <ContactInfo key={idx}>
                <p className="name">{item.name}</p>
                <div className="d-flex mb-1">
                  <img src={Tel} alt="tel" />
                  <p className="contact-info">{item.tel}</p>
                </div>
                {item.fax && (
                  <div className="d-flex mb-1">
                    <img src={Fax} alt="fax" />
                    <p className="contact-info">{item.fax}</p>
                  </div>
                )}
                {item.email && (
                  <div className="d-flex mb-1">
                    <img src={Email} alt="email" />
                    <p className="contact-info">{item.email}</p>
                  </div>
                )}
              </ContactInfo>
            ))}
          </RightPart>
        </Box>
      </div>
    </Tab>
  )
}

export default AdminTab
