import Title from './Title'
import Main from './Main'
import { Page, Form, Bar } from './styledComponents'

function App() {
  return (
    <div className='App'>
      <Page>
        <Bar />
        <Form>
          <Title></Title>
          <Main></Main>
        </Form>
      </Page>
    </div>
  )
}
export default App
