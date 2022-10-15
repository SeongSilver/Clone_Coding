import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>윈스턴's 포트폴리오</title>
        <meta name="description" content="오늘도 리액트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>윈스턴의 빡코딩</h1>
    </div>
  )
}
