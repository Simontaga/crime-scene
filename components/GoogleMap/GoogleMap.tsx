import { FunctionComponent, useEffect, useRef } from "react";
import styles from "../../styles/Entry.module.scss";
import { Loader } from "@googlemaps/js-api-loader";
import component from "../GoogleMap/googleMap.module.scss";
import IGPSLocation from "../../interfaces/IGPSLocation";

const GoogleMap: FunctionComponent<{ events: IGPSLocation[]; apiKey: string, mapId: string }> = ({
  events,
  apiKey,
  mapId,
}) => {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ['visualization']
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 61.9905343, lng: 21.1580683 },
        zoom: 3.8,
        mapId: mapId,
        streetViewControl: false,
        mapTypeControl: false
      });
      let heatMap = new google.maps.visualization.HeatmapLayer({
        data: events.map((e: IGPSLocation) => new google.maps.LatLng(e.lat, e.long)),
      });
  
      heatMap.setMap(map);
    });


  });

  return (
    <div className={`${styles.container} ${component.map}`}>
      <div className={component.map__inner}>
        <div className={component.map__map} id="map" ref={googlemap}></div>
      </div>
    </div>
  );
};

export default GoogleMap;
