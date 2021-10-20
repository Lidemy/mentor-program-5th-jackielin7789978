import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0;
`
const FormInput = styled.input`
  font-size: 20px;
  font-family: 'Maven Pro', sans-serif;
  color: ${({ theme }) => theme.text_primary_edit};
  background: ${({ theme }) => theme.page};
  padding: 4px;
  border: none;
  border-radius: 2px;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
`
const Done = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 20px;
  transition: all 0.1s;
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    color: ${({ theme }) => theme.text_primary_highlight};
    transform: translate(1px, 1px);
  }
`

export default function EditForm({ todo, todos, setTodos }) {
  const [newInputVal, setNewInputVal] = useState(todo.taskname)
  const handleEdit = (id, input) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          taskname: input,
          isBeingEdited: false
        }
      })
    )
  }
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        handleEdit(todo.id, newInputVal)
      }}
    >
      <FormInput
        autoFocus
        value={newInputVal}
        onChange={(e) => {
          setNewInputVal(e.target.value)
        }}
      />
      <Done
        icon={faCheckSquare}
        onClick={() => {
          handleEdit(todo.id, newInputVal)
        }}
      />
    </Form>
  )
}
