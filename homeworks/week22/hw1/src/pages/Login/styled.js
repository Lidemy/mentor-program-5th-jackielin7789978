import styled from 'styled-components'
import { COLOR, MEDIA_QUERY } from '../../constants/styles'

export const Container = styled.div`
  width: 25vw;
  margin: 120px auto;
  border: 1px solid ${COLOR.transparent_primary};
  ${MEDIA_QUERY.tablet} {
    width: 40vw;
  }
  ${MEDIA_QUERY.mobile} {
    width: 60vw;
  }
`
export const Tabs = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`
export const Tab = styled.div`
  height: 100%;
  width: 50%;
  line-height: 50px;
  text-align: center;
  &:first-child {
    border-right: 1px solid ${COLOR.transparent_primary};
  }
  cursor: pointer;
`
export const FormContainer = styled.form`
  width: 100%;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Inputs = styled.div`
  width: 70%;
`
export const Input = styled.input`
  width: 100%;
  margin: 20px auto;
  padding: 10px 16px;
  font-size: 16px;
  border: 1px solid ${COLOR.transparent_primary};
  border-radius: 0px;
  color: ${COLOR.text_dark};
  &:focus {
    outline: 1px solid ${COLOR.text_notsodark};
  }
  &::placeholder {
    color: ${COLOR.text_grey};
  }
`
export const Submit = styled(Input)`
  background: ${COLOR.light_primary};
  color: ${COLOR.white};
  cursor: pointer;
  transition: ease 0.2s;
  &:hover {
    background: ${COLOR.dark_primary};
  }
  &:focus {
    outline: none;
  }
`
