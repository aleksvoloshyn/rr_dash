import { Routes, Route } from 'react-router-dom'

import ReactClass from '../../pages/ReactClass'
import Forms from '../../pages/Forms'
import Dogs from '../../pages/Dogs'
import NotFoundPage from '../../pages/NotFoundPage'
import Home from '../../pages/Home'
import Famillytree from '../../pages/Famillytree/Famillytree'

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
        <Route path="Dogs" element={<Dogs />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
