//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"

import "./src/styles/app.scss"

//React Slick Styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "swiper/css"
import "swiper/css/free-mode"

import * as React from "react"
import { Link } from "gatsby"
import { PrismicProvider } from "@prismicio/react"
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews"

import { repositoryConfigs } from "./src/utils/prismicPreviews"

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)
