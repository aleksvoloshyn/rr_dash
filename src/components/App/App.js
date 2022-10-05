// import './App.css'
import { Routes, Route } from 'react-router-dom'
import styles from './app.module.scss'
import React from 'react'
import Container from '../Container/Container'
import Navigation from '../Navigation'
import Toolbar from '../Toolbar'
import Board from '../Board'
import Cv from '../../pages/Cv'

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="Cv" element={<Cv />}></Route>

        <Route
          path="*"
          element={
            <div className={styles.wrapper}>
              <Navigation />
              <div className={styles.toolsWithBoard}>
                <Toolbar />
                <Board />
              </div>
            </div>
          }
        ></Route>
      </Routes>
    </Container>
  )
}

export default App
