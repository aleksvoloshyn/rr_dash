import { useState, useEffect } from 'react'
import SearchBar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery'
import PageContainer from '../PageContainer/Container'

import { getImages } from '../../servises/imageFinderApi'

const ImageFinder = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('badminton')
  const [page, setPage] = useState(1)
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getImages(query)
      .then((res) => {
        setImages(res)
        // console.log(res)
      })
      .finally(() => {
        // setIsLoading(true)
      })
  }, [])

  useEffect(() => {
    getImages(query, page).then((res) => {
      setImages(images.concat(res))
    })
  }, [page])

  const loadImages = () => {
    if (query.length === 0) {
      alert('input request')
      return
    }
    getImages(query, page).then((res) => {
      setImages(res)
      console.log(res)
    })
  }

  const onChangeHandler = (e) => {
    setQuery(e.target.value)
  }

  const onClickHandler = () => {
    loadImages()
    const inp = document.querySelector(
      "input[aria-label='Example text with button addon']"
    )
    inp.value = ''
  }

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <PageContainer>
      <SearchBar
        query={query}
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
      />
      {/* {isLoading && <ImageGallery data={images} />} */}
      <ImageGallery
        data={images}
        altQuery={query}
        loadMoreHandler={loadMoreHandler}
      />
    </PageContainer>
  )
}

export default ImageFinder
