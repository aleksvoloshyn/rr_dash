import { useState, useEffect } from 'react'

import SearchBar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery'
import PageContainer from '../PageContainer/Container'
import { ToastContainer, toast } from 'react-toastify'
import { Circles } from 'react-loader-spinner'
import { getImages } from '../../servises/imageFinderApi'

import 'react-toastify/dist/ReactToastify.css'

const ImageFinder = () => {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getImages(query, page).then((res) => {
      setImages((pr) => [...pr, ...res])
    })
  }, [page])

  const notify = () => toast('please enter your request!')

  const onChangeHandler = (e) => {
    return setQuery(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const inputValue = e.currentTarget.elements.val.value
    if (inputValue === '') {
      notify()
    }
    setIsLoading(true)
    setQuery(inputValue)
    getImages(inputValue, page)
      .then((res) => {
        setImages(res)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loadMoreHandler = () => {
    setIsLoading(true)
    setPage((p) => p + 1)
    setIsLoading(false)
    // getImages(query, page)
    //   .then((res) => {
    //     setPage((p) => p + 1)
    //     return res
    //   })
    //   .then((res) => {
    //     return setImages((pr) => [...pr, ...res])
    //   })
  }

  return (
    <>
      <PageContainer>
        <SearchBar
          query={query}
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          value={query}
        />

        {query.length !== 0 && (
          <ImageGallery
            data={images}
            altQuery={query}
            loadMoreHandler={loadMoreHandler}
            value={query}
          />
        )}
        {isLoading && (
          <Circles
            height="180"
            width="180"
            radius="48"
            color="salmon"
            ariaLabel="circles-loading"
            wrapperStyle={{ justifyContent: 'center', paddingTop: '20px' }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </PageContainer>{' '}
    </>
  )
}

export default ImageFinder
