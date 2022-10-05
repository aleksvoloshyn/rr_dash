import { Routes, Route } from 'react-router-dom'
import Template from '../../pages/Template'
import Calendar from '../../pages/Calendar'
import NotFoundPage from '../../pages/NotFoundPage'
import Home from '../../pages/Home'
import Famillytree from '../../pages/Famillytree/Famillytree'
// import Cv from '../../pages/Cv'
import styles from './board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Famillytree" element={<Famillytree />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Template" element={<Template />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
