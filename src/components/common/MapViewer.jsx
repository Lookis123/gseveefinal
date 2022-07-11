import React, { useState } from "react"
import styled from "styled-components"
import FilterItem from "./FilterItem"
import InteractiveMap, { Marker } from "react-map-gl"
import { down } from "styled-breakpoints"

const MapTopBand = styled.div`
  position: absolute;
  top: 18px;
  right: 18px;
  width: auto;
  display: flex;
  ${down("sm")} {
    display: none;
  }
`
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`

const pinStyle = {
  cursor: "pointer",
  fill: "#FF8275",
  stroke: "none",
}

const MapViewer = props => {
  const markers = [
    { label: "Αθήνα", latitude: 37.9838, longitude: 23.7275 },
    { label: "Θεσσαλονίκη", latitude: 40.640266, longitude: 22.939524 },
  ]

  const [city, setCity] = useState(markers[0])
  const [viewport, setViewport] = React.useState({
    latitude: 39.3242,
    longitude: 23.3243,
    zoom: 6,
    pitch: 0,
    bearing: 0,
  })

  const handleClick = () => {}
  const handleCitySelected = cc => {
    setCity(cc)
    setViewport({
      ...viewport,
      latitude: cc.latitude,
      longitude: cc.longitude,
    })
  }

  return (
    <InteractiveMap
      onClick={handleClick}
      className="map-box"
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : "610px"}
      mapboxApiAccessToken="pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig"
      onViewportChange={viewport => setViewport(viewport)}
      {...viewport}
    >
      <MapTopBand>
        {markers.map((cc, i) => (
          <FilterItem
            key={i}
            selected={cc === city}
            onClick={() => handleCitySelected(cc)}
          >
            {cc.label}
          </FilterItem>
        ))}
      </MapTopBand>

      {markers.length
        ? markers.map((m, i) => (
            // <Marker /> just places its children at the right lat lng.
            <Marker {...m} key={i}>
              <Pin onClick={() => {}} />
              {/* {`Clicked here: \n ${m.longitude}, ${m.latitude}`} */}
            </Marker>
          ))
        : null}
    </InteractiveMap>
  )
}

const Pin = ({ size = 20, onClick }) => {
  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle} onClick={onClick}>
      <path d={ICON} />
    </svg>
  )
}
export default MapViewer
