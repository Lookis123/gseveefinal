import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { down } from "styled-breakpoints"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/ui/navbar"
import ListBox, { ListItem } from "../components/common/ListBox"
import FilterItem, {
  FilterItem2,
  FilterItem4,
} from "../components/common/FilterItem"
import Attachments from "../components/common/Attachments"
import { PopupContainer, PopupMenuItem } from "../components/common/PopupMenu"
import DownloadIcon from "../components/common/DownloadIcon"
import SocialModal from "../components/common/SocialModal"
import Section from "../components/common/Section"

import { Printer, Linked, Attach } from "../utils/imgImport"
import {
  getResourceSubtags,
  filterCategoryBySubtag,
  getSubtagsByCategory,
} from "../utils/staticData"
import { CustomRichText } from "../components/styled"

const BreadCrumb2 = styled.h5`
  display: flex;
  margin-bottom: 58px;
  margin-top: 80px;
  cursor: pointer;
  ${down("lg")} {
    margin-bottom: 25px;
    margin-top: 57px;
  }
`
const BreadCrumb2Item = styled.span`
  margin: 0 4px;
  font-family: "CeraGR-Medium";
  font-size: 20px;
  line-height: 30px;
  color: ${props => props.theme.colors.blue};
`
const TileWrapper = styled.div`
  ${down("lg")} {
    & .title-br {
      display: none;
    }
    & h4 {
      //styleName: H5/ Bold;
      font-family: CeraGR-Bold;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: -0.02em;
      text-align: left;
    }
    & h5 {
      //styleName: Details/Regular;
      font-family: CeraGR-Regular;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`
const Author = styled.p`
  padding: 16px 0;
  font-family: CeraGR-Medium;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  border-top: 1px solid rgba(0, 47, 108, 0.2);
`
const Period = styled.p`
  font-family: CeraGR-Regular;
  font-size: 16px;
  line-height: 22px;
`

const Resource = ({ data, location }) => {
  const resourceDetail = data.prismicResource.data
  const subtagData = data.allPrismicSubtag.nodes
  const categoryData = data.allPrismicCategory.nodes

  const {
    title,
    subtitle,
    rich_text,
    post_date,
    group_of_subtags,
    event_starting_time,
    event_ending_time,
    author,
    attachments,
  } = resourceDetail

  const resourceCategories = filterCategoryBySubtag(
    categoryData,
    getResourceSubtags(subtagData, group_of_subtags)
  )

  const [popupShow, setPopupShow] = useState("")
  const handleShowPrint = () => {}
  const onAfterOpen = () => {}
  return (
    <Layout location={location}>
      <Seo title="Resources Page" />
      <Section className="intro-section">
        <Navbar type="second" />
      </Section>
      <Section className="activity-section">
        <TileWrapper className="container">
          <BreadCrumb2>
            <BreadCrumb2Item>&#10094;</BreadCrumb2Item>
            <Link to="/resources">
              <BreadCrumb2Item>Βίντεοooooo</BreadCrumb2Item>
            </Link>
          </BreadCrumb2>
          <div className="row my-4">
            <span>{post_date}</span>
          </div>
          <h4 className="mb-2">{title}</h4>
          <h5 className="mb-5">{subtitle}</h5>
          {event_ending_time !== null && event_starting_time !== null && (
            <Period>{`${event_starting_time} - ${event_ending_time}`}</Period>
          )}
          {author && <Author>{author}</Author>}
        </TileWrapper>
        <div className="container">
          <ListBox>
            <PopupContainer
              show={popupShow === "attach"}
              // popupMenu={attachedFiles.map((file, i) => (
              //   <PopupMenuItem key={i} to={file.to} endItem={<DownloadIcon />}>
              //     {file.label}
              //   </PopupMenuItem>
              // ))}
              popupMenu={
                <PopupMenuItem
                  to={attachments.raw.url}
                  endItem={<DownloadIcon />}
                >
                  {attachments.raw.name}
                </PopupMenuItem>
              }
            >
              <div className="desktop-activities">
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
                        onClick={() => setPopupShow("modal")}
                      />
                    </React.Fragment>
                  }
                  endAlign={{ justifyContent: "flex-end" }}
                />
              </div>
              <div className="mobile-activities">
                <div className="d-flex justify-content-between">
                  <PopupContainer
                    show={popupShow === "attach2"}
                    popupMenu={
                      <PopupMenuItem
                        to={attachments.raw.url}
                        endItem={<DownloadIcon />}
                      >
                        {attachments.raw.name}
                      </PopupMenuItem>
                    }
                  >
                    <FilterItem4
                      icon={Attach}
                      label="Συνημμένα"
                      mr="25px"
                      onClick={() =>
                        setPopupShow(popupShow === "attach2" ? "" : "attach2")
                      }
                    />
                  </PopupContainer>

                  <FilterItem4
                    icon={Printer}
                    label="Εκτύπωση"
                    mr="25px"
                    onClick={() => handleShowPrint()}
                  />
                  <FilterItem4
                    icon={Linked}
                    label="Κοινοποίηση"
                    onClick={() => setPopupShow("modal")}
                  />
                </div>
              </div>
            </PopupContainer>

            {resourceCategories.map((item, idx) => (
              <ListItem
                key={idx}
                type={2}
                startItem={
                  <FilterItem2
                    label={item.data.title}
                    icon={item.data.icon.url}
                  />
                }
                endItem={getSubtagsByCategory(
                  getResourceSubtags(subtagData, group_of_subtags),
                  item.prismicId
                )
                  .slice(0, 3)
                  .map((item, i) => (
                    <FilterItem types={2} key={`subtag${i}`}>
                      {item.tag_name}
                    </FilterItem>
                  ))}
                endAlign={{ justifyContent: "flex-start" }}
              />
            ))}
          </ListBox>
        </div>
        <div className="container">
          <CustomRichText
            dangerouslySetInnerHTML={{ __html: rich_text.html }}
          />
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

export default Resource

export const query = graphql`
  query ResourceQuery($id: String) {
    prismicResource(id: { eq: $id }) {
      data {
        title
        subtitle
        post_date
        author
        attachments {
          raw
        }
        event_ending_time
        event_starting_time
        group_of_subtags {
          subtag {
            id
          }
        }
        rich_text {
          html
        }
      }
    }
    allPrismicSubtag {
      nodes {
        data {
          tag_name
          category {
            id
          }
        }
        prismicId
      }
    }
    allPrismicCategory {
      nodes {
        data {
          title
          color
          icon {
            url
          }
        }
        prismicId
      }
    }
  }
`
