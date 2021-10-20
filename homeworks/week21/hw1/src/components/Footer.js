import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.text_title};
  background: ${({ theme }) => theme.page};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.func};
    transition: ease 0.2s;
    &:hover {
      color: ${({ theme }) => theme.func_hover};
    }
  }
`
export default function Footer() {
  return (
    <FooterContainer>
      © Copyright 2021. Made by {'  '}
      <a
        href='https://github.com/jackielin7789978'
        target='_blank'
        rel='noreferrer'
      >
        Jackie Lin
      </a>
    </FooterContainer>
  )
}
