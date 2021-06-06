import MasterPage from '../components/global/masterPage'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
  Typography
} from '@material-ui/core'
import { useState, Fragment, useContext } from 'react'
import styles from './add.module.css'
import cn from 'classnames'
import AddBookForm from '../components/forms/addBook'
import AddMovieForm from '../components/forms/addMovie'

export default function Add() {
  const [formType, setFormType] = useState(null)

  const switchArchiveType = (e) => {
    setFormType(e.target.value === 'movie' ? 'movie' : 'book')
  }

  return (
    <MasterPage>
      <div className={cn('container', styles.pageArea)}>
        <div className={styles.chooseFormTypeArea}>
          <label>Eklemek İstediğiniz Türü Seçiniz</label>

          <label>
            <input
              type="radio"
              name="archiveType"
              value={'book'}
              onClick={(e) => switchArchiveType(e)}
            />
            Kitap
          </label>

          <label>
            <input
              type="radio"
              name="archiveType"
              value={'movie'}
              onClick={(e) => switchArchiveType(e)}
            />
            Dizi & Film
          </label>
        </div>
        {formType && (
          <div className={styles.formArea}>
            {formType === 'movie' ? (
              <AddMovieForm requestUrl={'api/movie'} />
            ) : (
              <AddBookForm requestUrl={'api/book'} />
            )}
          </div>
        )}
      </div>
    </MasterPage>
  )
}
