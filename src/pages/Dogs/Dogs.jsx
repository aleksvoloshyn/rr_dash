import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'
import { SelectButton } from 'primereact/selectbutton'
import { Dropdown } from 'primereact/dropdown'
import styles from './dogs.module.scss'

const Dogs = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState()
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list/all').then((response) => {
      Object.keys(response.data.message)
      setBreeds(Object.keys(response.data.message))
      setIsloading(false)
    })
  }, [])

  const handlerOnBreedSelect = (e) => {
    setSelectedBreed(e.target.value)
  }

  return (
    <>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <div>
          <form>
            <label className={styles.label}>
              <p className={styles.label}>Выберите породу собаки в списке</p>

              <SelectButton
                name="breed"
                value={selectedBreed}
                onChange={handlerOnBreedSelect}
                options={breeds}
              />
            </label>
            {/* <label className={styles.label}>
              <p className={styles.label}>Выберите породу собаки в списке</p>

              <Dropdown
                className={styles.select}
                name="breed"
                value={selectedBreed}
                onChange={handlerOnBreedSelect}
                options={breeds}
              />
            </label> */}

            <label>
              Выберите породу собаки в списке
              <select
                name="breed"
                value={selectedBreed}
                onChange={handlerOnBreedSelect}
              >
                {breeds.map((br, ind) => {
                  return (
                    <option key={ind} value={br}>
                      {br}
                    </option>
                  )
                })}
              </select>{' '}
            </label>
          </form>
        </div>
      )}
    </>
  )
}

export default Dogs
