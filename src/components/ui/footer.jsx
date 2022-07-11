import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"

import Footer3 from "./footer3/Footer3"
import FooterCard from "../common/FooterCard"
import {
  category_menus,
  footer_menus,
  resource_footer_menus,
} from "../../utils/staticData"
import { Typography } from "../styled/typography"
import { Holy } from "../../utils/imgImport"

const CategoryCol = ({ data }) => (
  <div className="mx-2">
    <img className="mb-3" src={data.icon} alt="category icon" />
    <Typography className="mb-3" variant="h6_regular">
      {data.subtitle}
    </Typography>
    <ul>
      {data.items.map((item, idx) => (
        <li key={idx}>
          <Link to={item.to}>
            <Typography className="mb-3" variant="text">
              {item.name}
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const FooterCol = ({ data }) => (
  <div className="col-12 col-md-2">
    <Typography
      className="mt-3 mt-md-0 mb-3"
      variant="subtitle_medium"
      color="white"
    >
      {data.subtitle}
    </Typography>
    <ul className="row">
      {data.items.map((item, idx) => (
        <li
          key={idx}
          className="col-6 col-md-12 my-3 my-md-0 justify-content-between justify-content-md-start "
        >
          {data.subtitle === "Επικοινωνία" ? (
            <a
              href={item.to}
              className="d-flex align-items-center mb-3"
              target="_blank"
              rel="noreferrer"
            >
              {item.icon && (
                <img className="me-3" src={item.icon} alt="social icon" />
              )}
              <Typography variant="text" color="white">
                {item.name}
              </Typography>
            </a>
          ) : (
            <Link to={item.to} className="d-flex align-items-center mb-3">
              {item.icon && (
                <img className="me-3" src={item.icon} alt="social icon" />
              )}
              <Typography variant="text" color="white">
                {item.name}
              </Typography>
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
)

const ResourceFooterWrapper = styled.div`
  & h1 {
    /* margin-top: 84px; */
    margin-bottom: 40px;
  }
  & .card-wrapper {
    display: flex;
    width: auto;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    // className="d-flex flex-wrap justify-content-between"
  }
  & .wrapper {
    overflow-x: auto;
  }
`
const Footer = props => {
  const { location } = props
  const isResourcePage =
    location?.pathname === "/resource" || location?.pathname === "/resource/"
  const isMemberPage =
    location?.pathname === "/members" || location?.pathname === "/members/"

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <footer>
      {location?.pathname !== "/about" && (
        <div className="category-menu border-top">
          <div className="container">
            {isResourcePage ? (
              <ResourceFooterWrapper>
                <h1>Σχετικό περιεχόμενο</h1>
                <div className="wrapper">
                  <div className="card-wrapper">
                    {resource_footer_menus.map((card, i) => (
                      <FooterCard {...card} key={i} index={i}>
                        {card.title}
                      </FooterCard>
                    ))}
                  </div>
                </div>
              </ResourceFooterWrapper>
            ) : isMemberPage ? (
              <Footer3 />
            ) : (
              <Slider {...settings}>
                {category_menus.map((item, idx) => (
                  <CategoryCol data={item} key={idx} />
                ))}
              </Slider>
            )}
          </div>
        </div>
      )}
      <div className="footer-menu">
        <div className="container">
          <div className="row justify-content-between">
            {footer_menus.map((item, idx) => (
              <FooterCol data={item} key={idx} />
            ))}
          </div>
          <div className="text-start text-md-end">
            <img src={Holy} alt="holy" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
