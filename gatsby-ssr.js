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
