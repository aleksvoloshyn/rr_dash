// import { Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from './imageGalleryItem.module.scss'

const ImageGalleryItem = ({ src, srcBig, altQuery }) => {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div className={styles.image}>
      <img
        src={src}
        alt={altQuery}
        className={styles.image}
        // imageStyle=""
        onClick={() => setLgShow(true)}
      />

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {' '}
          <img
            src={srcBig}
            alt={altQuery}
            // className={styles.image}
            // imageStyle=""
            onClick={() => setLgShow(true)}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ImageGalleryItem
