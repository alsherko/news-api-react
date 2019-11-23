import React from 'react'
import PropTypes from 'prop-types'
import { WAIT_INTERVAL } from '../../constants'
import './Search.css'

const Search = ({ setSearchValue }) => {
  let timer = null

  const handleChange = event => {
    clearTimeout(timer)
    const searchValue = event.target.value
    timer = setTimeout(() => {
      setSearchValue(searchValue)
    }, WAIT_INTERVAL)
  }

  const onSubmit = event => {
    clearTimeout(timer)
    const searchValue = event.target.querySelector('.search__label input')
    setSearchValue(searchValue)
    event.preventDefault()
  }

  return (
    <section className="search" role="search">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="search" className="search__label">
            <i className="material-icons search__icon">search</i>
            <input
              type="search"
              placeholder="Search..."
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </form>
    </section>
  )
}

Search.propTypes = {
  setSearchValue: PropTypes.func,
}

export default Search
