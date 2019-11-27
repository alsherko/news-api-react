import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Source from './Source'

const SourceList = ({ sources }) => {
  return (
    <Fragment>
      {sources.map(source => (
        <Source
          key={`${source.id}_${source.name}_${source.language}`}
          source={source}
        />
      ))}
    </Fragment>
  )
}

SourceList.propTypes = {
  sources: PropTypes.array,
}

export default SourceList
