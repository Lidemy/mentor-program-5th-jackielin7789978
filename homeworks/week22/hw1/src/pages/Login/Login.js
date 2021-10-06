/* eslint-disable space-before-function-paren */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import { login, getMe, register } from '../../WebApi'
import { setAuthToken } from '../../utils'
import { AuthContext } from '../../context'
import LoginForm from './LoginForm'
import RegForm from './RegForm'
import { Container, Tabs, Tab } from './styled'
import { COLOR } from '../../constants/styles'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [tab, setTab] = useState('Login')

  const history = useHistory()
  const { setUser } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    if (!username || !password) return setErrMsg('請填寫所有欄位')
    const asyncLogin = async() => {
      let data
      try {
        data = await login(username, password)
        if (!data.ok) return setErrMsg(data.message)
        setAuthToken(data.token)
        const res = await getMe()
        if (!res.ok) {
          setAuthToken('')
          return setErrMsg(res.toString())
        }
        setUser(res.data)
        history.push('./')
      } catch (e) {
        console.log(e)
      }
    }
    asyncLogin()
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (!username || !nickname || !password) return setErrMsg('請填寫所有欄位')
    const asyncRegister = async () => {
      let res
      try {
        res = await register(username, nickname, password)
        if (!res.ok) {
          setAuthToken('')
          return setErrMsg(res.message)
        }
        setAuthToken(res.token)
        const response = await getMe()
        if (!response.ok) {
          setAuthToken('')
          return setErrMsg(response.toString())
        }
        setUser(response.data)
        history.push('./')
      } catch (e) {
        console.log(e)
      }
    }
    asyncRegister()
  }

  const handleTab = (e) => {
    setErrMsg('')
    if (e.target.innerText === 'Login') {
      setTab(e.target.innerText)
    }
    if (e.target.innerText === 'Register') {
      setTab(e.target.innerText)
    }
  }

  const loginProps = {
    setUsername,
    setPassword,
    handleLogin,
    errMsg,
    setErrMsg
  }
  const regProps = loginProps
  regProps.setNickname = setNickname
  regProps.handleRegister = handleRegister
  return (
    <Container>
      <Tabs>
        <Tab
          onClick={handleTab}
          style={{
            background: tab === 'Register' && COLOR.tab_notselected,
            borderBottom:
              tab === 'Register' && `1px solid ${COLOR.transparent_primary}`
          }}
        >
          Login
        </Tab>
        <Tab
          onClick={handleTab}
          style={{
            background: tab === 'Login' && COLOR.tab_notselected,
            borderBottom:
              tab === 'Login' && `1px solid ${COLOR.transparent_primary}`
          }}
        >
          Register
        </Tab>
      </Tabs>
      {tab === 'Login' && <LoginForm props={loginProps} />}
      {tab === 'Register' && <RegForm props={regProps} />}
    </Container>
  )
}
