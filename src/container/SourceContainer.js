import React, { useState, useEffect, useContext } from 'react'
import SourceList from '../components/sources/SourceList'
import { ArticleContext } from '../context/ArticleContext'
import { API, API_KEY } from '../constants'

const SourceContainer = () => {
  const appContext = useContext(ArticleContext)
  const { language, searchValue } = appContext
  const [sources, setSources] = useState([])
  const [searchResults, setSearchResults] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [hasErrored, setHasErrored] = useState(false)

  useEffect(() => {
    const fetchSources = async () => {
      setIsLoading(true)
      const url = new URL(`${API}sources`),
        params = {
          apiKey: API_KEY,
          language,
        }
      Object.keys(params).forEach(key =>
        url.searchParams.append(key, params[key])
      )
      try {
        const sourcesData = await fetch(url)
        const { sources } = await sourcesData.json()
        setSources(sources)
      } catch (e) {
        if (e) {
          setHasErrored(true)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchSources()
  }, [language])

  useEffect(() => {
    const onSearchSources = () => {
      if (searchValue.length > 0) {
        let searchResults = sources.filter(
          item =>
            item.id.indexOf(searchValue) > -1 ||
            item.name.indexOf(searchValue) > -1 ||
            item.category.indexOf(searchValue) > -1 ||
            item.description.indexOf(searchValue) > -1
        )
        setSearchResults(searchResults)
      } else {
        setSearchResults([])
      }
    }

    onSearchSources()
  }, [searchValue, sources])

  if (hasErrored) {
    return <p> Sorry an error occured while loading the sources </p>
  }

  if (isLoading) {
  }

  return (
    <SourceList
      sources={
        searchValue !== undefined && searchValue.length > 0
          ? searchResults
          : sources
      }
    />
  )
}

export default SourceContainer
