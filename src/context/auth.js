import {
    createContext, useCallback, useContext, useEffect, useState,
  } from 'react'
  import { useMutation, useLazyQuery } from '@apollo/client'
  import { useCookies } from 'react-cookie'
  
  import { ME_QUERY } from '../GraphQL/UserQuerie'
  import { LOGIN_MUTATION } from '../GraphQL/LoginMutation'
  import { useNavigate } from "react-router-dom";
  
  const SessionContext = createContext()
  
  export const SessionProvider = (props) => {
    const { children } = props
    const [user, setUser] = useState(null)
    const [, setCookie, removeCookie] = useCookies(['cths_token'])
    const [loadMe, { loading, data }] = useLazyQuery(ME_QUERY, { fetchPolicy: 'network-only' })
    const [userLogin] = useMutation(LOGIN_MUTATION)
    const handleLogin = useCallback(
      async (username, password) => {
        try {
          const res = await userLogin({ variables: { username, password } })
          if (res?.data?.userLogin?.token) {
            setCookie('cths_token', res?.data?.userLogin?.token, { maxAge: 86400 })
            localStorage.setItem('cths_token', res?.data?.userLogin?.token)
            setUser(res?.data?.userLogin?.user)
          }
        } catch (err) {
          alert('Username หรือ Password ผิดพลาด')
          removeCookie('cths_token', { maxAge: 86400 })
          localStorage.removeItem('cths_token')
        }
      },
      [userLogin, removeCookie, setCookie],
    )
    const handleLogout = useCallback(
      () => {
        setUser(null)
        removeCookie('cths_token', { maxAge: 86400 })
        localStorage.removeItem('cths_token')
      },
      [removeCookie],
    )
    useEffect(
      () => {
        if (data?.me) {
          setUser(data?.me)
        }
      },
      [data],
    )
    useEffect(
      () => {
        const loadData = async () => {
          try {
            await loadMe()
          } catch (err) {
            removeCookie('cths_token', { maxAge: 86400 })
            localStorage.removeItem('cths_token')
          }
        }
        loadData()
      },
      [loadMe, removeCookie],
    )
    return (
      <SessionContext.Provider
        value={{
          loading, user, userLogin: handleLogin, logout: handleLogout,
        }}
      >
        {children}
      </SessionContext.Provider>
    )
  }
  
  export const useSession = () => useContext(SessionContext)
  
  export default SessionContext