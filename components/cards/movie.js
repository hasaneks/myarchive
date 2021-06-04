import styles from './movie.module.css'
import Link from 'next/link'
import * as Icons from '../icons'
import convertSlug from "slug"

export default function MovieCard({data}) {


  return (
    <Link href={`/movie/${convertSlug(data?.movieName)}-${data?.id}`}>
      <a className={styles.movieCard}>
        <div className={styles.bannerArea}>
          <img
            src={data?.bannerUrl}
            alt={data?.movieName}
          />
        </div>

        <div className={styles.informationArea}>
          <p className={styles.title}>{data?.movieName}</p>
          <div className={styles.shortInformationArea}>
            <ul>
              <li>
                <span>
                  <Icons.Calendar /> {data?.date}
                </span>
              </li>
              <li>
                <span>
                  <Icons.Category /> {data?.category}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <span className={styles.gradient}></span>
      </a>
    </Link>
  )
}
