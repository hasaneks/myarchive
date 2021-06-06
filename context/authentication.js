import { createContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import storage from '../core/helper/storage'

const AuthenticationContext = createContext(null)

export const AuthenticationProvider = ({ children }) => {
  const router = useRouter()
  const userData = [
    {
      mail: 'iletisim@hasaneksi.net',
      password: 'Hasan123',
      jwt: '96e51b2752e146e9b5fe2c2ca3bff28d'
    },
    {
      mail: 'iletisim@neriman.com',
      password: 'Neriman123',
      jwt: 'caf8a45045f4499bb8598c0e8fa88a74'
    },
    {
      mail: 'iletisim@fatih.com',
      password: 'Fatih123',
      jwt: '66394258546f4cff8c79a696f7ac416d'
    }
  ]
  let user = null

  const isAuth = () => {
    const localStorageJwt = storage.getLocalStorage('user-key')
    if (localStorageJwt) {
      user = userData.find((user) => user.jwt === localStorageJwt)
      if (user && router.pathname === '/welcome') {
        router.push('/')
      } else if (user === undefined && router.pathname !== '/welcome') {
        router.push('/welcome')
      } else {
        return user
      }
    } else {
      router.push('/welcome')
    }
  }

  const signIn = (params) => {
    const res = userData.find(
      (user) => user.mail === params.mail && user.password === params.password
    )
    if (res) {
      storage.addLocalStorage('user-key', res.jwt)
      router.push('/')
    } else {
      return false
    }
  }

  const signOut = () => {
    storage.removeLocalStorage('user-key')
    router.push('/welcome')
  }

  return (
    <AuthenticationContext.Provider value={{ isAuth, signIn,signOut }}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContext
