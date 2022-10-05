import styles from './cv.module.scss'

import { useNavigate } from 'react-router-dom'

import { Button } from 'primereact/button'
import './../../styles/ButtonDemo.css'

const Cv = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.template}>
      <Button
        onClick={() => navigate('/')}
        icon="pi pi-home"
        className="p-button-raised p-button-danger p-button-text"
        aria-label="Home"
      />
      <h2>CV</h2>
    </div>
  )
}

export default Cv
