import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rhevox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <h1>About</h1>
    </div>
  )
}
