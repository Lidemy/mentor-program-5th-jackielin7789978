import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../constants/style'
import styled from 'styled-components'
import Todo from './Todo'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const MainArea = styled.div`
  min-height: calc(100vh - 50px);
  padding-top: 120px;
  padding-bottom: 20px;
  position: relative;
  background: ${({ theme }) => theme.page};
`
const Card = styled.div`
  width: 600px;
  min-height: 200px;
  background: ${({ theme }) => theme.card};
  box-shadow: 1px 4px 10px 1px ${({ theme }) => theme.shadow};
  border-radius: 2px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`
const InputArea = styled.div`
  width: 100%;
  border: 1px solid transparent;
  margin-top: 20px;
`
const Title = styled.h2`
  padding: 20px 0px;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_title};
`
const InputForm = styled.form`
  display: flex;
  justify-content: center;
`
const Input = styled.input`
  box-sizing: border-box;
  padding: 6px;
  font-size: 20px;
  font-family: 'Maven Pro', sans-serif;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary_highlight};
  border: none;
  margin-right: 18px;
  border-bottom: 1px solid transparent;
  border-radius: 0px;
  transition: linear 0.2s;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.border_bottom};
  }
`
const Submit = styled.button`
  color: ${({ theme }) => theme.text_submit};
  font-family: 'Roboto', sans-serif;
  padding: 8px 20px;
  background: ${({ theme }) => theme.func};
  font-size: 18px;
  transition: all linear 0.2s;
  &:hover {
    background: ${({ theme }) => theme.func_hover};
  }
`
const TodoArea = styled.ul`
  width: 70%;
  margin: 20px auto;
  position: relative;
  right: 30px;
`
const FilterBTNContainer = styled.div`
  display: ${({ todos }) => (todos.length ? 'flex' : 'none')};
  align-items: center;
  margin: 10px auto;
  font-size: 14px;
`
const FilterBTN = styled.button`
  margin: 0 4px;
  padding: 8px 16px;
  border-radius: 2px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.btn_grey};
  border: none;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.func_transparent};
  }
`
const FilterInfo = styled.div`
  padding: 8px 16px;
  color: ${({ theme }) => theme.text_primary}; ;
`
const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.func};
  position: absolute;
  top: 20px;
  right: 24px;
  cursor: pointer;
`
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

let id = 3
export default function App() {
  const [theme, setTheme] = useState(true)
  const [filter, setFilter] = useState('ALL')
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([
    {
      id: 1,
      taskname: '吃早餐',
      isDone: false,
      isBeingEdited: false
    },
    {
      id: 2,
      taskname: '吃午餐',
      isDone: false,
      isBeingEdited: false
    }
  ])

  const handleInputSubmit = (e) => {
    e.preventDefault()
    if (inputVal === '') {
      alert('Please enter a task!')
      return
    }
    setTodos([
      {
        id,
        taskname: inputVal,
        isDone: false
      },
      ...todos
    ])
    setInputVal('')
    id++
  }
  const handleClearCompleted = () => {
    const data = todos.filter((todo) => {
      return todo.isDone === false
    })
    setTodos(data)
  }

  return (
    <ThemeProvider theme={theme ? Theme.dark : Theme.light}>
      <MainArea>
        <Circle
          onClick={() => {
            setTheme(!theme)
          }}
        >
          {theme ? (
            <Icon icon={faMoon} />
          ) : (
            <Icon icon={faSun} style={{ color: '#fff' }} />
          )}
        </Circle>
        <Card>
          <InputArea>
            <Title>TODO</Title>
            <InputForm onSubmit={handleInputSubmit}>
              <Input
                type='text'
                autoFocus={true}
                placeholder='Add a task here...'
                value={inputVal}
                onChange={(e) => {
                  setInputVal(e.target.value)
                }}
              />
              <Submit type='submit' variant='contained'>
                ADD
              </Submit>
            </InputForm>
          </InputArea>
          <TodoArea>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                filter={filter}
              />
            ))}
          </TodoArea>
          <FilterBTNContainer todos={todos}>
            <FilterInfo>{filter}</FilterInfo>
            <FilterBTN
              onClick={() => {
                setFilter('ALL')
                setTodos(todos)
              }}
            >
              all
            </FilterBTN>
            <FilterBTN
              onClick={() => {
                setFilter('ACTIVE')
                setTodos(todos)
              }}
            >
              active
            </FilterBTN>
            <FilterBTN
              onClick={() => {
                setFilter('COMPLETED')
                setTodos(todos)
              }}
            >
              completed
            </FilterBTN>
            <FilterBTN onClick={handleClearCompleted}>
              clear completed
            </FilterBTN>
          </FilterBTNContainer>
        </Card>
      </MainArea>
      <Footer />
    </ThemeProvider>
  )
}
