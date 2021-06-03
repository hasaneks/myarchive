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
import { useState, Fragment } from 'react'
import styles from './add.module.css'
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import AddBookForm from "../components/forms/addBook";
import AddMovieForm from "../components/forms/addMovie";

export default function Add() {
  const [formType, setFormType] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm()

  const switchArchiveType = (e) => {
    console.log(e.target.value)
    setFormType(e.target.value === 'movie.js' ? 'movie.js' : 'book')
  }
  const movieCategories = [
    'Aksiyon',
    'Komedi',
    'Bağımsız',
    'Bilim Kurgu',
    'Belgesel',
    'Drama',
    'Fantastik',
    'Gerilim',
    'Klasikler',
    'Biyogrofi'
  ]

  const bookCategories = [
    'Roman',
    'Bilim Kurgu',
    'Kişisel Gelişim',
    'Biyografi',
    'Gezi',
    'Şiir',
    'Çoçuk Gelişimi',
    'Tarih',
    'Macera',
    'Polisiye',
    'Eğitim'
  ]

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const res = await axios.post('api/hello', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })

      if (res.data.result !== 0) {
        const data = {
          userMail: loginInputs.userName,
          userName: res?.data?.name,
          userToken: res?.data?.user_id
        }
      } else {
      }
    } catch (e) {
      console.log('Error!' + e)
    }
  }

  const BookAddForm = () => {
    return (
      <form
        className={styles.form}
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className={styles.formTitle}>Kitap Ekle</span>

        <ul>
          <li>
            <label>Kitap Adı</label>
            <input
              {...register('bookName', { required: true })}
              placeholder={'Kitap Adı'}
              className={styles.input}
            />
            <small>{errors.bookName && 'Lütfen Kitabın Adını Belirtin'}</small>
          </li>

          <li>
            <label>Kapak Fotoğrafı</label>
            <input
              {...register('bannerUrl', { required: true })}
              type={'url'}
              placeholder={'Lütfen URL giriniz'}
              className={styles.input}
            />
            <small>
              {errors.bannerUrl && 'Lütfen Geçerli Bir URL Adresi Belirtin.'}
            </small>
          </li>

          <li>
            <label>Yazar Adı</label>
            <input
              {...register('author')}
              name={'author'}
              placeholder={'Yazar Adı'}
              className={styles.input}
            />
          </li>

          <li>
            <label>Kitap Kategorisi</label>
            <select {...register('category')}>
              {bookCategories.map((category) => {
                return <option key={category} value={category}> {category}</option>
              })}
            </select>
          </li>

          <li>
            <label>Sayfa Sayısı</label>
            <input
              {...register('numberOfPage')}
              type={'number'}
              name={'numberOfPage'}
              placeholder={'Sayfa Sayısı'}
              className={styles.input}
            />
          </li>

          <li>
            <label>Ne Zaman Okudun?</label>
            <input
              {...register('date', { required: true })}
              name={'date'}
              type="date"
              className={styles.input}
              max={`${new Date().toISOString().split('T')[0]}`}
            />
            <small>{errors.date && 'Lütfen Geçerli Bir Tarih Seçiniz.'}</small>
          </li>

          <li>
            <label>10 üzerinden puanla!</label>
            <input
              type="number"
              placeholder="Rating"
              {...register('rating', { max: 10, min: 1 })}
            />
            <small>
              {errors.rating && 'Lütfen 1 ile 10 arasında puanlandırın.'}
            </small>
          </li>

          <li>
            <label>Düşüncelerini Not Almak İster Misin?</label>
            <textarea
              rows={4}
              name={'description'}
              {...register('description')}
              placeholder={'Kitap Hakkındaki Düşüncelerin Neler?'}
              className={styles.input}
            />
          </li>
        </ul>

        <button type={'submit'}>Kitabı Ekle</button>
      </form>
    )
  }

  const MovieAddForm = () => {
    return (
      <form
        className={styles.form}
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className={styles.formTitle}>Film Ekle</span>

        <ul>
          <li>
            <label>Film Adı</label>
            <input
              {...register('movieName', { required: true })}
              placeholder={'Film Adı'}
              className={styles.input}
            />
            <small>{errors.movieName && 'Lütfen Filmin Adını Belirtin'}</small>
          </li>

          <li>
            <label>Afiş Fotoğrafı</label>
            <input
              {...register('bannerUrl', { required: true })}
              type={'url'}
              placeholder={'Lütfen URL giriniz'}
              className={styles.input}
            />
            <small>
              {errors.bannerUrl && 'Lütfen Geçerli Bir URL Adresi Belirtin.'}
            </small>
          </li>

          <li>
            <label>Film Kategorisi</label>
            <select {...register('category')}>
              {movieCategories.map((category) => {
                return <option key={category} value={category}> {category}</option>
              })}
            </select>
          </li>

          <li>
            <label>Ne Zaman İzledin?</label>
            <input
              {...register('date', { required: true })}
              name={'date'}
              type="date"
              className={styles.input}
              max={`${new Date().toISOString().split('T')[0]}`}
            />
            <small>{errors.date && 'Lütfen Geçerli Bir Tarih Seçiniz.'}</small>
          </li>

          <li>
            <label>10 üzerinden puanla!</label>
            <input
              type="number"
              placeholder="Puanla"
              {...register('rating', { max: 10, min: 1 })}
            />
            <small>
              {errors.rating && 'Lütfen 1 ile 10 arasında puanlandırın.'}
            </small>
          </li>

          <li>
            <label>Düşüncelerini Not Almak İster Misin?</label>
            <textarea
              rows={4}
              name={'description'}
              {...register('description')}
              placeholder={'Film Hakkındaki Düşüncelerin Neler?'}
              className={styles.input}
            />
          </li>
        </ul>

        <button type={'submit'}>Kitabı Ekle</button>
      </form>
    )
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
              value={'movie.js'}
              onClick={(e) => switchArchiveType(e)}
            />
            Dizi & Film
          </label>
        </div>
        {formType && (
          <div className={styles.formArea}>
            {formType === 'movie.js' ? <AddMovieForm requestUrl={"api/movie"}/> : <AddBookForm requestUrl={"api/book"}/>}
          </div>
        )}
      </div>
    </MasterPage>
  )
}
