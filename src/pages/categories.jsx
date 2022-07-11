import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Select from "react-select"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/ui/navbar"
import Section from "../components/common/Section"
import CategoryButton from "../components/common/CategoryButton"
import StickyWrapper from "../components/sticky/sticky-wrapper"
import CategoryPanel from "../components/Category/CategoryPanel"
import { MobileCategoryMenuPanel } from "../components/Category/MobileCategoryPanel"

import { category_filters } from "../utils/staticData"

const Header = styled.div`
  & h3 {
    font-family: CeraGR-Bold;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: -0.02em;
    text-align: left;
    padding-bottom: 20px;
  }
`
const Categories = ({ location, data }) => {
  const [category, setCategory] = useState("Θεσμική παρουσία")
  const categoryData = data.allPrismicCategory.nodes
  const resourceData = data.allPrismicResource.nodes
  const subtagsData = data.allPrismicSubtag.nodes

  return (
    <Layout
      location={location}
      style={{ background: "#f2f2f2", paddingBottom: "80px" }}
    >
      <Seo title="Categories Page"></Seo>

      <Section className={`intro-section`}>
        <Navbar type="second" />
      </Section>

      <Section className="activity-section">
        <div className="container mt-5" id="parent0">
          <div className="desktop-activities">
            <StickyWrapper>
              <Header>
                <h3 className="">Θεματικές</h3>

                <div className="d-flex mx-0 mb-4 justify-content-between">
                  {category_filters.map((cat, i) =>
                    i > 0 ? (
                      <CategoryButton
                        href={`#${cat.label}`}
                        isSelected={category === cat.label}
                        onClick={() => setCategory(cat.label)}
                        key={i}
                      >
                        {cat.label}
                      </CategoryButton>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </Header>
            </StickyWrapper>
          </div>

          <div className="mobile-activities">
            <h3 className="">Θεματικές</h3>
            <CategorySelect
              options={category_filters}
              category={category}
              setCategory={setCategory}
            />
          </div>
        </div>
        <div className="desktop-activities">
          <div className="container mt-5 pt-5 mb-5" id="bounder" name="bounder">
            {categoryData.map((catergoryItem, i) => (
              <CategoryPanel
                key={i}
                id={i}
                isTop={true}
                catergoryItemData={catergoryItem}
                subtagsData={subtagsData}
                resourceData={resourceData}
                categoryData={categoryData}
                // className={`${category === cat.subtitle ? "active" : ""}`}
                // onClick={() => setCategory(cat.subtitle)}
              ></CategoryPanel>
            ))}
          </div>
        </div>
        <div className="mobile-activities">
          <div className="container mb-5" id="bounder" name="bounder">
            {categoryData.map((cat, i) => (
              // <MobileCategoryMenuPanel key={i} id={i} isTop={true} data={cat} />
              <MobileCategoryMenuPanel
                key={i}
                id={i}
                isTop={true}
                data={cat}
                resourceData={resourceData}
                subtagsData={subtagsData}
                catergoryData={categoryData}
              />
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export const CategorySelect = ({ options, category, setCategory }) => {
  return (
    <div className="mb-3">
      <Select
        options={options}
        width="100%"
        value={category}
        onChange={v => setCategory(v)}
      />
    </div>
  )
}

export const query = graphql`
  query CategoriesQuery {
    allPrismicCategory(
      filter: { lang: { eq: "el-gr" } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        prismicId
        data {
          title
          color
          icon {
            url
            gatsbyImageData
          }
          overlay_img {
            url
          }
          description
        }
        uid
      }
    }
    allPrismicResource {
      nodes {
        data {
          category {
            id
            uid
          }
          categories {
            item {
              id
            }
          }
          title
          resource_type
          resource_photo {
            gatsbyImageData
            url
          }
          post_date
          overlay_position
          group_of_subtags {
            subtag {
              id
              uid
            }
          }
        }
        uid
      }
    }
    allPrismicSubtag {
      nodes {
        data {
          tag_name
          category {
            uid
            id
          }
        }
        prismicId
        uid
      }
    }
  }
`
export default Categories
