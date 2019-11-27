import React, { useContext } from 'react'
import ArticleList from '../components/articles/ArticleList'
import Pagination from '../components/Pagination'
import { ArticleContext } from '../context/ArticleContext'
import { PAGE_SIZE } from '../constants'

const ArticleContainer = () => {
  const appContext = useContext(ArticleContext)
  const { articles, page, lastPage, setPage } = appContext

  return (
    <section>
      <ArticleList articles={articles} />
      <Pagination
        className="pagination-centered"
        page={page}
        pageSize={PAGE_SIZE}
        lastPage={lastPage}
        setPage={setPage}
      />
    </section>
  )
}

export default ArticleContainer
