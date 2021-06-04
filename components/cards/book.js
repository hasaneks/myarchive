import styles from './book.module.css'
import * as Icons from '../icons'
import Link from 'next/link'
import convertSlug from "slug"

export default function BookCard({data}) {
  return (
    <Link href={`/book/${convertSlug(data?.bookName)}-${data?._id}`}>
      <a className={styles.bookCardArea}>
        <div className={styles.bookImageArea}>
          <img
            src={data?.bannerUrl}
            alt={data?.bookName}
          />
        </div>

        <div className={styles.informationArea}>
          <p className={styles.title}>{data?.bookName}</p>
          <ul>
            <li>
              <span>
                <Icons.Category />
                {data?.category}
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                {data?.numberOfPages}
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                {data?.date.split('T', 1)}
              </span>
            </li>

            <li>
              <span>
                <Icons.Category />
                {data?.author}
              </span>
            </li>
          </ul>
        </div>
      </a>
    </Link>
  )
}
