import './todo.css'
import { useState } from 'react'
import { Radio, Checkbox, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { todoToggled, todoDeleted, todoEdited } from './todosSlice'

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const [inputVal, setInputVal] = useState(todo.taskname)
  const [isEditing, setIsEditing] = useState(false)

  const handleToggle = (e) => {
    dispatch(todoToggled({ id: todo.id, isDone: e.target.checked }))
  }

  const handleDelete = () => {
    dispatch(todoDeleted({ id: todo.id }))
  }

  const handelEdit = () => {
    setIsEditing(false)
    dispatch(todoEdited({ id: todo.id, taskname: inputVal }))
  }

  return (
    <div className='todo-container'>
      <Checkbox onChange={handleToggle} checked={todo.isDone} />
      {isEditing ? (
        <Input
          className='taskname'
          onPressEnter={handelEdit}
          onChange={(e) => setInputVal(e.target.value)}
          size='small'
          value={inputVal}
        />
      ) : (
        <div
          className={todo.isDone ? 'taskname-done' : 'taskname'}
          onClick={() => setIsEditing(true)}
        >
          {todo.taskname}
        </div>
      )}
      <Radio.Group>
        <Radio.Button disabled={todo.isDone} onClick={handleDelete}>
          Delete
        </Radio.Button>
      </Radio.Group>
    </div>
  )
}
