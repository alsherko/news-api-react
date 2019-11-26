import React, { useContext } from 'react'
import Article from './Article'
import { ArticleContext } from '../../context/ArticleContext'
import './ArticleList.css'

const ArticleList = () => {
  const appContext = useContext(ArticleContext)
  const { articles } = appContext

  return (
    <section className="article-list">
      {articles.map(article => (
        <Article
          key={`${article.url}_${article.publishedAt}_${article.source.name}`}
          article={article}
        />
      ))}
    </section>
  )
}

export default ArticleList
