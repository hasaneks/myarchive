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
  const [books, setBooks] = useState(null)

  useEffect(() => {
    axios.get('/api/movie').then((response) => {
      setMovies(response.data)
      /* console.log(response.status)
             console.log(response.statusText)
             console.log(response.headers)
             console.log(response.config) */
    })

    axios.get('/api/book').then((response) => {
      setBooks(response.data)
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
        {movies?.map((movie) => {
          return <MovieCard key={movie._id} data={movie} />
        })}
      </div>

      <div className={cn('container', styles.movieCardArea)}>
        {books?.map((book) => {
          return <BookCard key={book._id} data={book} />
        })}
      </div>
    </MasterPage>
  )
}

export default Home
