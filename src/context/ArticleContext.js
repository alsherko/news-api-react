import React, { useState, useEffect } from 'react'
import { API, API_KEY, PAGE_SIZE } from '../constants'

const ArticleContext = React.createContext()

const ArticleProvider = props => {
  const [searchValue, setSearchValue] = useState('')
  const [source, setSource] = useState('')
  const [language, setLanguage] = useState('en')
  const [sortBy, setSortBy] = useState('publishedAt')
  const [page, setPage] = useState(1)

  const [isLoading, setIsLoading] = useState(false)
  const [hasErrored, setHasErrored] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [articles, setArticles] = useState([])

  const fetchArticle = async url => {
    setIsLoading(true)

    try {
      const articleData = await fetch(url)
      const { status, articles, message } = await articleData.json()
      if (status === 'ok') {
        setArticles(articles)
      } else {
        setHasErrored(true)
        setErrorMessage(message)
      }
    } catch (e) {
      if (e) {
        setHasErrored(true)
        setErrorMessage(e.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const endpoint = searchValue.trim() === '' ? 'top-headlines' : 'everything'
    const url = new URL(`${API}${endpoint}`),
      params = {
        q: searchValue,
        sources: source,
        language,
        sortBy,
        apiKey: API_KEY,
        pageSize: PAGE_SIZE,
        page,
      }
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    )
    fetchArticle(url)
  }, [searchValue, source, language, sortBy, page])

  return (
    <ArticleContext.Provider
      value={{
        sortBy,
        page,
        isLoading,
        hasErrored,
        errorMessage,
        articles,
        setSortBy,
        setPage,
        setSearchValue,
        setSource,
        setLanguage,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  )
}
const ArticleConsumer = ArticleContext.Consumer
export { ArticleProvider, ArticleConsumer, ArticleContext }