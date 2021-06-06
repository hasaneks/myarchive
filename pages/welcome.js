import styles from './welcome.module.css'
import BaseButton from '../components/buttons/base'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthenticationContext from '../context/authentication'
import TextInput from '../components/inputs/text'

export default function Welcome() {
  const authentication = useContext(AuthenticationContext)
  const [errorMessage, setErrorMessage] = useState()
  const [backgroundImage, setBackgroundImage] = useState(null)
  let imageNumber = 0

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    const authenticationResult = authentication?.signIn(data)
    console.log(authenticationResult)
    if (!authenticationResult) {
      setErrorMessage('Hatalı kullanıcı adı veya şifre girişi yaptınız.')
    }
  }

  const backgroundImages = [
    'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1598379232411-d670d6872193?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1533216504161-558dab74bdd6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80'
  ]

  useEffect(() => {
    setBackgroundImage(backgroundImages[0])
    setInterval(() => {
      if (backgroundImages.length - 1 === imageNumber) {
        imageNumber = 0
      } else {
        ++imageNumber
      }
      setBackgroundImage(backgroundImages[imageNumber])
    }, 5000)
  }, [])

  return (
    <section className={styles.welcomeArea}>
      <div className={styles.leftCard}>
        <img src={backgroundImage} alt="Movie" />
      </div>

      <div className={styles.rightCard}>
        <div className={styles.welcomeMessageArea}>
          <h2 className={styles.title}>Hoş Geldin</h2>
          <p>
            Okuduğun kitaplar ve izlediğin diziler hakkındaki tüm düşüncelerini
            paylaşmaya hazır mısın?

            <b>iletisim@hasaneksi.net - Hasan123</b>
          </p>
        </div>
        <div className={styles.loginForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
              <li>
                <TextInput
                  type="email"
                  placeholder="Mail"
                  {...register('mail', { required: true })}
                />
              </li>
              <li>
                <TextInput
                  type="password"
                  placeholder="Password"
                  {...register('password', { required: true, max: 12, min: 3 })}
                />
              </li>
              <li>
                <BaseButton type={'submit'} className={styles.loginButton}>
                  Giriş Yap
                </BaseButton>
              </li>
            </ul>
          </form>
          <span>{errorMessage}</span>
        </div>
      </div>
    </section>
  )
}
