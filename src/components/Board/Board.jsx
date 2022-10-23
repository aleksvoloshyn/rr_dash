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
import Stylization from '../../pages/Stylization'
import Routing from '../../pages/Routing'
import Moviesearch from '../../pages/Moviesearch'
// import Contacts from '../../pages/Routing/Contacts/Contacts'

import styles from './board.module.scss'

const Board = () => {
  return (
    <div className={styles.board}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/react_class" element={<ReactClass initialValue={0} />} />
        <Route path="/stylization" element={<Stylization />} />
        <Route path="/routing/*" element={<Routing />} />
        {/* <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} /> */}
        {/* </Route> */}

        <Route path="/tree_primeReact" element={<Famillytree />} />
        <Route path="/image_finder" element={<ImageFinder />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/chuck_norris" element={<Norris />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/moviesearch/*" element={<Moviesearch />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default Board
