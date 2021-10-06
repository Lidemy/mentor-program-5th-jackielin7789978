import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

export const PostWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  border-bottom: 1px solid ${COLOR.transparent_primary};
  ${MEDIA_QUERY.mobile} {
    padding: 20px;
  }
`
export const Title = styled(Link)`
  text-decoration: none;
  margin: 8px 0px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLOR.text_dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${MEDIA_QUERY.mobile} {
    font-size: 20px;
  }
`
export const CreatedAt = styled.div`
  font-size: 16px;
  color: ${COLOR.ghost};
  ${MEDIA_QUERY.mobile} {
    font-size: 14px;
  }
`
export const ContentPreview = styled.div`
  width: 80%;
  margin-top: 18px;
  font-size: 16px;
  color: ${COLOR.text_dark};
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
export const ReadMoreBTN = styled(Link)`
  text-decoration: none;
  color: ${COLOR.text_notsodark};
  border: 2px solid ${COLOR.transparent_primary};
  margin-top: 48px;
  margin-left: -4px;
  width: 140px;
  text-align: center;
  padding: 8px;
  transition: all 0.2s;

  &:hover {
    border: 2px solid ${COLOR.transparent_primary_hover};
  }
`
