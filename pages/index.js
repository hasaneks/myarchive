import Head from 'next/head'
import MovieCard from '../components/cards/movie'
import styles from './index.module.css'
import BookCard from '../components/cards/book'
import MasterPage from '../components/global/masterPage'

export default function Home() {
  return (
    <MasterPage>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.movieCardArea}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />

        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>

      <div className={styles.movieCardArea}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />

        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </MasterPage>
  )
}
