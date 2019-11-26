import React from 'react'
import PropTypes from 'prop-types'
import './Article.css'

const Article = ({ article }) => {
  const date = new Date(article.publishedAt)
  return (
    <article className="article">
      <h3 className="article__title">
        <a href={article.url}>{article.title}</a>
      </h3>
      {(article.author || article.publishedAt) && (
        <summary className="article__description">
          <p>{article.description}</p>
          {article.author && (
            <span className="article__author">{article.author}</span>
          )}
          {article.publishedAt && <time>{date.toLocaleString()}</time>}
        </summary>
      )}
      {article.content && <p className="article__content">{article.content}</p>}
      {article.urlToImage && (
        <figure className="article__figure">
          <img src={article.urlToImage} alt="" />
        </figure>
      )}
    </article>
  )
}

Article.propTypes = {
  article: PropTypes.object,
}

export default Article
