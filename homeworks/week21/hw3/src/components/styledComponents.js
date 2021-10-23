import styled from 'styled-components'
import { COLORS } from '../constants/styles'

// for App.js
export const Page = styled.div`
  min-height: 100vh;
  background: ${COLORS.page_background};
  padding: 1px;
`
export const Form = styled.div`
  width: 645px;
  margin: auto;
  margin-bottom: 80px;
  padding: 20px 40px;
  background: ${COLORS.form_background};
  text-align: left;
  box-shadow: 1.8px 2.4px 5px 0 ${COLORS.box_shadow};
`
export const Bar = styled.div`
  width: 645px;
  margin: auto;
  margin-top: 80px;
  height: 8px;
  background: ${COLORS.secondary};
`

// for Main.js
export const Title = styled.div`
  font-size: 18px;
  margin-top: 30px;
  margin-bottom: 10px;
  span {
    color: ${COLORS.warning};
  }
  p {
    font-size: 14px;
    margin: 2px 0;
  }
`
export const Input = styled.input`
  font-size: 14px;
  padding: 2px;
  color: ${COLORS.primary};
  border-radius: 0px;
  border: 1px solid ${COLORS.light_grey};
  outline: none;
`
export const Button = styled.button`
  display: block;
  margin: 40px 0 20px;
  font-size: 16px;
  padding: 10px 24px;
  background: ${COLORS.secondary};
  border: none;
  transition: all 0.2s;
  &:hover {
    background: ${COLORS.secondary}cc;
    cursor: pointer;
  }
`
export const Warning = styled.p`
  font-size: 14px;
  color: ${COLORS.warning};
  margin: 4px 0px;
`

// for Title.js
export const TitleH1 = styled.h1`
  font-size: 36px;
`
export const Desc = styled.p`
  font-size: 14px;
  line-height: 12px;
`
export const Required = styled(Desc)`
  color: ${COLORS.warning};
`
