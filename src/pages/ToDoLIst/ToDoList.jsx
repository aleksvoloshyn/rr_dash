import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './todolist.module.scss'
const ToDoList = () => {
  const [toDoInput, setToDoInput] = useState('')
  const [toDoItems, setToDoItems] = useState([])

  const handlerOnChange = (e) => {
    setToDoInput(e.target.value)
  }

  const addHandler = () => {
    if (toDoInput !== '') {
      setToDoItems([toDoInput, ...toDoItems])
      setToDoInput('')
    }
  }
  return (
    <div className={styles.todolist}>
      <h1 className={styles.todoTitle}>TO-DO list APP</h1>
      <div className={styles.addTodo}>
        <input
          type="text"
          placeholder="add to-do here"
          name="todo"
          value={toDoInput}
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
            {toDoItems.map((item) => {
              return (
                <li key={uuidv4()}>
                  <input type="checkbox" />
                  {item}
                  <button>edit</button>
                  <button>delete</button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.done}>
          {' '}
          <h2>done</h2>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
