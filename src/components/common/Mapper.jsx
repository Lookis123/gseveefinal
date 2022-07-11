import React from "react"
import styled from "styled-components"
import InteractiveMap from "react-map-gl"

const MAPDiv = styled.div`
  width: ${props => (props.width ? props.width : "524px")};
  height: ${props => (props.height ? props.height : "420px")};
  background-color: white;
  /* border-radius: 12px; */
  /* padding: 12px; */
`
const Mapper = props => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.99029,
    longitude: 23.72839,
    zoom: 14,
    pitch: 0,
    bearing: 0,
  })

  return (
    <MAPDiv {...props}>
      <InteractiveMap
        // onClick, capture the pointer event so we can
        // get the lngLat of the click.
        // required for interactivity
        width="100%"
        height="100%"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig"
        onViewportChange={viewport => setViewport(viewport)}
        {...viewport}
      ></InteractiveMap>
    </MAPDiv>
  )
}

export default Mapper
