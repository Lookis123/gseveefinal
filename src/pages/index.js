import * as React from "react"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"

import Seo from "../components/seo"
import Navbar from "../components/ui/navbar"
import Layout from "../components/layout"
import ContentBox from "../components/common/ContentBox"
import Section from "../components/common/Section"
import CategoryButton from "../components/common/CategoryButton"
import CategoryPanelGroup from "../components/Category/CategoryPanelGroup"
import MobileFilterPanel from "../components/Category/MobileFilterPanel"
import CategoryActivitiesPanel from "../components/Category/CategoryActivitiesPanel"
import VideoPlayer from "../components/common/VideoPlayer"

import { category_filters } from "../utils/staticData"

const CarouselContainer = styled.div`
  display: flex;
  padding: 80px 0;

  .carousel-left {
    ${down("lg")} {
      margin-left: auto;
      margin-right: auto;
    }
  }
  .carousel-buttons {
    display: flex;
    margin-top: 52px;
    button {
      padding: 8px 25px;
      outline: none;
      font-family: "CeraGR-Medium";
      font-size: 14px;
      line-height: 22px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      margin-right: 12px;
      margin-bottom: 8px;
      ${down("sm")} {
        width: 191px;
        padding: 13px;
      }
    }
    .primary {
      background: #ffffff;
      color: #002f6c;
      ${down("sm")} {
        margin-right: 0;
      }
    }
    .secondary {
      background: transparent;
      color: #ffffff;
    }
  }
  padding-left: 18vw;

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    width: auto !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  ${down("lg")} {
    flex-direction: column;
    padding: 20px 0;
    padding-left: 0;
    & > div {
      align-items: flex-start;
    }
    .carousel-buttons {
      flex-direction: column;
      margin-top: 24px;
    }
    .carousel-left {
      h1 {
        margin: 16px 0;
      }
    }
  }
`

const ContentBody = styled.div`
  h1 {
    /* w-50 mt-lg-5 pt-5 mb-lg-5 */
    margin-top: 40px;
    width: 50%;
  }
  & .category-filters {
    //d-flex mb-5
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 48px;
  }
  ${down("lg")} {
    & h1 {
      margin-top: 40px;
      width: 80%;
    }
    & .category-filters {
      display: none;
    }
  }
`

const IndexPage = ({ location, data }) => {
  const [category, setCategory] = React.useState(category_filters[1].value)

  const resourceData = data.allPrismicResource.nodes
  const categoryData = data.allPrismicCategory.nodes
  const subtagsData = data.allPrismicSubtag.nodes
  const featuredData = data.allPrismicFeatured.nodes[0].data

  return (
    <Layout location={location}>
      <Seo title="Home Page" />
      <Section className="intro-section">
        <Navbar type="second" />
        <CarouselContainer className={featuredData.is_video ? "flex-wrap" : ""}>
          <div className="d-flex flex-column justify-content-between ">
            <div
              className=" align-items-center px-3 carousel-left"
              style={{ width: "480px" }}
            >
              <h1 className="text-white">
                Με τις μικρές επιχειρήσεις στο προσκήνιο
              </h1>
              <div className="carousel-buttons">
                <button
                  className="primary"
                  onClick={() => navigate("/members")}
                >
                  Δίκτυο μελών
                </button>
                <button className="secondary">Γνωρίστε τη ΓΣΕΒΕΕ</button>
              </div>
            </div>
          </div>
          {featuredData.is_video ? (
            <VideoPlayer url={featuredData.hero_video?.embed_url} />
          ) : (
            <Swiper
              spaceBetween={12}
              slidesPerView={"auto"}
              freeMode={true}
              modules={[FreeMode]}
              className="featured-swiper"
            >
              {featuredData?.hero.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <ContentBox
                    categoryData={categoryData}
                    resourceData={
                      resourceData.filter(
                        resource =>
                          resource.prismicId === item.hero_elements?.id
                      )[0]
                    }
                    key={idx}
                    margin="12px 8px"
                    width="390px"
                    height="400px"
                    dashboard={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </CarouselContainer>
      </Section>
      <Section className="home-category">
        <ContentBody className="container">
          <h1 className="">Τα πεδία δράσης της ΓΣΕΕΒΕ</h1>
          <div className="category-filters">
            {category_filters.map((cat, i) =>
              i > 0 ? (
                <CategoryButton
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
          <CategoryPanelGroup
            resourceData={resourceData}
            categoryData={categoryData}
            subtagsData={subtagsData}
            selectedCategory={category}
            setCategory={setCategory}
          />
        </ContentBody>
      </Section>
      <Section className="homehero-section">
        <CategoryActivitiesPanel
          category={category}
          setCategory={c => setCategory(c)}
          resourceData={resourceData}
          categoryData={categoryData}
        />
        <div className="mobile-activities">
          <MobileFilterPanel category={category} setCategory={setCategory} />
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
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
    allPrismicCategory {
      nodes {
        prismicId
        uid
        data {
          title
          description
          color
          icon {
            url
          }
          overlay_img {
            gatsbyImageData
            url
          }
        }
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
    allPrismicFeatured {
      nodes {
        data {
          is_video
          hero_video {
            embed_url
          }
          hero {
            hero_elements {
              id
            }
          }
        }
      }
    }
  }
`

export default IndexPage
