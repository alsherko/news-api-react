import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      {articles.map(article => (
        <Article
          key={`${article.url}_${article.publishedAt}_${article.source.name}`}
          article={article}
        />
      ))}
    </Fragment>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array,
}

export default ArticleList
