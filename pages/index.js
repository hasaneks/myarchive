import Head from 'next/head'
import MovieCard from '../components/cards/movie'
import styles from './index.module.css'
import BookCard from '../components/cards/book'
import MasterPage from '../components/global/masterPage'
import cn from 'classnames'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    axios.get('/api/movie').then((response) => {
      setMovies(response.data)
      /* console.log(response.status)
             console.log(response.statusText)
             console.log(response.headers)
             console.log(response.config) */
    })
  }, [])

  return (
    <MasterPage>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={cn('container', styles.movieCardArea)}>
        {movies?.map((movie, index) => {
          return (
            <MovieCard
              key={index}
              movieName={movie.movieName}
              category={movie.category}
              date={movie.date}
              bannerUrl={movie.bannerUrl}
            />
          )
        })}
      </div>

      <div className={cn('container', styles.movieCardArea)}>
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

export default Home
