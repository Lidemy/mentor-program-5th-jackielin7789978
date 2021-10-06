import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

export const PageWrapper = styled.div`
  min-height: calc(100vh - 155px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${COLOR.text_dark};
`
export const Title = styled.div`
  margin-bottom: 12px;
  font-size: 20px;
  ${MEDIA_QUERY.mobile} {
    font-size: 18px;
  }
`
export const LOGO = styled.span`
  text-decoration: none;
  color: ${COLOR.text_dark};
  font-size: 36px;
  font-family: 'Monoton', cursive;
  ${MEDIA_QUERY.mobile} {
    font-size: 30px;
  }
`
export const IMG = styled.img`
  width: 500px;
  ${MEDIA_QUERY.tablet} {
    width: 400px;
  }
  ${MEDIA_QUERY.mobile} {
    width: 300px;
  }
`
export const Desc = styled.div`
  font-size: 16px;
  margin-top: 14px;
  text-align: center;
  line-height: 1.8em;
  ${MEDIA_QUERY.mobile} {
    font-size: 12px;
  }
`
