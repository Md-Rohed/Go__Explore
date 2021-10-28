import React from "react";
import "./Map.css";

export default class Map extends React.Component {
  componentDidMount() {
    const mapboxgl = window.mapboxgl;
    const MapboxDirections = window.MapboxDirections;

    mapboxgl.accessToken =
      "pk.eyJ1Ijoicm9oZWQiLCJhIjoiY2ttb2p2bGxpMGx1ajJwcWt5djZzbmg4NiJ9.S0KWxO8EROHndg-Y0AzQrQ"; // replace this with your access token
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/rohed/ckmw1n2ev12qz17o9g6fqzb8b", // replace this with your style URL
      center: [90.3563, 23.685],
      zoom: 8,
    });
    // code from the next step will go here
    var directions = new MapboxDirections({
      accessToken: window.mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");

    map.on("click", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["bangladesh"], // replace this with the name of the layer
      });

      if (!features.length) {
        return;
      }

      var feature = features[0];
      console.log(feature.properties);

      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          `<h3>${feature.properties.Name}</h3><p>
          ${feature.properties.Description}</p>`
        )
        .addTo(map);

      const nav = new mapboxgl.NavigationControl();
      map.addControl(nav);
    });
  }

  render() {
    return <div id="map"></div>;
  }
}
