import React from "react"
import styled from "styled-components"
import { down } from "styled-breakpoints"
import { VideoPlay } from "../../utils/imgImport"

const VideoPanelContainer = styled.div`
  width: 100%;
  margin-bottom: 48px;
  position: relative;
  ${down("lg")} {
    margin-bottom: 16px;
  }
`
const VideoPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  border: none;
  outline: none;

  background-color: transparent;
  transform: translateX(-50%) translateY(-50%);
`
const Image = styled.img`
  width: 600px;
  height: auto;
`
const openVideo = url => {}

export const SolidImagePanel = props => {
  const { photo } = props
  return (
    <VideoPanelContainer>
      <Image src={photo} />
    </VideoPanelContainer>
  )
}
const VideoPanel = props => {
  const { photo, url } = props
  return (
    <VideoPanelContainer>
      <Image src={photo} />
      {url ? (
        <VideoPlayButton onClick={() => openVideo(url)}>
          <img src={VideoPlay} alt="" />
        </VideoPlayButton>
      ) : (
        ""
      )}
    </VideoPanelContainer>
  )
}

export default VideoPanel
