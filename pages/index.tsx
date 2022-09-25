import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Entry.module.scss';
import smallInfo from '../components/SmallInfo/smallInfo';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="Meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.page}>
        {smallInfo({title: 'Total events archived', secondary: '12056'})}
        {smallInfo({title: 'Last updated', secondary: '5 Minutes ago'})}
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Home
