import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Mapbox() {
  const [Viewport, setViewport] = useState({
    latitude: 17.4875,
    longitude: 78.3953,
    zoom: 12,
    width: "70%",
    height: "460px",
  });

  return (
    <div className="relative w-[1200px] h-[500px]">
      <ReactMapGL
        {...Viewport}
        mapboxAccessToken="pk.eyJ1Ijoic3VjaGV0aCIsImEiOiJjbHh5aXl2MTUwMWJyMmlxdmlkamt5Z251In0.nw5BLEMb5MSwxCSShIEdXw"
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        <Marker latitude={17.4875} longitude={78.3953}>
          <div style={{ color: "red", fontSize: "1.5rem" }}>📍</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}
