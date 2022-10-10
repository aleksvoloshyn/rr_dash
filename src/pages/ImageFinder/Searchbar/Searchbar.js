import { queryAllByAltText } from '@testing-library/react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import styles from './searchbar.module.scss'

const SearchBar = ({ onChangeHandler, query, onClickHandler }) => {
  return (
    <header className={styles.header}>
      <div className={styles.centered}>
        <InputGroup className="mb-3">
          <Button
            type="submit"
            variant="light"
            id="button-addon1"
            onClick={onClickHandler}
          >
            🏸
          </Button>
          <Form.Control
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Search images "
            onChange={onChangeHandler}
          />
        </InputGroup>
      </div>
    </header>
  )
}

export default SearchBar
