import React, { Fragment, useContext } from 'react'
import ArticleList from '../components/articles/ArticleList'
import Pagination from '../components/Pagination'
import Loader from '../components/Loader'
import { ArticleContext } from '../context/ArticleContext'
import { PAGE_SIZE } from '../constants'

const ArticleContainer = () => {
  const appContext = useContext(ArticleContext)
  const {
    articles,
    page,
    lastPage,
    setPage,
    hasErrored,
    isLoading,
    errorMessage,
  } = appContext

  return (
    <section>
      {isLoading && <Loader />}
      {hasErrored && (
        <Fragment>
          <p> Sorry an error occured while loading the articles. </p>
          <p> {`${errorMessage}`} </p>
        </Fragment>
      )}

      {!isLoading && !hasErrored && (
        <Fragment>
          <ArticleList articles={articles} />
          <Pagination
            className="pagination-centered"
            page={page}
            pageSize={PAGE_SIZE}
            lastPage={lastPage}
            setPage={setPage}
          />
        </Fragment>
      )}
    </section>
  )
}

export default ArticleContainer
