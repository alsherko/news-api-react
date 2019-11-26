import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ArticleContext } from '../../context/ArticleContext'
import './Source.css'

const Source = ({ source: { id, name, description, category } }) => {
  const appContext = useContext(ArticleContext)
  const { setSource } = appContext

  const onSourceClick = e => {
    e.preventDefault()
    setSource(id)
  }

  return (
    <div className="source" onClick={onSourceClick}>
      <h3>{name}</h3>
      <span className="source__category">{category}</span>
      <p>{description}</p>
    </div>
  )
}

Source.propTypes = {
  source: PropTypes.object,
}

export default Source
