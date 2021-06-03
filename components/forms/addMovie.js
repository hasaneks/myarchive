import { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../pages/add.module.css'
import axios from 'axios'

export default function AddMovieForm({ requestUrl }) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm()

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

  const onSubmit = async (data) => {

    try {
      const res = await fetch(requestUrl, {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

    } catch (e) {
      console.log('Error!' + e)
    }
  }

  return (
    <Fragment>
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
            />
            <small>{errors.movieName && 'Lütfen Filmin Adını Belirtin'}</small>
          </li>

          <li>
            <label>Afiş Fotoğrafı</label>
            <input
              {...register('bannerUrl', { required: true })}
              type={'url'}
              placeholder={'Lütfen URL giriniz'}
            />
            <small>
              {errors.bannerUrl && 'Lütfen Geçerli Bir URL Adresi Belirtin.'}
            </small>
          </li>

          <li>
            <label>Film Kategorisi</label>
            <select {...register('category')}>
              {movieCategories.map((category) => {
                return (
                  <option key={category} value={category}>

                    {category}
                  </option>
                )
              })}
            </select>
          </li>

          <li>
            <label>Ne Zaman İzledin?</label>
            <input
              {...register('date', { required: true })}
              name={'date'}
              type="date"
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
            />
          </li>
        </ul>

        <button type={'submit'}>Film Ekle</button>
      </form>
    </Fragment>
  )
}
