import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

export const PageWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditorWrapper = styled.div`
  width: 30vw;
  padding: 30px;
  margin-top: 10px;
  border: 1px solid ${COLOR.transparent_primary};
  ${MEDIA_QUERY.tablet} {
    width: 40vw;
  }
  ${MEDIA_QUERY.mobile} {
    width: 100vw;
    outline: 1px solid gold;
  }
`
export const PageTitle = styled.div`
  font-size: 28px;
`
export const TitleInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  margin: 24px 0;
  font-size: 18px;
  border: 1px solid ${COLOR.ghost};
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ghost_darker};
  }
`
export const Editor = styled.textarea`
  resize: none;
  width: 100%;
  height: 25vh;
  padding: 8px;
  border: 1px solid ${COLOR.ghost};
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid ${COLOR.ghost_darker};
  }
`
export const SubmitBTN = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 4px;
  font-size: 16px;
  height: 40px;
  border: none;
  background: ${COLOR.dark_primary};
  color: ${COLOR.text_kindawhite};
  transition: ease 0.2s;
  &:hover {
    background: ${COLOR.dark_primary_hover};
  }
  ${MEDIA_QUERY.mobile} {
    height: 30px;
  }
`
