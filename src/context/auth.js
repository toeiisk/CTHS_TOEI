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
    const [, setCookie, removeCookie] = useCookies(['token'])
    const [loadMe, { loading, data }] = useLazyQuery(ME_QUERY, { fetchPolicy: 'network-only' })
    const [userLogin] = useMutation(LOGIN_MUTATION)
    const handleLogin = useCallback(
      async (username, password) => {
        try {
          const res = await userLogin({ variables: { username, password } })
          console.log(res.data.userLogin?.token)
          if (res?.data?.userLogin?.token) {
            setCookie('token', res?.data?.userLogin?.token, { maxAge: 86400 })
            setUser(res?.data?.userLogin?.user)
          }
        } catch (err) {
          alert('Username หรือ Password ผิดพลาด')
          removeCookie('token', { maxAge: 86400 })
        }
      },
      [userLogin, removeCookie, setCookie],
    )
    const handleLogout = useCallback(
      () => {
        setUser(null)
        removeCookie('token', { maxAge: 86400 })
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
            console.log(data)
          } catch (err) {
            removeCookie('token', { maxAge: 86400 })
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