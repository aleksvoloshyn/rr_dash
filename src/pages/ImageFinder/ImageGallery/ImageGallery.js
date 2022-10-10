import PageContainer from '../../PageContainer/Container'
import ImageGalleryItem from '../ImageGalleryItem'
import { Button } from 'primereact/button'
import styles from './imageGallery.module.scss'

const ImageGallery = ({ loadMoreHandler, data }) => {
  return (
    <PageContainer>
      <div className={styles.imagesWrapper}>
        <ul className={styles.gallery}>
          {data.map((item, ind) => {
            return (
              <ImageGalleryItem
                key={ind}
                src={item.webformatURL}
                altQuery={item.tags}
              />
            )
          })}
        </ul>
        {data.length > 0 && (
          <Button
            label="Load more"
            className="p-button-info"
            width="60"
            onClick={loadMoreHandler}
          />
        )}
      </div>
    </PageContainer>
  )
}

export default ImageGallery
