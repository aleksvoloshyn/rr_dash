import { Routes, Route } from 'react-router-dom'

import ReactClass from '../../pages/ReactClass'
import Forms from '../../pages/Forms'
import Dogs from '../../pages/Dogs'
import NotFoundPage from '../../pages/NotFoundPage'
import Home from '../../pages/Home'
import Famillytree from '../../pages/Famillytree/Famillytree'
import ImageFinder from '../../pages/ImageFinder'
import Norris from '../../pages/Norris'
import ToDoList from '../../pages/ToDoLIst/ToDoList'

import styles from './board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="React_class" element={<ReactClass initialValue={0} />} />

        <Route path="Tree_PrimeReact" element={<Famillytree />} />
        <Route path="Image_Finder" element={<ImageFinder />} />
        <Route path="Dogs" element={<Dogs />} />
        <Route path="Chuck_Norris" element={<Norris />} />
        <Route path="ToDoList" element={<ToDoList />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
