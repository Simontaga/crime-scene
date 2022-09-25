import { FunctionComponent, useEffect, useRef } from "react";
import styles from "../../styles/Entry.module.scss";
import { Loader } from "@googlemaps/js-api-loader";
import IEvent from "../../interfaces/IEvent";
import component from "../GoogleMap/googleMap.module.scss";



const googleMap: FunctionComponent<{ events: IEvent[], apiKey: string }> = ( { events, apiKey } ) => {
  const googlemap = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(googlemap.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    });
  });

  return (
    <div className={`${styles.container} ${component.map}`}>
      <div className={component.map__inner} id="map" ref={googlemap}></div>
    </div>
  );
};

export default googleMap;
