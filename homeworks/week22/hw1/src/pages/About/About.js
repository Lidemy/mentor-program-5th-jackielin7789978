/* eslint-disable no-unused-vars */
import about from '../../pics/about.jpg'
import { PageWrapper, Title, LOGO, IMG, Desc } from './styled'

export default function About() {
  return (
    <PageWrapper>
      <Title>
        Creator of <LOGO>BLOGG</LOGO>
      </Title>
      <IMG src={about} alt='about me' />
      <Desc>
        Hi, I'm Jackie.
        <br />
        This is a blog I built using React.
        <br />
        Click{' '}
        <a
          href='https://github.com/jackielin7789978/react-blog'
          target='_blank'
          rel='noreferrer'
        >
          here
        </a>{' '}
        to check it out on GitHub.
        <br />
      </Desc>
    </PageWrapper>
  )
}
