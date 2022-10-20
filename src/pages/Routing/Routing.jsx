import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Contacts from './Contacts/Contacts'
import About from './About/About'
import styles from './routing.module.scss'

const Routing = () => {
  return (
    <div>
      routing
      <Link to="About">ABOUT</Link>
      <Link to="Contacts">CONTACTS</Link>
      <Outlet />
    </div>
  )
}

export default Routing
