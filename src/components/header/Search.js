import React, { useContext, useRef } from 'react'
import PropTypes from 'prop-types'
import { ArticleContext } from '../../context/ArticleContext'
import { WAIT_INTERVAL } from '../../constants'
import './Search.css'

const Search = () => {
  const appContext = useContext(ArticleContext)
  const { setSearchValue } = appContext
  const searchInputRef = useRef(null)
  let timer = null

  const handleChange = event => {
    clearTimeout(timer)
    const searchValue = event.target.value
    timer = setTimeout(() => {
      setSearchValue(searchValue)
    }, WAIT_INTERVAL)
  }

  const onSubmit = event => {
    event.preventDefault()
    clearTimeout(timer)
    setSearchValue(searchInputRef.current.value)
  }

  return (
    <section className="search" role="search">
      <form onSubmit={onSubmit}>
        <fieldset>
          <label htmlFor="search" className="search__label">
            <i className="material-icons search__icon">search</i>
            <input
              ref={searchInputRef}
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
