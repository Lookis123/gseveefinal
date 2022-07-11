import * as React from "react"
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews"

const PreviewPage = ({ isPreview, ...props }) => {
  if (isPreview === false) return "Not a preview!"

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center">Prismic Preview Loading...</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage)
