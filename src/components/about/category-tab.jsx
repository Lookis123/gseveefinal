import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { down } from "styled-breakpoints"
import styled from "styled-components"

const Tab = styled.div`
  padding-top: 96px;
  padding-bottom: 96px;
  text-align: center;
  .title {
    font-family: "CeraGR-Bold";
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.02em;
    margin-bottom: 40px;
  }
  ${down("md")} {
    padding-top: 45px;
    padding-bottom: 45px;
  }
  background: #f2f2f2;
  border-top: 1px solid rgba(0, 47, 108, 0.2);
  border-bottom: 1px solid rgba(0, 47, 108, 0.2);
`
const CategoryItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 47, 108, 0.07);
  border-radius: 8px;
  width: 202px;
  margin: 24px;
  .category {
    &-icon {
      background-color: ${props => props.color + "1A"};
      text-align: center;
      height: 158px;
      img {
        width: 77px;
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }
    &-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80px;
      a {
        font-family: "CeraGR-Bold";
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #002f6c;
      }
    }
  }
`

const CategoryTab = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicCategory(sort: { fields: data___order, order: ASC }) {
        nodes {
          data {
            title
            color
            icon {
              url
              gatsbyImageData
            }
          }
          uid
        }
      }
    }
  `)

  const categories = data.allPrismicCategory.nodes

  return (
    <Tab>
      <div className="container">
        <h2 className="title">Τα πεδία δράσης</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {categories.map((item, idx) => (
            <CategoryItem key={idx} color={item.data.color}>
              <div className="category-icon">
                <img src={item.data.icon.url} alt="category icon" />
              </div>
              <div className="category-title">
              <Link to={`/category/${item.uid}`}>{item.data.title}</Link>
              </div>
            </CategoryItem>
          ))}
        </div>
      </div>
    </Tab>
  )
}

export default CategoryTab
