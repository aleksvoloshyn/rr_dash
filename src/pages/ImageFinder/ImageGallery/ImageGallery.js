import PageContainer from '../../PageContainer/Container'
import ImageGalleryItem from '../ImageGalleryItem'
import { Button } from 'primereact/button'
import { v4 as uuidv4 } from 'uuid'
import styles from './imageGallery.module.scss'

const ImageGallery = ({ loadMoreHandler, data }) => {
  return (
    <PageContainer>
      <div className={styles.imagesWrapper}>
        <ul className={styles.gallery}>
          {data.map((item, ind) => {
            return (
              <span className={styles.cardItem} key={uuidv4()}>
                <ImageGalleryItem
                  src={item.webformatURL}
                  altQuery={item.tags}
                  srcBig={item.largeImageURL}
                />
              </span>
            )
          })}
        </ul>
        {data.length > 0 && (
          <div className={styles.fixedDiv}>
            {' '}
            <Button
              label="Load more"
              className="p-button-info"
              width="60"
              onClick={loadMoreHandler}
            />
          </div>
        )}
      </div>
    </PageContainer>
  )
}

export default ImageGallery
