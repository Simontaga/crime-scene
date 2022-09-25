import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Entry.module.scss";
import layout from "../styles/Layout.module.scss";
import smallInfo from "../components/SmallInfo/smallInfo";
import recentEvents from "../components/RecentEvents/recentEvents";
import getLatestEvents from "../utils/getLatestEvents";
import IEvent from "../interfaces/IEvent";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import getAllEventLocations from "../utils/getAllEventLocations";
import ILocation from "../interfaces/IGPSLocation";
import getCountAllEvents from "../utils/getCountAllEvents";
import createRedisManager from "../lib/createRedisManager";

export async function getServerSideProps() {
  const redisManager = await createRedisManager();
  const latestEvents = await getLatestEvents(redisManager);
  const eventLocations = await getAllEventLocations(redisManager);
  const eventCount = await getCountAllEvents(redisManager);

  return {
    props: {
      latestEvents: JSON.parse(JSON.stringify(latestEvents)),
      gMapsKey: process.env.GOOGLE_MAPS,
      mapId: process.env.MAP_ID,
      eventLocations: JSON.parse(JSON.stringify(eventLocations)),
      eventCount: eventCount,
    },
  };
}

const Home: NextPage<{
  latestEvents: IEvent[];
  gMapsKey: string;
  mapId: string;
  eventLocations: ILocation[];
  eventCount: number;
}> = ({ latestEvents, gMapsKey, mapId, eventLocations, eventCount }) => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        <div className={layout.topHalf}>
          <div className={layout.topHalf__main}>
          <section className={layout.topInfo}>
            {smallInfo({ title: "Total events archived", secondary: eventCount })}
            {smallInfo({ title: "Last updated", secondary: "5 Minutes ago" })}
          </section>

          <section className={layout.mapLayout}>
            <GoogleMap events={eventLocations} apiKey={gMapsKey} mapId={mapId}/>
          </section>
          </div>
          
          <aside className={layout.topHalf__aside}>
            {recentEvents({ title: "Latest events", events: latestEvents })}
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
