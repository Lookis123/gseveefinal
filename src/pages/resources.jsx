import React, { useRef, useState, useEffect } from "react"
import Slider from "react-slick"
import ReactPaginate from "react-paginate"
import styled from "styled-components"

import Seo from "../components/seo"
import Layout from "../components/layout"
import Navbar from "../components/ui/navbar"
import Section from "../components/common/Section"
import { NextArrow, PrevArrow } from "../utils/imgImport"
// import { activites, resources } from "../utils/staticData"
import { down } from "styled-breakpoints"
import ContentBox, { ContentBox3 } from "../components/common/ContentBox"
import FilterPanel from "../components/Filters/FilterPanel"
import { graphql } from "gatsby"

const HeaderContainer = styled.div`
  //style={{ paddingTop: "50px", paddingBottom: "155px" }}
  padding-top: 50px;
  padding-bottom: 155px;
  ${down("lg")} {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`
const ResourcesPage = ({ location, data }) => {
  const PER_PAGE = 9

  const resourcesData = data.allPrismicResource.nodes
  const categoryData = data.allPrismicCategory.nodes
  const featuredData = data.allPrismicFeatured.nodes[0].data.featured_resources

  const [category_filter, setCategoryFilter] = useState([])
  const [content_filter, setContentFilter] = useState([])

  const [filteredItems, setFilteredItems] = useState(resourcesData)

  const [pageInfo, setPageInfo] = useState({
    totalCount: 0,
    itemOffset: 0,
    pageCount: 0,
  })

  useEffect(() => {
    let newfilteredItems = resourcesData.filter(item => {
      return (
        (category_filter.length === 0 ||
          category_filter.includes(
            categoryData?.filter(i => i.prismicId === item.data.category.id)[0]
              .data.title
          )) &&
        (content_filter.length === 0 ||
          content_filter.includes(item.data.resource_type))
      )
    })
    setFilteredItems(newfilteredItems)
    let totalCount = newfilteredItems.length
    let itemOffset = 0
    let pageCount = Math.ceil(totalCount / PER_PAGE)
    setPageInfo({
      totalCount,
      itemOffset,
      pageCount,
    })
  }, [category_filter, content_filter, resourcesData, categoryData])

  useEffect(() => {}, [pageInfo])

  const handlePageClick = event => {
    const itemOffset = (event.selected * PER_PAGE) % filteredItems.length

    setPageInfo({
      ...pageInfo,
      itemOffset,
    })
  }

  return (
    <Layout location={location}>
      <Seo ="Resources Page" />
      <Section className="intro-section">
        <Navbar type="second" />
        <HeaderContainer className="container">
          <h1 className="text-white mb-5">Έργο που ξεχωρίζει</h1>
          <ResourceSlider
            resourceData={resourcesData}
            data={featuredData}
            categoryData={categoryData}
          />
        </HeaderContainer>
      </Section>
      <Section className="activity-section">
        <div className="container">
          <h1 className="mt-5 mb-5">Περιηγηθείτε στο έργο</h1>
          <FilterPanel
            category_filter={category_filter}
            content_filter={content_filter}
            setCategoryFilter={setCategoryFilter}
            setContentFilter={setContentFilter}
            filteredItems={filteredItems}
          />
          <div className="desktop-activities">
            <div className="row mt-5">
              {filteredItems
                .slice(pageInfo.itemOffset, pageInfo.itemOffset + PER_PAGE)
                .map((item, idx) => (
                  <div
                    className="col-sm-6 col-lg-4 d-flex justify-content-center"
                    key={idx}
                  >
                    <ContentBox
                      resourceData={item}
                      categoryData={categoryData}
                      width="300px"
                      dashboard={true}
                    />
                    {/* {(height = "400px")} */}
                  </div>
                ))}
            </div>
            <ReactPaginate
              breakLabel="..."
              onPageChange={e => handlePageClick(e)}
              pageRangeDisplayed={10}
              pageCount={pageInfo.pageCount}
              renderOnZeroPageCount={null}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination-link"}
              nextLinkClassName={"pagination-link"}
              disabledClassName={"pagination-link__disabled"}
              activeClassName={"pagination-link__active"}
            />
          </div>

          <div className="mobile-activities">
            {filteredItems.map((item, idx) => (
              <ContentBox3
                resourceData={item}
                categoryData={categoryData}
                width="100%"
                style={{ marginBottom: "40px" }}
                dashboard={true}
                key={idx}
              />
              // </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  )
}

const ResourceSlider = ({ data, categoryData, resourceData }) => {
  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    customPaging: i => (
      <div
        style={{
          fontFamily: "CeraGR-Regular",
          fontSize: "16px",
          lineHeight: "32px",
          color: "white",
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="desktop-activities">
        <div className="resource-slider">
          <div className="slick-arrows">
            <button onClick={previous}>
              <img src={PrevArrow} alt="prev arrow" />
            </button>
            <button onClick={next}>
              <img src={NextArrow} alt="next arrow" />
            </button>
          </div>
          <Slider ref={c => (slider.current = c)} {...settings}>
            {data.map((item, idx) => (
              <div key={idx}>
                <div className="d-flex justify-content-center">
                  <ContentBox
                    resourceData={
                      resourceData.filter(
                        resource => resource.prismicId === item.featured?.id
                      )[0]
                    }
                    categoryData={categoryData}
                    width="300px"
                    height="400px"
                    dashboard={true}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="mobile-activities">
        <div className="overflow-auto">
          <div className="d-flex w-auto">
            {data.map((item, idx) => (
              <div key={idx}>
                <div className="d-flex justify-content-center">
                  <ContentBox3
                    resourceData={
                      resourceData.filter(
                        resource => resource.prismicId === item.featured?.id
                      )[0]
                    }
                    categoryData={categoryData}
                    height="400px"
                    dashboard={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query ResourcesQuery {
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
        prismicId
      }
    }
    allPrismicFeatured {
      nodes {
        data {
          featured_resources {
            featured {
              id
            }
          }
        }
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

export default ResourcesPage
