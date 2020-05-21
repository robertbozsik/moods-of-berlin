import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./Map.css";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 52.5170365,
    longitude: 13.3888599,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

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
              {/* <img src="./mapbox-icon.png" alt="mapbox icon" /> */}

              {props.mood === "" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./allColors_marker.png"
                    alt="mapbox icon"
                  />
                </button>
              )}

              {props.mood === "joyful" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./joyful_yellow_marker.png"
                    alt="mapbox icon joyful"
                  />
                </button>
              )}

              {props.mood === "relaxed" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./relaxed_lightgreen_marker.png"
                    alt="mapbox icon relaxed"
                  />
                </button>
              )}

              {props.mood === "energetic" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./energetic_orange_marker.png"
                    alt="mapbox icon energetic"
                  />
                </button>
              )}

              {props.mood === "bored" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./bored_green_marker.png"
                    alt="mapbox icon bored"
                  />
                </button>
              )}

              {props.mood === "thoughtful" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./thoughtful_turquise_marker.png"
                    alt="mapbox icon thoughtful"
                  />
                </button>
              )}

              {props.mood === "melancholic" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./melancholic_blue_marker.png"
                    alt="mapbox icon melancholic"
                  />
                </button>
              )}

              {props.mood === "anxious" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./anxious_violet_marker.png"
                    alt="mapbox icon anxious"
                  />
                </button>
              )}

              {props.mood === "angry" && (
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPlace(place);
                  }}
                >
                  <img
                    className="map-marker"
                    src="./angry_red_marker.png"
                    alt="mapbox icon angry"
                  />
                </button>
              )}
            </Marker>
          );
        })}

      {selectedPlace ? (
        <Popup
          latitude={selectedPlace.latitude}
          longitude={selectedPlace.longitude}
          onClose={() => {
            setSelectedPlace(null);
          }}
        >
          <div className="popup-text" style={{ padding: "7px" }}>
            <h5 style={{ fontSize: "16px" }}>{selectedPlace.title}</h5>
            <p style={{ fontSize: "12px" }}>
              {selectedPlace.street} {selectedPlace.zip} {selectedPlace.city}
            </p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
};

export default Map;
