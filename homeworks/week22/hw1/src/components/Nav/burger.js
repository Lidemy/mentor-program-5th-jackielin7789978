/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

const OpenMenu = styled.button`
  display: none;
  ${MEDIA_QUERY.mobile} {
    margin-right: 5vw
    padding: 2px 0px;
    width: 40px;
    height: 40px;
    border: 2px solid ${COLOR.light_primary};
    border-radius: 3px;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    transition: linear 0.2s;
    z-index: 1;
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'flex')};
    &:active {
      outline: none;
      border: none;
    }
    &:hover {
      background: ${COLOR.light_primary};
      div {
        background: ${COLOR.white};
      }
    }
    div {
      height: 2px;
      width: 70%;
      margin: 0px auto;
      background: ${COLOR.light_primary};
    }
  }
`

const CloseMenu = styled.button`
  display: none;
  ${MEDIA_QUERY.mobile} {
    margin-right: 5vw;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-around;
    z-index: 5;
    transition: ease 0.2s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    div {
      height: 3px;
      width: 70%;
      margin: 0px auto;
      background: ${COLOR.white};
    }
    div:first-child {
      transition: ease 0.5s;
      transform: rotate(45deg);
      position: relative;
      top: 10px;
    }
    div:last-child {
      transform: rotate(-45deg);
      position: relative;
      bottom: 10px;
    }
  }
`

export default function Burger({ handleOpen, handleClose, $isOpen }) {
  return (
    <>
      <OpenMenu onClick={handleOpen} $isOpen={$isOpen}>
        <div />
        <div />
        <div />
      </OpenMenu>
      <CloseMenu onClick={handleClose} $isOpen={$isOpen}>
        <div />
        <div />
      </CloseMenu>
    </>
  )
}

Burger.propTypes = {
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  $isOpen: PropTypes.bool
}
