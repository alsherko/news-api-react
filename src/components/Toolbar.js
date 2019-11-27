import React, { useContext } from 'react'
import { ArticleContext } from '../context/ArticleContext'
import './Toolbar.css'

const Toolbar = () => {
  const appContext = useContext(ArticleContext)
  const {
    hasErrored,
    searchInArticles,
    searchInSources,
    setSortBy,
    setLanguage,
    setSearchInArticles,
    setSearchInSources,
  } = appContext

  const optionsSortBy = [
    { key: 0, text: 'Latest', value: 'publishedAt' },
    { key: 1, text: 'Top', value: 'relevancy' },
    { key: 2, text: 'Popular', value: 'popularity' },
  ]

  const optionsLanguage = [
    { key: 0, text: 'English', value: 'en' },
    { key: 1, text: 'العربية', value: 'ar' },
    { key: 2, text: 'Deutsch', value: 'de' },
    { key: 3, text: 'Español', value: 'es' },
    { key: 4, text: 'Français', value: 'fr' },
    { key: 5, text: 'עברית', value: 'he' },
    { key: 6, text: 'Italiano', value: 'it' },
    { key: 7, text: 'Nederlands', value: 'nl' },
    { key: 8, text: 'Norsk', value: 'no' },
    { key: 9, text: 'Português', value: 'pt' },
    { key: 10, text: 'Русский', value: 'ru' },
    { key: 11, text: 'Davvisámegiella', value: 'se' },
    { key: 13, text: '中文', value: 'zh' },
  ]

  if (hasErrored) return null

  return (
    <section className="toolbar">
      <div className="toolbar__item">
        <label>Search by:</label>
        <div className="toolbar__item__checkbox">
          <input
            type="checkbox"
            checked={searchInArticles}
            name="search_by"
            value="Articles"
            onChange={event => {
              setSearchInArticles(event.target.checked)
            }}
          />
          <span>articles</span>
        </div>
        <div className="toolbar__item__checkbox">
          <input
            type="checkbox"
            checked={searchInSources}
            name="search_by"
            value="Sources"
            onChange={event => {
              setSearchInSources(event.target.checked)
            }}
          />
          <span>sources</span>
        </div>
      </div>
      <div className="toolbar__item">
        <label htmlFor="sortBy-select">Sort by:</label>
        <select
          name="sortBy"
          onChange={event => {
            const { value } = event.target
            setSortBy(value)
          }}
        >
          {optionsSortBy.map(item => (
            <option key={item.key} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>

      <div className="toolbar__item">
        <label htmlFor="language-select">Language:</label>
        <select
          name="language"
          onChange={event => {
            const { value } = event.target
            setLanguage(value)
          }}
        >
          {optionsLanguage.map(item => (
            <option key={item.key} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default Toolbar
