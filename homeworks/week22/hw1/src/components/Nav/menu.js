/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import { setAuthToken } from '../../utils'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

const BTNWrapper = styled.div`
  margin-right: 4vw;
  display: flex;
  ${MEDIA_QUERY.mobile} {
    flex-direction: column;
    background: ${COLOR.light_primary};
    position: fixed;
    top: 0;
    transition: linear 0.3s;
    right: ${({ $isOpen }) => ($isOpen ? '0%' : '-100%')};
    height: 100vh;
    width: 60vw;
    margin: 0;
    padding-top: 60px;
    z-index: 2;
  }
`
const BTN = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  padding: 24px;
  margin: 0 4px;
  line-height: 32px;
  transition: ease 0.2s;
  color: ${COLOR.text_dark};
  font-size: 16px;
  &:hover {
    background: ${COLOR.light_primary_hover};
  }
  ${MEDIA_QUERY.mobile} {
    padding: 10px 24px;
    border-radius: 0;
    text-align: left;
    color: ${COLOR.text_light};
    &:hover {
      background: ${COLOR.white};
      color: ${COLOR.dark_primary};
    }
  }
`

export default function Menu({ handleClose, $isOpen }) {
  const { user, setUser } = useContext(AuthContext)
  const handleLogout = () => {
    setUser(null)
    setAuthToken('')
  }
  return (
    <BTNWrapper $isOpen={$isOpen}>
      <BTN onClick={handleClose} exact='true' to='/'>
        首頁
      </BTN>
      {user && (
        <BTN onClick={handleClose} exact='true' to='/newpost'>
          發布文章
        </BTN>
      )}
      <BTN onClick={handleClose} exact='true' to='/list'>
        文章列表
      </BTN>
      <BTN onClick={handleClose} exact='true' to='/about'>
        關於我
      </BTN>
      {!user && (
        <BTN onClick={handleClose} exact='true' to='/login'>
          登入 / 註冊
        </BTN>
      )}
      {user && (
        <BTN
          to='/'
          onClick={() => {
            handleLogout()
            handleClose()
          }}
        >
          登出
        </BTN>
      )}
    </BTNWrapper>
  )
}
Menu.propTypes = {
  handleClose: PropTypes.func,
  $isOpen: PropTypes.bool
}
