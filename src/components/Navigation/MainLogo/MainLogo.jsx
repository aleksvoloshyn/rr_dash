import { NavLink } from 'react-router-dom'
import styles from './mainlogo.module.scss'
import logo from './../../../images/logo.png'

const MainLogo = () => {
  return (
    <NavLink to="/" className={styles.link}>
      {' '}
      <div className={styles.mainLogo}>
        <img src={logo} alt="logo" className={styles.mainLogoLogo} />
        <h1 className={styles.mainLogoTitle}>ALEX</h1>
      </div>
    </NavLink>
  )
}

export default MainLogo
