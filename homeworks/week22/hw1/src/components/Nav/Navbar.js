/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'
import { AuthContext } from '../../context'
import Menu from './menu'
import Burger from './burger'

const TopBar = styled.div`
  height: 30px;
  width: 100%;
  background: ${COLOR.light_primary};
  position: fixed;
  ${MEDIA_QUERY.mobile} {
    display: none;
  }
`
const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background: ${COLOR.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.transparent_primary};
  box-shadow: 0px 2px 4px 1px ${COLOR.transparent_primary};
  position: fixed;
  top: 30px;
  ${MEDIA_QUERY.mobile} {
    height: 60px;
    top: 0;
  }
`
const Sitename = styled(Link)`
  text-decoration: none;
  color: ${COLOR.text_dark};
  font-size: 40px;
  font-family: 'Monoton', cursive;
  margin-left: 8vw;
  ${MEDIA_QUERY.mobile} {
    font-size: 34px;
    margin-left: 4vw;
  }
`
export default function Navbar() {
  const { isGettingUser } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if ((window.innerWidth === 768)) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <TopBar />
      <Nav>
        <Sitename to='/'>BLOGG</Sitename>
        {!isGettingUser && <Menu handleClose={handleClose} $isOpen={isOpen} />}
        <Burger
          handleOpen={handleOpen}
          handleClose={handleClose}
          $isOpen={isOpen}
        />
      </Nav>
    </>
  )
}
