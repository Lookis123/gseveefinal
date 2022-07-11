import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import FilterItem from "../components/common/FilterItem"
import FormInput from "../components/common/FormInput"
import MapViewer from "../components/common/MapViewer"
import PointListItem from "../components/common/PointListItem"
import Section from "../components/common/Section"
import styled from "styled-components"
import { down } from "styled-breakpoints"

const testPointsData = [
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
  {
    name: "Ομοσπονδία Βιοτεχνικών Σωματείων Αθήνας",
    info: "Πατούσα 3, 106 77 Αθήνα, Τηλ.: 210 3809327 Fax: 210 3809327",
  },
]
const Container = styled.div`
  h1 {
    margin-top: 82px;
    ${down("lg")} {
      margin-top: 48px;
    }
  }
  & .content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${down("lg")} {
      flex-direction: column-reverse;
    }
  }
  & .user-types {
    display: flex;
    width: auto;
    ${down("lg")} {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 16px;
    }
  }

  & .search-field {
    margin-bottom: 16px;
  }

  & .filterItem {
    min-width: 100px;
    height: 26px;
    text-align: center;
    ${down("lg")} {
      /* min-width: unset; */
      height: 40px;
      margin: 0 4px;
      min-width: 32%;
      width: 32%;
    }
  }
`
const MapContainer = styled.div`
  display: flex;
  ${down("lg")} {
    flex-direction: column;
  }
  .map-box {
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    height: 610px !important;
    ${down("md")} {
      height: 400px !important;
    }
  }
  .members-list {
    height: 620px;
    overflow: auto;
    ${down("lg")} {
      display: flex;
      height: unset;
    }
  }
  .list-container {
    padding-right: 24px;
    ${down("lg")} {
      display: flex;
      width: auto;
      overflow-y: auto;
    }
  }
  .list-item {
    width: 200px;
    min-width: 200px;
  }
`
const Members = props => {
  const userTypes = [
    { name: "Όλα" },
    { name: "Τοπικές", color: "#FF8275" },
    { name: "Κλαδικές", color: "#00A6A8" },
  ]

  const [userType, setUserType] = React.useState("Όλα")
  const [keyword, setKeyword] = React.useState("")

  return (
    <Layout location={props.location} type="primary">
      <Seo title="Members" />
      <Section className="homehero-section">
        <Container className="container">
          <h1>Δίκτυο μελώosidosdoν</h1>

          <div className="content-header">
            <div className="user-types">
              {userTypes.map((data, idx) =>
                data.color ? (
                  <FilterItem
                    key={idx}
                    style={{ margin: 0 }}
                    selected={data.name === userType}
                    onClick={() => setUserType(data.name)}
                    color={data.color}
                  >
                    {data.name}
                  </FilterItem>
                ) : (
                  <FilterItem
                    key={idx}
                    style={{ margin: 0 }}
                    selected={data.name === userType}
                    onClick={() => setUserType(data.name)}
                  >
                    {data.name}
                  </FilterItem>
                )
              )}
            </div>
            <div className="col-12 col-lg-4 mb-2">
              <FormInput
                placeholder="Αναζητήστε εδώ"
                id="input_search"
                type="search"
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
              />
            </div>
          </div>
          <MapContainer className="d-flex" style={{ paddingBottom: "104px" }}>
            <div className="col-xs-12 col-sm-12 col-lg-8">
              <MapViewer />
            </div>
            <div
              className="col-sm-12 col-lg-4 members-list"
              //
            >
              <div className="list-container">
                {testPointsData
                  .filter(pt => pt.name.includes(keyword))
                  .map((point, idx) => (
                    <PointListItem key={idx} filtered={keyword !== ""}>
                      {point}
                    </PointListItem>
                  ))}
              </div>
            </div>
          </MapContainer>
        </Container>
      </Section>
    </Layout>
  )
}
export default Members
