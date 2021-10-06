import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-width: 600px;
  margin: 60px auto;
  ${MEDIA_QUERY.tablet} {
    width: 100%;
    min-width: unset;
    margin-left: 30px;
  }
  ${MEDIA_QUERY.mobile} {
    width: 100%;
    min-width: unset;
    margin: 20px auto;
  }
`
export const Title = styled.div`
  text-decoration: none;
  margin: 12px 0px;
  font-size: 30px;
  font-weight: bold;
  color: ${COLOR.text_dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MEDIA_QUERY.tablet} {
    font-size: 26px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 24px;
  }
`
export const CreatedAt = styled.div`
  font-size: 16px;
  color: ${COLOR.ghost};
  ${MEDIA_QUERY.tablet} {
    font-size: 14px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 12px;
  }
`
export const Content = styled.div`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.8em;
  word-wrap: break-word;
  border: 1px solid transparent;
  color: ${COLOR.text_dark};
  white-space: pre-wrap;
  word-wrap: break-word;
  ${MEDIA_QUERY.tablet} {
    font-size: 16px;
  }
  ${MEDIA_QUERY.mobile} {
    font-size: 16px;
  }
`
