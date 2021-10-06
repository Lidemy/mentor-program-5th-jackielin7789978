/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../constants/styles'

const Container = styled.div`
  width: 100%;
  height: 32px;
  color: ${COLOR.text_kindawhite};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLOR.dark_primary};
  font-family: 'Roboto Mono', monospace;
  ${MEDIA_QUERY.mobile} {
    font-size: 10px;
  }
`

export default function Footer() {
  return <Container>Copyright © 2021 Blogg All rights Reserved.</Container>
}
