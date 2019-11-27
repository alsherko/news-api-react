import React, { useState, useEffect } from 'react'
import { API, API_KEY, PAGE_SIZE } from '../constants'

const ArticleContext = React.createContext()

const ArticleProvider = props => {
  const [searchValue, setSearchValue] = useState('')
  const [searchInArticles, setSearchInArticles] = useState(true)
  const [searchInSources, setSearchInSources] = useState(true)

  const [source, setSource] = useState('')
  const [language, setLanguage] = useState('en')
  const [sortBy, setSortBy] = useState('publishedAt')
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  const [isLoading, setIsLoading] = useState(false)
  const [hasErrored, setHasErrored] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const [articles, setArticles] = useState([])

  const fetchArticle = async url => {
    setIsLoading(true)

    try {
      const articleData = await fetch(url)
      const {
        status,
        totalResults,
        articles,
        message,
      } = await articleData.json()
      if (status === 'ok') {
        setLastPage(Math.ceil(totalResults / PAGE_SIZE))
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
        lastPage,
        isLoading,
        hasErrored,
        errorMessage,
        articles,
        searchInArticles,
        searchInSources,
        setSortBy,
        language,
        searchValue,
        setPage,
        setSearchValue,
        setSource,
        setLanguage,
        setSearchInArticles,
        setSearchInSources,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  )
}
const ArticleConsumer = ArticleContext.Consumer
export { ArticleProvider, ArticleConsumer, ArticleContext }
