import React from 'react'
import './Pagination.css'

const Pagination = ({ page, pageSize, lastPage, setPage }) => {
  return (
    <div className="pagination">
      <span>{`${pageSize} per page`}</span>
      <input
        className="pagination__input"
        type="number"
        min="1"
        max={lastPage}
        value={page}
        onChange={event => setPage(parseInt(event.target.value))}
      />
      <span>{`/ ${lastPage}`}</span>
      <span className="pagination__buttons">
        <button
          className="pagination__button-left"
          onClick={() => setPage(parseInt(page) - 1)}
        >
          &laquo;
        </button>
        <button
          className="pagination__button-right"
          onClick={() => setPage(parseInt(page) + 1)}
        >
          &raquo;
        </button>
      </span>
    </div>
  )
}

export default Pagination
