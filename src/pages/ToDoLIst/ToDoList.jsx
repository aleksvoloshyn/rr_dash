import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../Modal/Modal'
import styles from './todolist.module.scss'

const items = [
  { text: 'learn REDUX', isDone: false },
  { text: 'learn REDUX-toolkit', isDone: false },
  { text: 'learn ASYNC/AWAIT', isDone: true },
]

const ToDoList = () => {
  const [todoInput, setTodoInput] = useState('')
  const [editedInput, setEditedInput] = useState('')
  const [currentIndex, setCurrentIndex] = useState(null)

  const [toDoItems, setToDoItems] = useState(items)
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  // input todo value handler
  const handlerOnChange = (e) => {
    setTodoInput(e.target.value)
  }

  // add new todo handler
  const addHandler = () => {
    if (todoInput !== '') {
      setToDoItems([{ text: todoInput, isDone: false }, ...toDoItems])
      setTodoInput('')
    }
  }

  // on checkbox isDone handler
  const onCheckboxChange = (index) => {
    const checked = toDoItems.map((item, i) => {
      if (i === index) {
        return { ...item, isDone: !item.isDone }
      } else {
        return item
      }
    })
    setToDoItems(checked)
  }

  // on delete click handler
  const onDeleteHandler = (ind) => {
    const deleted = toDoItems.filter((todo, i) => {
      return i !== ind
    })
    setToDoItems(deleted)
  }
  // on edit click handler
  const onEditHandler = (ind) => {
    setCurrentIndex(ind)
    toggleModal()
    return toDoItems.map((item, i) => {
      if (i === ind) {
        setEditedInput(item.text)
      }
    })
  }
  // on editInputChange click handler
  const onEditInputChange = (e) => {
    setEditedInput(e.target.value)
  }
  // on saveChanges click handler
  const onSaveChangesHandler = () => {
    console.log(currentIndex)
    const checked = toDoItems.map((item, i) => {
      if (i === currentIndex) {
        return { ...item, text: editedInput }
      } else {
        return item
      }
    })
    setToDoItems(checked)
    toggleModal()
  }

  return (
    <div className={styles.todolist}>
      {showModal && (
        <Modal onClose={toggleModal}>
          <div>
            <div className={styles.addTodo}>
              <input
                type="text"
                name="todo"
                value={editedInput}
                onChange={onEditInputChange}
              />

              <button type="button" onClick={onSaveChangesHandler}>
                Save changes
              </button>
            </div>
          </div>
        </Modal>
      )}
      <h1 className={styles.todoTitle}>TO-DO list APP</h1>
      <div className={styles.addTodo}>
        <input
          type="text"
          placeholder="add to-do here"
          name="todo"
          value={todoInput}
          onChange={handlerOnChange}
        />

        <button type="button" onClick={addHandler}>
          Add to-do
        </button>
      </div>

      <div className={styles.todoWrapper}>
        <div className={styles.todo}>
          <h2>To-Do</h2>
          <ul>
            {toDoItems.map((todo, ind) => {
              return (
                !todo.isDone && (
                  <li key={uuidv4()}>
                    <input
                      type="checkbox"
                      checked={todo.isDone}
                      onChange={() => onCheckboxChange(ind)}
                    />
                    {todo.text}
                    <button type="button" onClick={() => onEditHandler(ind)}>
                      edit
                    </button>
                    <button type="button" onClick={() => onDeleteHandler(ind)}>
                      delete
                    </button>
                  </li>
                )
              )
            })}
          </ul>
        </div>

        <div className={styles.done}>
          {' '}
          <h2>done</h2>
          <ul>
            {toDoItems.map((todo, ind) => {
              return (
                todo.isDone && (
                  <li key={uuidv4()}>
                    {' '}
                    <input
                      type="checkbox"
                      checked={todo.isDone}
                      onChange={() => onCheckboxChange(ind)}
                    />
                    {todo.text}
                    <button type="button" onClick={() => onDeleteHandler(ind)}>
                      delete
                    </button>
                  </li>
                )
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
