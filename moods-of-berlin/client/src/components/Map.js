import React, { useState } from "react";
import ReactMapGL from "react-map-gl"; // 'Marker' is defined but never used!

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/benchberlin/cka8f1pe629161iqu0304nkde"
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    ></ReactMapGL>
  );
};

export default Map;
