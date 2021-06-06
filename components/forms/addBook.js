import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import styles from '../../pages/add.module.css'
import { useRouter } from 'next/router'
import TextInput from "../inputs/text";

export default function AddBookForm({ requestUrl }) {
  const router = useRouter()
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

      if (res.status === 200) {
        alert('Kitap Başarıyla Eklendi')
        router.push('/')
      }
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
            <TextInput
              {...register('bookName', { required: true })}
              placeholder={'Kitap Adı'}
            />
            <small>{errors.bookName && 'Lütfen Kitabın Adını Belirtin'}</small>
          </li>

          <li>
            <label>Kapak Fotoğrafı</label>
            <TextInput
              {...register('bannerUrl', { required: true })}
              type={'url'}
              placeholder={'Lütfen URL giriniz'}
            />
            <small>
              {errors.bannerUrl && 'Lütfen Geçerli Bir URL Adresi Belirtin.'}
            </small>
          </li>

          <li>
            <label>Yazar Adı</label>
            <TextInput
              {...register('author')}
              name={'author'}
              placeholder={'Yazar Adı'}
            />
          </li>

          <li>
            <label>Kitap Kategorisi</label>
            <select {...register('category')}>
              {bookCategories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {' '}
                    {category}
                  </option>
                )
              })}
            </select>
          </li>

          <li>
            <label>Sayfa Sayısı</label>
            <TextInput
              {...register('numberOfPages')}
              type={'number'}
              name={'numberOfPages'}
              placeholder={'Sayfa Sayısı'}
            />
          </li>

          <li>
            <label>Ne Zaman Okudun?</label>
            <TextInput
              {...register('date', { required: true })}
              name={'date'}
              type="date"
              max={`${new Date().toISOString().split('T')[0]}`}
            />
            <small>{errors.date && 'Lütfen Geçerli Bir Tarih Seçiniz.'}</small>
          </li>

          <li>
            <label>10 üzerinden puanla!</label>
            <TextInput
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
            <TextInput
              name={'description'}
              {...register('description')}
              placeholder={'Kitap Hakkındaki Düşüncelerin Neler?'}
            />
          </li>
        </ul>

        <button type={'submit'}>Kitabı Ekle</button>
      </form>
    </Fragment>
  )
}
