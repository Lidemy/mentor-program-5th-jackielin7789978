import './todo.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoAdded, removeCompleted } from './todosSlice'
import { Affix, Dropdown, Menu, Input, Space, Button } from 'antd'
import { DeleteOutlined, DownOutlined } from '@ant-design/icons'
import TodoItem from './TodoItem'
import { hasCompleted } from '../utils'

export default function Todo() {
  const [inputVal, setInputVal] = useState('')
  const [currentFilter, setCurrentFilter] = useState('Show All')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const idToUse = todos.length ? todos[0].id + 1 : 1

  const onSubmitTodo = () => {
    if (!inputVal) return alert('Please enter a taskname')
    dispatch(todoAdded(idToUse, inputVal))
    setInputVal('')
  }

  const menu = (
    <Menu>
      <Menu.Item key='1' onClick={() => setCurrentFilter('Show All')}>
        Show All
      </Menu.Item>
      <Menu.Item key='2' onClick={() => setCurrentFilter('Show Active')}>
        Show Active
      </Menu.Item>
      <Menu.Item key='3' onClick={() => setCurrentFilter('Show Completed')}>
        Show Completed
      </Menu.Item>
    </Menu>
  )

  const filteredTodos = todos.filter((todo) => {
    switch (currentFilter) {
      case 'Show Active':
        return todo.isDone === false
      case 'Show Completed':
        return todo.isDone === true
      default:
        return todo
    }
  })

  const filterMenuClassName = todos.length
    ? 'filter-menu'
    : 'filter-menu-hidden'

  return (
    <div className='container'>
      <Affix offsetTop={30} className={filterMenuClassName}>
        <Dropdown overlay={menu}>
          <Button type='primary'>
            {currentFilter} <DownOutlined />
          </Button>
        </Dropdown>
      </Affix>
      <Space direction='vertical' size='large' style={{ width: '100%' }}>
        <div>
          <div className='title'>
            <div>TO DO</div>
            {hasCompleted(todos) && (
              <Button
                type='ghost'
                icon={<DeleteOutlined />}
                onClick={() => dispatch(removeCompleted())}
              >
                Remove Completed
              </Button>
            )}
          </div>
          <Input
            placeholder='Enter a task...'
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onPressEnter={onSubmitTodo}
          />
        </div>
        <Space
          className='todo-table'
          direction='vertical'
          size='middle'
          style={{ width: '100%' }}
        >
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </Space>
      </Space>
    </div>
  )
}
