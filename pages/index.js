import Head from 'next/head'
import MovieCard from '../components/cards/movie'
import styles from './index.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.movieCardArea}>
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
      </main>
    </div>
  )
}
