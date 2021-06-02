import styles from './welcome.module.css'
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import BaseButton from '../components/buttons/base'
import { useEffect, useState } from 'react'

export default function Welcome() {
  const [backgroundImage, setBackgroundImage] = useState(null)
  let imageNumber = 0

  const Login = (e) => {
    e.preventDefault()
    console.log(e)
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
          </p>
        </div>
        <div className={styles.loginForm}>
          <form onSubmit={(e) => Login(e)} noValidate autoComplete="off">
            <TextField
              required
              id="standard-required"
              label="E-posta Adresiniz"
              placeholder={'E-posta'}
              className={styles.input}
            />

            <TextField
              required
              type="password"
              id="standard-required"
              label="Şifreniz"
              placeholder={'Şifre'}
              className={styles.input}
            />

            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="Beni Hatırla"
              color={'#fff'}
            />
            <BaseButton type={'submit'} className={styles.loginButton}>
              Giriş Yap
            </BaseButton>
          </form>
        </div>
      </div>
    </section>
  )
}
