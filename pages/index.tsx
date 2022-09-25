import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Entry.module.scss";
import layout from "../styles/Layout.module.scss";
import smallInfo from "../components/SmallInfo/smallInfo";
import recentEvents from "../components/RecentEvents/recentEvents";
import getLatestEvents from "../utils/getLatestEvents";
import IEvent from "../interfaces/IEvent";
import googleMap from "../components/GoogleMap/googleMap";
import getAllEventLocations from "../utils/getAllEventLocations";
import ILocation from "../interfaces/IGPSLocation";

export async function getServerSideProps() {
  const latestEvents = await getLatestEvents();
  const eventLocations = await getAllEventLocations();

  return {
    props: {
      latestEvents: JSON.parse(JSON.stringify(latestEvents)),
      gMapsKey: process.env.GOOGLE_MAPS,
      mapId: process.env.MAP_ID,
      eventLocations: JSON.parse(JSON.stringify(eventLocations))
    },
  };
}

const Home: NextPage<{ latestEvents: IEvent[]; gMapsKey: string, mapId: string, eventLocations: ILocation[] }> = ({
  latestEvents,
  gMapsKey,
  mapId,
  eventLocations,
}) => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <section className={layout.topInfo}>
          {smallInfo({ title: "Total events archived", secondary: "12056" })}
          {smallInfo({ title: "Last updated", secondary: "5 Minutes ago" })}
        </section>
        <section className={layout.mapLayout}>
          {googleMap({ events: eventLocations, apiKey: gMapsKey, mapId: mapId })}
        </section>
        <aside>
          {recentEvents({ title: "Latest events", events: latestEvents })}
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
