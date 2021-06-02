import styles from './book.module.css'
import * as Icons from '../icons'
import Link from 'next/link'

export default function BookCard() {
  return (
    <Link href={'#'}>
      <a className={styles.bookCardArea}>
        <div className={styles.bookImageArea}>
          <img
            src="https://i.dr.com.tr/cache/600x600-0/originals/0001789144001-1.jpg"
            alt="Makine Olmak"
          />
        </div>

        <div className={styles.informationArea}>
          <p className={styles.title}>Makine Olmak</p>
          <ul>
            <li>
              <span>
                <Icons.Category />
                Bilim-Kurgu
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                Bilim-Kurgu
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                Bilim-Kurgu
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                Bilim-Kurgu
              </span>
            </li>
          </ul>
        </div>
      </a>
    </Link>
  )
}
