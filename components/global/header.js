import styles from './header.module.css'
import Link from 'next/link'
import cn from 'classnames'
import BaseButton from '../buttons/base'
import * as Icons from '../icons'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={cn('container', styles.headerArea)}>
        <div className={styles.logoArea}>
          <Link href="/">
            <a>
              <img src="/img/logo.png" alt="My Archive" />
            </a>
          </Link>
        </div>

        <div className={styles.menuArea}>
          <nav className={styles.menu}>
            <ul>
              <li>
                <BaseButton href={'/'}>Arşivim</BaseButton>
              </li>
              <li>
                <BaseButton href={'/add'}>Ekle</BaseButton>
              </li>
              <li>
                <BaseButton href={'/about'}>Hakkında</BaseButton>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.userBadgeArea}>
          <span>
            HE
          </span>
        </div>
      </div>
    </header>
  )
}
