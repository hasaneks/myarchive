import { useState, Fragment } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../pages/add.module.css'

export default function AddBookForm({requestUrl}) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm()

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
              {...register('numberOfPages')}
              type={'number'}
              name={'numberOfPages'}
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
    </Fragment>
  )
}
