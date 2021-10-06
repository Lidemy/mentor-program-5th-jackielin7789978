/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import Footer from './components/Footer'
import { Home, Post, About, Login, NewPost } from './pages'
import { AuthContext, LoadingContext } from './context'
import { getAuthToken, ScrollToTop } from './utils'
import { getMe } from './WebApi'
import GlobalStyle from './constants/globalStyle'
import { PageWrapper, MainArea, Sidebar, Loading } from './components/general'

export default function App() {
  const [user, setUser] = useState(null)
  const [isGettingUser, setIsGettingUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const token = getAuthToken()
    if (token) {
      setIsGettingUser(true)
      ;(async() => {
        const res = await getMe()
        setUser(res.data)
        setIsGettingUser(false)
      })()
    }
  }, [])

  return (
    <Router basename='/'>
      <GlobalStyle />
      <AuthContext.Provider value={{
        user,
        setUser,
        isGettingUser
      }}>
        <LoadingContext.Provider value={{
          isLoading,
          setIsLoading
        }}>
          <ScrollToTop />
          <Navbar />
          {isLoading && <Loading />}
          <PageWrapper>
            <Sidebar />
            <MainArea>
              <Switch>
                <Route path='/posts/:id'>
                  <Post isLoading={isLoading} setIsLoading={setIsLoading} />
                </Route>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/newpost'>
                  <NewPost />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </MainArea>
          </PageWrapper>
          <Footer />
        </LoadingContext.Provider>
      </AuthContext.Provider>
    </Router>
  )
}
