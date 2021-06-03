import styles from './movie.module.css'
import Link from 'next/link'
import * as Icons from '../icons'

export default function MovieCard({movieName,date,category,bannerUrl}) {
  return (
    <Link href={'#'}>
      <a className={styles.movieCard}>
        <div className={styles.bannerArea}>
          <img
            src={bannerUrl}
            alt={movieName}
          />
        </div>

        <div className={styles.informationArea}>
          <p className={styles.title}>{movieName}</p>
          <div className={styles.shortInformationArea}>
            <ul>
              <li>
                <span>
                  <Icons.Calendar /> {date}
                </span>
              </li>
              <li>
                <span>
                  <Icons.Category /> {category}
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
