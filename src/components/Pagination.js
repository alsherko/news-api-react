import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

const Pagination = ({
  page,
  pageSize,
  lastPage,
  setPage,
  className,
  scrollToTop,
}) => {
  return (
    <div className={`pagination ${className}`}>
      <span>{`${pageSize} per page`}</span>
      <input
        className="pagination__input"
        type="number"
        min="1"
        max={lastPage}
        value={page}
        onChange={event => {
          const value = event.target.value
          setPage(value > lastPage ? lastPage : value < 1 ? 1 : value)
        }}
      />
      <span>{`/ ${lastPage}`}</span>
      <span className="pagination__buttons">
        <button
          className="pagination__button-left"
          onClick={() => {
            setPage(parseInt(page) - 1)
            scrollToTop && window.scrollTo(0, 0)
          }}
          disabled={page < 2}
        >
          &laquo;
        </button>
        <button
          className="pagination__button-right"
          onClick={() => {
            setPage(parseInt(page) + 1)
            scrollToTop && window.scrollTo(0, 0)
          }}
          disabled={page > lastPage - 1}
        >
          &raquo;
        </button>
      </span>
    </div>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  lastPage: PropTypes.number,
  setPage: PropTypes.func,
  className: PropTypes.string,
  scrollToTop: PropTypes.bool,
}

export default Pagination
