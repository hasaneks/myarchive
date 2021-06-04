import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MasterPage from '../../components/global/masterPage'
import styles from '../contentDetail.module.css'
import cn from 'classnames'
import * as Icons from '../../components/icons'

const MovieDetail = () => {
  const [resData, setResData] = useState(null)

  const router = useRouter()
  const { slug } = router.query
  const id = slug?.split('-').slice(-1)[0]
  console.log(id)

  useEffect(() => {
    if (id !== undefined) {
      axios.get(`/api/book?id=${id}`).then((response) => {
        setResData(response.data)
        console.log(response.data)
        /* console.log(response.status)
                               console.log(response.statusText)
                               console.log(response.headers)
                               console.log(response.config) */
      })
    }
  }, [id])

  return (
    <MasterPage>
      <div className={styles.headerArea}>
        <div className={cn('container', styles.headerContainer)}>
          <div className={styles.headerInformationArea}>
            <h1>{resData?.movieName}</h1>
            <ul>
              <li>
                <span>
                  <Icons.Calendar /> {resData?.date.split('T', 1)}
                </span>
              </li>
              <li>
                <span>
                  <Icons.Category /> {resData?.category}
                </span>
              </li>
              <li>
                <span>
                  <Icons.Category /> {resData?.rating}
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.headerImageArea}>
            <img src={resData?.bannerUrl} alt={resData?.movieName} />
          </div>
        </div>
      </div>

      <div className={cn(styles.movieDescription, 'container')}>
        <p>{resData?.description}</p>
      </div>
    </MasterPage>
  )
}

export default MovieDetail
