import styled from 'styled-components'
import PropTypes from 'prop-types'
import EditForm from './EditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const TodoItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px 10px 10px;
  border-bottom: 1px solid transparent;
  transition: all 0.1s;
  &:hover {
    transform: translate(1px, 1px);
    cursor: pointer;
    border-bottom: 1px solid ${({ theme }) => theme.border_bottom};
  }
  ${({ isDone }) =>
    isDone &&
    `      
      background: ${({ theme }) => theme.checked};
    `}
  ${({ isDone, filter }) =>
    isDone &&
    filter === 'ACTIVE' &&
    `
      display: none;
    `}
  ${({ isDone, filter }) =>
    !isDone &&
    filter === 'COMPLETED' &&
    `
      display: none;
    `}
`
const Taskname = styled.div`
  flex: 1;
  font-size: 20px;
  font-family: 'Maven Pro', sans-serif;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: ${(props) => (props.isDone ? 'line-through' : 'none')};
`
const Edit = styled(FontAwesomeIcon)`
  cursor: pointer;
  margin-right: 16px;
  transition: all 0.1s;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  &:hover {
    color: ${({ theme }) => theme.text_primary_highlight};
    transform: translate(1px, 1px);
  }
`
const Remove = styled(Edit)`
  margin-right: unset;
`
const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: ${({ $isDone }) => ($isDone ? '1px' : '2px')} solid
    ${({ theme }) => theme.checkbox};
  border-radius: 2px;
  margin-right: 10px;
  position: relative;
  div {
    opacity: ${({ $isDone }) => ($isDone ? 1 : 0)};
    width: 13px;
    height: 13px;
    background: ${({ theme }) => theme.func};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default function Todo({ todo, todos, setTodos, filter }) {
  const handleStartEdit = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        // 不能編輯已完成的 todo
        if (todo.isDone) return todo
        return {
          ...todo,
          isBeingEdited: true
        }
      })
    )
  }
  const handleCheckboxChange = (id) => {
    // 打勾時自動排序，已完成的排後面
    setTodos(
      todos
        .map((todo) => {
          if (todo.id !== id) return todo
          return {
            ...todo,
            isDone: !todo.isDone
          }
        })
        .sort((a, b) => {
          return a.isDone - b.isDone
        })
    )
  }
  const handleRemove = (id) => {
    const data = todos.filter((todo) => {
      return id !== todo.id
    })
    setTodos(data)
  }
  return (
    <TodoItem isDone={todo.isDone} filter={filter}>
      <Checkbox
        $isDone={todo.isDone}
        onClick={() => {
          handleCheckboxChange(todo.id)
        }}
      >
        <div></div>
      </Checkbox>
      {!todo.isBeingEdited && (
        <Taskname isDone={todo.isDone}>{todo.taskname}</Taskname>
      )}
      {todo.isBeingEdited && (
        <EditForm todo={todo} todos={todos} setTodos={setTodos} />
      )}
      {!todo.isBeingEdited && (
        <Edit
          icon={faEdit}
          onClick={() => {
            handleStartEdit(todo.id)
          }}
        />
      )}
      <Remove
        icon={faTrashAlt}
        onClick={() => {
          handleRemove(todo.id)
        }}
      />
    </TodoItem>
  )
}

Todo.propTypes = {
  todo: PropTypes.object,
  hadleRemove: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  filter: PropTypes.string
}
