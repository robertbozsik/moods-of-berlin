import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });
  // console.log("this is the props ", props);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={props.mapboxToken}
      // mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {/*console.log(props, props.places)}*/}
      {/* here we check if there are places already to start showing the markers */}
      {props.places.length &&
        props.places.map((place) => {
          // console.log("mapping", place);
          return (
            <Marker
              key={place._id}
              latitude={place.latitude}
              longitude={place.longitude}
            >
              <img src="./mapbox-icon.png" alt="mapbox icon" />

              {/*{props.mood === "relaxed" && (
                <img src="./mapbox-icon.png" alt="mapbox icon" />
              )}
              {}
              {}
              {}
              {}
              {}
              {}
              {}
              {}*/}
            </Marker>
          );
        })}
    </ReactMapGL>
  );
};

export default Map;
