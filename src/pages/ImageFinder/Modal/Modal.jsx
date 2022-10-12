import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'

const modalRoot = document.querySelector('#modal-root')

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
  }, [])

  const handleClose = () => {
    window.removeEventListener('keydown', handleKeyDown)
    onClose()
  }

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      handleClose()
    }
  }

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose()
    }
  }

  return createPortal(
    <div className={styles.Modal__overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal__content}>{children}</div>
    </div>,
    modalRoot
  )
}

export default Modal
