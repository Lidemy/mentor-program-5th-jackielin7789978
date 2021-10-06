/* eslint-disable no-unused-vars */
import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../constants/styles'
import blogg from '../pics/blogg.png'

export const PageWrapper = styled.div`
  max-width: 100%;
  font-family: 'Roboto Mono', monospace;
  ${'' /* 避免 margin collapsing */}
  border: 1px solid transparent;
`

export const MainArea = styled.div`
  margin-top: 110px;
  min-height: calc(100vh - 142px);
  width: 50%;
  margin-left: 25vw;
  padding: 18px 36px;
  ${MEDIA_QUERY.mobile} {
    min-height: calc(100vh - 92px);
    width: 90%;
    margin: 0px auto;
    margin-top: 60px;
  }
`

export const LoadingWrapper = styled.div`
  background: ${COLOR.loadingBG};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Loading() {
  return (
    <LoadingWrapper>
      <LoadingSVG />
    </LoadingWrapper>
  )
}

const Container = styled.div`
  margin-top: 110px;
  min-height: calc(100vh - 142px);
  min-width: 200px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 6%;
  ${MEDIA_QUERY.tablet} {
    left: 5%;
  }
  ${MEDIA_QUERY.mobile} {
    display: none;
  }
`
const Desc = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: ${COLOR.text_notsodark};
`

export function Sidebar() {
  return (
    <Container>
      <img alt='blogg' src={blogg} />
      <Desc>
        Some description
        <br />
        Some description
        <br />
        Some description
      </Desc>
    </Container>
  )
}
export const ERR = styled.p`
  padding: 0 4px;
  color: ${COLOR.warning};
  font-size: 14px;
`
