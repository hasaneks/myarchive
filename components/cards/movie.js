import styles from './movie.module.css'
import Link from 'next/link'
import * as Icons from '../icons'

export default function MovieCard() {
  return (
    <Link href={'#'}>
      <a className={styles.movieCard}>
        <div className={styles.bannerArea}>
          <img
            src="https://tr.web.img4.acsta.net/pictures/bzp/01/27070.jpg"
            alt="Yüzüklerin Efendisi"
          />
        </div>

        <div className={styles.informationArea}>
          <p className={styles.title}>Yüzüklerin Efendisi</p>
          <div className={styles.shortInformationArea}>
            <ul>
              <li>
                <span>
                  <Icons.Calendar /> 05 Ocak 2012
                </span>
              </li>
              <li>
                <span>
                  <Icons.Watch /> 2:45
                </span>
              </li>
              <li>
                <span>
                  <Icons.Category /> Aksiyon
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
