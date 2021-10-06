import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const TOKEN_NAME = 'token'

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token)
}

export const getAuthToken = () => localStorage.getItem(TOKEN_NAME)
