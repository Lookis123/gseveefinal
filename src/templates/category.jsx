import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/ui/navbar"
import Section from "../components/common/Section"
import CategoryHero from "../components/Category/CategoryHero"
import CategoryContent from "../components/Category/CategoryContent"
import FilterPanel from "../components/Filters/FilterPanel"
import { ContentBox4 } from "../components/common/ContentBox"

const H3 = styled.h3`
  font-family: CeraGR-Bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.02em;
  text-align: left;
  margin: "26px 0";
  color: ${props => props.theme.colors.blue};
`

const Category = ({ location, data }) => {
  const resourcesData = data.allPrismicResource.nodes
  const catergoryItemData = data.prismicCategory
  const subtagsData = data.allPrismicSubtag.nodes
  const categoryData = data.allPrismicCategory.nodes

  const filteredResource = resourcesData.filter(
    item => item.data.category.id === catergoryItemData.prismicId
  )

  const [category_filter, setCategoryFilter] = useState([])
  const [subtag_filter, setSubtagFilter] = useState([])
  const [content_filter, setContentFilter] = useState([])
  const [filteredItems, setFilteredItems] = useState(filteredResource)

  const setTags = new Set()
  filteredResource.map(item =>
    item.data.group_of_subtags.map(tag => setTags.add(tag.subtag.id))
  )
  setTags.delete(null)

  const getSubtagName = tagId =>
    subtagsData.filter(item => item.prismicId === tagId)[0]?.data.tag_name

  const getSubtag = tagId =>
    subtagsData.filter(item => item.prismicId === tagId)[0]

  const subtag_filters = [{ label: "Όλα", value: "Όλα" }]
  for (let subtag of setTags) {
    subtag !== null &&
      subtag_filters.push({
        label: getSubtag(subtag)?.data.tag_name,
        value: getSubtag(subtag)?.prismicId,
      })
  }

  useEffect(() => {
    let newfilteredItems = filteredResource.filter(item => {
      return (
        ((subtag_filter.length === 0 ||
          subtag_filter.includes(
            subtag_filter.filter(subtag =>
              item.data.group_of_subtags.find(
                resource => getSubtagName(resource.subtag.id) === subtag
              )
            )[0]
          )) &&
          content_filter.length === 0) ||
        content_filter.includes(item.data.resource_type)
      )
    })
    setFilteredItems(newfilteredItems)
  }, [subtag_filter, content_filter, resourcesData, categoryData])

  return (
    <Layout location={location}>
      <Seo title="Category Page"></Seo>
      <Section className="intro-section">
        <Navbar type="second" />
      </Section>

      <CategoryHero
        catergoryItemData={catergoryItemData}
        categoryData={categoryData}
        subtagsData={subtagsData}
        resourceData={resourcesData}
      />

      <CategoryContent data={catergoryItemData.data} />

      <Section className="activity-section">
        <div style={{ backgroundColor: "white", margin: "40px 0" }}>
          <div className="container">
            <H3> Διαβάστε σε αυτή την κατηγορία:</H3>
          </div>
          <div className="container ">
            <FilterPanel
              category_filter={category_filter}
              content_filter={content_filter}
              subtag_filter={subtag_filter}
              setCategoryFilter={setCategoryFilter}
              setContentFilter={setContentFilter}
              setSubtagFilter={setSubtagFilter}
              filteredItems={filteredItems}
              subtag_filters={subtag_filters}
              categoryPage={true}
            />

            <div className="row mt-5">
              {filteredItems.map((item, idx) => (
                <div
                  className="col-sm-6 col-lg-4 d-flex justify-content-center"
                  key={idx}
                >
                  <ContentBox4
                    resourceData={item}
                    categoryData={categoryData}
                    catergoryItemData={catergoryItemData.data}
                    dashboard={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
export default Category

export const query = graphql`
  query CategoryQuery($id: String) {
    prismicCategory(id: { eq: $id }) {
      data {
        title
        description
        icon {
          gatsbyImageData
          url
        }
        color
        overlay_img {
          url
        }
        key_questioning_title
        key_questioning_description
        intervation_title
        intervation_description
        points {
          point {
            html
          }
        }
      }
      uid
      prismicId
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
    allPrismicSubtag(filter: { lang: { eq: "el-gr" } }) {
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
        prismicId
        data {
          title
          color
          icon {
            url
          }
          overlay_img {
            url
          }
        }
      }
    }
  }
`
