import React from "react"
import InteractiveMap, { Marker } from "react-map-gl"

/**
 * Note you have to pass a child to <Marker />
 * as it just places an element at the correct
 * position.
 */

function App() {
  /**
   * Store marker locations in state
   * On click, grab the lngLat from the event
   * and add it to the state.
   */
  const [markers, setMarkers] = React.useState([])
  const handleClick = ({ lngLat: [longitude, latitude] }) =>
    setMarkers(markers => [...markers, { longitude, latitude }])

  /**
   * Manage viewport in state
   */
  const [viewport, setViewport] = React.useState({
    latitude: -37.8136,
    longitude: 144.96332,
    zoom: 14.5,
    pitch: 40,
    bearing: 0,
  })

  return (
    <InteractiveMap
      // onClick, capture the pointer event so we can
      // get the lngLat of the click.
      onClick={handleClick}
      // required for interactivity
      width="100vw"
      height="100vh"
      mapboxApiAccessToken="pk.eyJ1IjoiZ2lzZmVlZGJhY2siLCJhIjoiY2l2eDJndmtjMDFkeTJvcHM4YTNheXZtNyJ9.-HNJNch_WwLIAifPgzW2Ig"
      onViewportChange={viewport => setViewport(viewport)}
      {...viewport}
    >
      {markers.length
        ? markers.map((m, i) => (
            // <Marker /> just places its children at the right lat lng.
            <Marker {...m} key={i}>
              {`Clicked here: \n ${m.longitude}, ${m.latitude}`}
            </Marker>
          ))
        : null}
    </InteractiveMap>
  )
}
export default App
