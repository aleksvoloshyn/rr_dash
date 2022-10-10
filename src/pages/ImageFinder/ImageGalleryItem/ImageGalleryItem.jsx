import styles from './imageGalleryItem.module.scss'

const ImageGalleryItem = ({ src, altQuery }) => {
  return (
    <div className={styles.image}>
      <img
        src={src}
        alt={altQuery}
        className={styles.image}
        // imageStyle=""
        // preview
      />
    </div>
  )
}

export default ImageGalleryItem
