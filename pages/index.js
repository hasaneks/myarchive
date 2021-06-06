import Head from 'next/head'
import MovieCard from '../components/cards/movie'
import styles from './index.module.css'
import BookCard from '../components/cards/book'
import MasterPage from '../components/global/masterPage'
import { useContext, useEffect } from 'react'
import CategoryTitle from '../components/titles/category'
import * as Icons from '../components/icons'
import { useDispatch, useSelector } from 'react-redux'
import { GetBooks, GetMovies } from '../redux/actions/getArchive'
import AuthenticationContext from '../context/authentication'

function Home() {
  const dispatch = useDispatch()
  const { booksData, moviesData } = useSelector((state) => state.GetArchive)
  const userState = useContext(AuthenticationContext)

  useEffect(() => {
    if (userState?.isAuth()) {
      dispatch(GetMovies())
      dispatch(GetBooks())
    }
  }, [])

  return (
    <MasterPage>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'container'}>
        <CategoryTitle title={'İzlediklerim'} icon={<Icons.WebSite />} />
        <div className={styles.movieCardArea}>
          {moviesData?.map((movie) => {
            return <MovieCard key={movie._id} data={movie} />
          })}
        </div>
      </div>

      <div className={'container'}>
        <CategoryTitle title={'Okuduklarım'} icon={<Icons.WebSite />} />

        <div className={styles.bookCardArea}>
          {booksData?.map((book) => {
            return <BookCard key={book._id} data={book} />
          })}
        </div>
      </div>
    </MasterPage>
  )
}

export default Home
