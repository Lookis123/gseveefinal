import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"

const PlayerBox = styled.div`
  text-align: center;
  iframe {
    border-radius: 4px 4px 4px 4px;
    ${down("lg")} {
      margin-top: 40px;
    }
    ${down("sm")} {
      width: calc(100% - 32px);
      height: auto;
    }
  }
`

const VideoPlayer = ({ url }) => {
  return (
    <PlayerBox>
      <iframe
        width="512"
        height="300"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </PlayerBox>
  )
}

export default VideoPlayer
